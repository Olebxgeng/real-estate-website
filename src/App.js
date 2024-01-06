import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import "./App.css"

function App() {
  
//   let white_gradient_styles = {
//     position:"absolute",
//     width: "20rem",
//     height: "20rem",
//     background: "rgba(255, 255, 255, 0.522)",
//     filter: "blur(100px)",
//     borderRadius: "100%"
// }
// style={white_gradient_styles}
  
  return (
    <div className="App">
       <div /> 
          <div className='white_gradient' >
          <Header/>
          <Hero/>
       </div>

    </div>
  );
}

export default App;
