import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from  "react-rating-stars-component";


const options={
  edit:false,
  color:"rgb(210, 210, 210)",
  activeColor:"#ffe234",
  size:window.innerWidth <600 ? 20 :25,
  value:2.5,  
  isHalf:true,
};

const Product = ({product}) => {
  console.log(product.name);
  return (
  <Link className="productCard" to={product._id}>
    <img src={product.images[0].url} alt={product.name}/>
    <p>{product.name}</p>
    <div>
      <ReactStars  {...options} /> {" "}
      <span>(256 Review)</span>
    </div>
    <span>{product.price}</span>
  </Link>
  )
}

export default Product