import React, { useState } from 'react'

const Hooks1 = () => {

    const [change,setchange] = useState("change hook")
    // console.log(change);

    // function test() {
    //     setchange("hooks changed")
    // }

    const [count, setcount] = useState(0)
    // console.log(count);

    const [login, setlogin] = useState(false)
    // const [login, setlogin] = useState(true)

  return (
    <div>
      <h1>hello hook</h1>
      <h2>change this {change} </h2>
      {/* <button onClick={test}>change</button> */}
      <button onClick={()=>setchange("hooks changed")}>change</button>

      <br />
      <br />

      <h1>count:- {count}</h1>
      <button onClick={()=>{setcount(count + 1)}}>count</button>

      <br />
      <br />

      {
      login ? 
      <div>
        <h1>please logout...</h1>
        <button onClick={()=>{setlogin(false)}}>logout</button>
       </div>
      : 
      <div>
        <h1>please login...</h1>
        <button onClick={()=>{setlogin(true)}}>login</button>
      </div>
      }
      

      

    </div>
  )
}

export default Hooks1
