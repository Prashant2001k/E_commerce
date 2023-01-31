import React, { Fragment, useEffect,useState } from 'react'
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
    clearErrors,
    getProductDetails,
} from "../../actions/productAction";
import ReactStars from  "react-rating-stars-component";
import Loader from "../layout/Loader/Loader"
import { useAlert } from "react-alert"
import ReviewCard from "./ReviewCard.js";
import MetaData from '../layout/MetaData';
import { addItemsToCart } from '../../actions/cartAction';

const ProductDetails = ({ match }) => {
    const alert = useAlert();
    const { product, loading, error } = useSelector((state) => state.productDetails);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, match.params.id,error,alert]);

    // if (!product) {
    //     return alert.error(error);
    //   }
    //   try {
        const [quantity, setQuantity] = useState(1);

        if(product){

            const options = {
                edit:false,
                color:"rgba(20,20,20,0.1)",
                activeColor:"tomato",
                size: window.innerWidth< 600? 20:25,
                value: product.ratings,
                readOnly: true,
            };


            const increaseQuantity = () => {
                if (product.Stock <= quantity) return;
            
                const qty = quantity + 1;
                setQuantity(qty);
              };
            
              const decreaseQuantity = () => {
                if (1 >= quantity) return;
             
                const qty = quantity - 1;
                setQuantity(qty);
              };

              const addToCartHandler = () => {
                dispatch(addItemsToCart(match.params.id, quantity));
                alert.success("Item Added To Cart");
              };

            return (
                <Fragment> 
                    {loading?<Loader/>:
                    <Fragment>
                    <MetaData title={`${product.name} -- ECOMMERCE`}/>
                <div className="ProductDetails">
                    <div>
                        <Carousel>
                            {product.images &&
                                product.images.map((item, i) => (
                                    <img
                                        className="CarouselImage"
                                        key={item.url}
                                        src={item.url}
                                        alt={`${i} Slide`}
                                    />
                                ))}
                        </Carousel>
                    </div>

                    <div>
                        <div className="detailsBlock-1">
                            <h2>{product.name}</h2>
                            <p>Product # {product._id}</p>
                        </div>
                        <div className="detailsBlock-2">
                            <ReactStars {...options} />
                            <span className="detailsBlock-2-span">
                                {" "}
                                ({product.numOfReviews} Reviews)
                            </span>
                        </div>
                        <div className="detailsBlock-3">
                            <h1>{`₹${product.price}`}</h1>
                            <div className="detailsBlock-3-1">
                                <div className="detailsBlock-3-1-1">
                                    <button onClick={decreaseQuantity}>-</button>
                                    <input readOnly type="number" value={quantity} />
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
                                <button onClick={addToCartHandler}>Add to Cart</button>
                            </div>
                            <p>
                                Status:
                                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                </b>
                            </p>
                        </div>
                        <div className="detailsBlock-4">
                            Description : <p>{product.description}</p>
                        </div>
                        <button className="submitReview">
                            Submit Review
                        </button>
                    </div>
                </div>

                <h3 className="reviewsHeading">REVIEWS</h3>

                {product.reviews && product.reviews[0]?(
                    <div className="reviews">
                        {product.reviews &&
                            product.reviews.map((review) => (
                            <ReviewCard review={review} />
                        ))}
                    </div> 
                ):(
                    <p className="noReviews">No Reviews Yet</p>
                )}

            </Fragment>
                    }
                </Fragment>
                
                
            )
        }
        else{ return (
            <Fragment>
                <Loader/>
            </Fragment>
        )}
    
        
    // } catch (error) {
        
    // }
   
}

export default ProductDetails

