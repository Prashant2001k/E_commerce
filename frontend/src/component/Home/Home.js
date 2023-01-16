import React, { Fragment, useEffect } from 'react'
import "./Home.css";
import { CgMouse } from "react-icons/all";

import Product from "./Product.js"
import MetaData from "../layout/MetaData"
import {getProduct} from "../../actions/productAction"
import { useSelector,useDispatch } from 'react-redux';



const product={
  name:"Blue Tshirt",
  images:[{url:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}],
  price:"₹3000",
  _id:"prashant",
}; 


const Home = () => {
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getProduct());
  },[dispatch]);
  return (<Fragment> 

        <MetaData title="ECOMMERCE"/>
        <div className="banner">
                <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>
                Scroll 
                <CgMouse />
                </button>
            </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>
        
        <div className='container' id="container">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>

          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
        </div>
    </Fragment>
  )
}

export default Home