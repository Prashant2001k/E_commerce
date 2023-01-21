import './App.css';
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import WebFont from "webfontloader";
import {useEffect} from 'react';

import Home from "./component/Home/Home.js"
import ProductDetails from './component/Product/ProductDetails';

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
        {/* <Route path="/" element={<Home/>}/> */}
      </Switch>
      <Footer/>
    </Router>   
  );
}

export default App; 


