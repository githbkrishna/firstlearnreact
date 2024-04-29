import React, { useState } from "react"
import read from '../assets/read.jpg'
import './Basic1.css'

const Card = () => {

    const[count,setCount] = useState(1)
    const[price,setPrice] = useState(1000)

    function increment() {
        setCount(count + 1)
        setPrice(price + 1000)
    }

    function decrement() {
        if(count>1 && price > 1000){
            setCount(count - 1)
            setPrice(price - 1000)
        }
    }
    return(
        <div className="cards">
            <img src={read} alt="" />
            <div className="details">
                <span>Quantity: {count}</span>
                <span>RS: {price}</span>
            </div>
            <div className="addtocart">
                {/* <span onClick={()=>{setCount(count + 1)} {setPrice(price - 1000)}}>+</span> */}
                <span onClick={increment}>+</span>
                <span onClick={decrement}>-</span>
            </div>

        </div>
    )
}

// this.state  is a class comp feature      

export default Card