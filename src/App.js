import Basic1 from "./learn/Basic1";
import './learn/Basic1.css'
import CardImg from "./learn/CardImg";
import Clascomp from "./learn/Clascomp";
import ES6 from "./learn/ES6";
import Navbar from "./Navbar/Navbar";
// default export
// import Moduls from "./learn/Moduls";
// named export
import { Moduls } from "./learn/Moduls";
import Props from "./learn/Props";
import data from "./learn/data";
import Lifecycle from "./learn/Lifecycle";
import Hooks1 from "./learn/Hooks1";
import Card from "./learn/Card";
import Login from "./learn/Login";
// import Developer from "./AllUse/Developer";
import { useEffect, useState } from "react";
import Nav from "./learn/NavigationRouter/Nav";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "./learn/NavigationRouter/About";
import Home from "./learn/NavigationRouter/Home";
import Mainpage from "./learn/NavigationRouter/Mainpage";
import Error from "./learn/NavigationRouter/Error";
import Developer  from "./learn/NavigationRouter/Developer";
import Devlists from "./learn/NavigationRouter/Devlists";
import Devdetails from "./learn/NavigationRouter/Devdetails";
import FetchComp from "./learn/fetchApi/FetchComp";
// import ImgMagnifire from "./AllUse/ImgMagnifire";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux 
import {useDispatch, useSelector} from 'react-redux'
import { Dec, Inc } from "./redux/Actions/Actions";



// function App() {
//   return (
//     <div className="App">

//       <h1 id="apph1">hello react</h1>
//       <Basic1 product="cap" price="70"/>
//       <Basic1/>
//       <Basic1/>
      
//     </div>
//   );
// }

// there are 2 ways to import
// <Basic1 />
// <Basic1> </Basic1>


// function App() {
//   return (
//     <div className="App">

//       <h1 id="apph1">hello react from App.js</h1>

//       <div className="section"> 
//       <Basic1 product="cap" price="60"/>    
//       <Basic1 product="shirt" price="80"/>    
//       <Basic1 product="pants" price="90"/>  
//       </div>

//     </div>
//   );
// }


// for ES6 practice
// function App() {
//   return (
//     <div className="App">

//       {/* <ES6/> */}
      
//       <Navbar/>
//       <CardImg/>

//       {/* <Clascomp/> */}

//     </div>
//   );
// }


// for moduls
// function App() {
//   return (
//     <div className="App">

//       {/* default export */}
//       <Moduls/>
//       {/* named export */}


//     </div>
//   );
// }




// for props
// this is parent props 
// here you will see how to send variable, function, object through the props

// props drilling
// parent => child => grandchild

// function App() {

//   let fname = "hariom"

//   function test() {
//     alert("hello sumit")
//   }
//   for calling a function use {()=> {test}} this otherwise function will be called already

//   let sub = {
//     id:1,
//     age:12,
//   }

//   return (
//     <div className="App">
//       <h1>this is parent from app</h1>
//       <br />

//       {/* fname is variable  */}
//       {/* test is function  */}
//       {/* sub is object  */}

//       <Props parent={fname} clickk={test} subject = {sub}/>
//     </div>
//   );
// }



// function App() {

//   // console.log(data);

//   return (
//     <div className="App">

//       {/* <Props firstname = {data[0]}/> */}

//       {/* using map for multiple boxes  */}
//       <Props firstname = {data}/>

//     </div>
//   );
// }



// // for Lifecycle
// function App() {
//   return (
//     <div className="App">
//       <Lifecycle fname="html"/>
//     </div>
//   );
// }


// for Hooks
// function App() {

//   return (
//     <div className="App">
//       <Hooks1/>
//     </div>
//   );
// }


// // for cards
// function App() {
//   return (
//     <div className="App">
//       <Card/>
//     </div>
//   );
// }



// // for login
// function App() {
//   return (
//     <div className="App">
//       <Login/>
//     </div>
//   );
// }



// // for developer
// function App() {
//   // const [count,setcount] = useState(0)
//   // const [count1,setcount1] = useState(0)
//   // useEffect(()=>{
//   //   console.log("useEffect called");
//   // },[count])
//   // useEffect(()=>{
//   //   console.log("useEffect called");
//   // },[count1])

//   return (
//     <div className="App">
//       {/* <h1>{count}</h1>
//       <button onClick={()=>setcount(count + 1)}>plus</button>
//       <h1>{count1}</h1>
//       <button onClick={()=>setcount1(count1 + 1)}>plus</button> */}
//       <h1>From App.js</h1>
//       <Developer/>
//     </div>
//   );
// }



// // for fetch API 
// function App() {

//   return (
//     <div className="App">

//       <BrowserRouter>

//       <Nav/>

//         <Routes>

//           <Route path="/" element={<Mainpage/>}/>
//           <Route path="/home" element={<Home/>} />
//           {/* Home or home both will work && given path should be same as the Link to="" path */}

//           <Route path="/About" element={<About/>} />

//           <Route path="/developer" element={<Developer/>} />

//           {/* <Route path="/developer/devlists/:id" element={<Devlists/>} /> */}


//           <Route path="/developer/devlists" element={<Devlists/>}/>

//           <Route path="/devdetails/:id" element={<Devdetails/>}/>


//           <Route path="/fetchcomp" element={<FetchComp/>}/>


//           {/* <Route path="/magnifire" element={<ImgMagnifire/>}/> */}


//           <Route path="/*" element={<Error/>} />

//         </Routes>

//       </BrowserRouter>

//       {/* for sweet alerts */}
//       <ToastContainer />


//     </div>
//   );
// }






// for redux


function App() {

 const getdata =  useSelector((state)=>state.Reducers)
  console.log(getdata);

  const dispatch = useDispatch()


  return (
    <div className="App text-center text-2xl p-3 capitalize">

      <h1>hello redux</h1>

      <div>

      <button onClick={()=>{dispatch(Inc())}} className="border-2 border-solid border-black p-1 text-xl my-5">increment</button>

      <h1>{getdata}</h1>

      <button onClick={()=>{dispatch(Dec())}} className="border-2 border-solid border-black p-1 text-xl my-5">derement</button>

      </div>
      
    </div>
  );
}

// creact redux folder
// create Actions & Reducers folder inside it
// create file Action.js in Actions folder And define actions inside it
// create file Reducers.js in Reducers folder And define Switch cases inside it
// create file MainReducers.js in Reducers folder And combine all reducers inside it
// create Stores.js inside src folder and createStore of mainreducers
// go to index.js and import provider, wrap App component inside Provider and pass the Stores.js in the provider store attribute like store={Stores.js}
// come to App.js import useSelector and pass state ans parameter & take state.Reducers
// import useDispatch and discpatch the action (Inc,Dec) in the onclick function


export default App;


// packages
// "react-router-dom": "^6.22.0",
// "json-server": "^0.17.4",
// "react-toastify": "^10.0.4",
// "sweetalert2": "^11.10.5",
// "redux": "^5.0.1",
// "react-redux": "^9.1.0",

// "devDependencies": {
//   "tailwindcss": "^3.4.1"
// }