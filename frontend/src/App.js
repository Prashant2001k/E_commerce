import './App.css';
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import WebFont from "webfontloader";
import {useEffect} from 'react';

import Home from "./component/Home/Home.js"
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products.js';
import Search from './component/Product/Search.js';

function App() {

  useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
    }
    });
  },[]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product/:id" component={ProductDetails}/>
        <Route exact path="/products" component={Products}/>
        <Route path="/products/:keyword" component={Products}/>
        <Route exact path="/search" component={Search}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Switch>
      <Footer/>
    </Router>   
  );
}

export default App; 


