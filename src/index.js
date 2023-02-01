import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Compo(){
  const [state,setState]=useState("state")
  function data(hlo){
    console.log("data",hlo);
  }
  var a={
    name:"arun"
  }
  return <div>
            {state}
            <button onClick={()=>{
              setState("hello")
            }}>update</button>
            <Header name={a.name} data={data} feauture={"string"}/>
            <Banner />
            <Content />
            <Footer />
         </div>
}
root.render(<Compo />);

