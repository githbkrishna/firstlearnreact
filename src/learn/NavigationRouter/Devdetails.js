import React, { useEffect, useState } from "react";
import data from "../../learn/data";
import { useParams } from "react-router-dom";

function Devdetails() {

    const id = useParams().id
    // console.log(id);

    const[datas,setdatas] = useState(data)

    useEffect(()=>{
      let filtredata = datas.filter((filt)=>{
        return filt.id == id
      })
      setdatas(filtredata)
    },[])


    const[count,setcount] = useState(1)

    
    const prices = data[0].price
    // console.log(prices + " from price");
    const[price,setprice] = useState(prices)
    
    function increase() {
      setcount(count+ 1)
      setprice(price + 4000)
    }
    // console.log(setprice);
    
    function decrease() {
      if(count>1){
        setcount(count- 1)
        setprice(price- 4000)
      }
    }

  return (
    <div>
      {
        datas.map((val) => {
            return (
            <div key={val.id} className="text-center text-1xl py-7 w-2/5 border-solid border-2 border-black h-94 m-auto">

                <h1>{val.id}</h1>
                <h1>{val.fname}</h1>
                <h1>{val.lname}</h1>
                <p className="text-sm py-2">{val.para}</p>
                <div className="text-center w-full h-2/6">
                  <img src={val.imgurl} className=" w-full h-1/6 m-auto" alt="" />
                </div>
                <div>
                  <p>points: {price}</p>
                  <span>Rating: {count}</span>
                  <div className="p-2">
                    <span className="p-2 text-white bg-black" onClick={increase}>+</span>
                    <span className="p-2 text-white bg-black ml-2" onClick={decrease}>-</span>
                  </div>
                </div>      
            </div>
            );
        })
      }
    </div>
  );
}

export default Devdetails;
