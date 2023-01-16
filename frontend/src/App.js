import './App.css';
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import WebFont from "webfontloader";
import {useEffect} from 'react';

import Home from "./component/Home/Home.js"

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
        <Route extact path="/" component={Home}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Switch>
      <Footer/>
    </Router>  
  );
}

export default App; 


