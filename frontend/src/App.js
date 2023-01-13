import './App.css';
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
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
      <Routes>
        {/* <Route extact path="/" component={Home}/> */}
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App; 
