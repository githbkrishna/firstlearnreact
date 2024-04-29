import React from 'react'
import Propcomp from './Propcomp'
import Basic1 from "./Basic1.css";
// sending data from parent to child 
// sending data from one to another

// function Props(props) {
//     // console.log(props);
//   return (
//     <div>

//       <h1> this is child from props</h1>
//       <h3>this is variable fname: {props.parent} </h3>

//       <button onClick={props.clickk}>this is click function</button>

//       <p>this is object id: {props.subject.id} , age: {props.subject.age}</p>

//       <br />

//       <Propcomp child = {props.parent}/>

//     </div>
//   )
// }


function Props(props) {
    // console.log(props);
  return (
    <div className="propscontainer">
      <h2>hello props</h2>

      <div className="propscontain">
        {
          props.firstname.map((val,i)=>{
            return(
              <div key={i} className='propscont'>
                <img src={val.imgurl} alt="" />
                <div className="show">
                  <h1>{val.fname} <span>{val.lname}</span></h1>
                  <p>{val.para}</p>
                </div>
              </div>
            )
          })
          // using key = {i} for passing a key for props to remove the key error in props
        }
      </div>

      {/* <div className="propscontain">
        <div className='propscont'>
          <img src={props.firstname.imgurl} alt="" />
          <div className="show">
            <h1>{props.firstname.fname} <span>{props.firstname.lname}</span></h1>
            <p>{props.firstname.para}</p>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Props

// how to pass key 

{/* https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json */}