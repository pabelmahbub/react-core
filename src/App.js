import React from 'react';

import './App.css';

function App() {
  const nayok=["Anwar","Huhuh","jhjhjj","jdjhjh"]
  
  return (
    <div class="App">
      <header className="App-header">
        

        <Product></Product>
      
     
      
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:"2px solid gray",
    borderRadius:"6px",
    height:"300px",
    width:"300px",
    backgroundColor:"Orange",
    float:"left"
  
}
  return(
    <div style="productStyle">
      <h2>Name:</h2>
      <h1>Price</h1>
      <button>Buy Now</button>
    </div>
  )
}




function Person(){
  return <h1>Tohfatul Jannat</h1>
}
function Love(props){
  return(
  <div style={{border:"3px solid yellow",backgroundColor:"cyan",margin:"10px",padding:"20px"}}>
    <h1>name={props.name + " "+props.nayika}</h1>
    <h3>hey Buddy</h3>
  
  </div>
  )
}
export default App;
