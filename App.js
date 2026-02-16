// import React from 'react';

// function App() {
//   return (
//     <div>+-
//       <h1 
//       style={{
//         color: "blue",
//         backgroundColor: "yellow",
//         textAlign:"center",
//       }}>this is my First React Application</h1>
//   <button 
//   style={{
//     color: "green",
//     backgroungColor: "black",
//     marginLeft:500,
//     padding:"10px 20px",
//     borderRadius:"5px",
//     border:"1px solid black",
//     boxShadow:"2px 2px 5px",
//   }}>Submit</button>
//   <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod</p>
//     </div>
//   );
// };
// export default App;
// 


//React using UseState
// import React, { useState } from 'react';
// import "../src/counting.css";

// function App(){
//   const [count, setCount] = useState(0);

//   //Arrow Function
//   const increment =()=>{
//     setCount(count + 1);
//   };
//   const decrement =()=>{
//     setCount(count - 1);
//   };
//   const clear =()=>{
//     setCount(0);
//   };
//   return(
//     <div>
//       <h1 className='heading'>Counting Buffer</h1>
//       <p>Counting: {count}</p>
//       <button onClick={increment}>Increase</button>
//       <button onClick={decrement}>Decrease</button>
//       <button onClick={clear}>Clear</button>
//     </div>
//   );
// };
// export default App;

//simple intrest
import React,{useState} from"react";
function App(){
  const[price,setPrice]=useState();
  const[rate,setRate]=useState();
  const[time,setTime]=useState();
  const[intrest,setIntrest]=useState();
  const simple_intrest=()=>{
    const intrest =price*rate*time/100;
    setIntrest(simple_intrest);
  };
  return(
    
    <div>
      <h1>simple intrest caluculator using react</h1>
      <input
       type="number"
       placeHolder="Enter priniciple amt here"
      />
    </div>
  );
}
export default App;