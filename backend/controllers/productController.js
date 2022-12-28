const Product = require("../models/productmodel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


//Create Product ------Admin

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    
    req.body.user=req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
});




// -------get All Products
// exports.getAllProducts=async(req,res)=>{
//     const products= await Product.find();

//     res.status(201).json({
//         success:true,
//         products
//     });
// }
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;


    //            query,querystr
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await apiFeature.query;

    res.status(201).json({
        success: true,
        products
    });
})


// Update product ---Admin
exports.updateProduct = catchAsyncErrors(async (req, res) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

    res.status(200).json({
        success: true,
        product
    })
})

// delete product 
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully"
    })
})

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404));

        // return res.status(500).json({
        //     success:false,
        //     message:"Product not found"
        // }) 
    }
    res.status(200).json({
        success: true,
        product
    })
});


