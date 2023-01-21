import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from  "react-rating-stars-component";



const Product = ({product}) => {
  const options={
    edit:false,
    color:"rgb(210, 210, 210)",
    activeColor:"#ffe234",
    size:window.innerWidth <600 ? 20 :25,
    value:product.ratings,  
    isHalf:true,
  };
  return (
  <Link className="productCard" to={`/product/${product._id}`}>
    <img src={product.images[0].url} alt={product.name}/>
    <p>{product.name}</p>
    <div>
      <ReactStars  {...options} /> {" "}
      <span>{`(${product.numOfReviews} Reviews)`}</span>
    </div>
      <span>{`₹${product.price}`}</span>
  </Link>
  )
}
// `/product/${product._id}`
export default Product