import Devlist from "./Devlist"
import data from "../learn/data"
import { useState } from "react"

const Developer = () => {

    const[datainfo, setdatainfo] = useState(data)

    function del (id) {
        
        let filterrr = datainfo.filter((devv)=>{
            return devv.id != id
        })
        setdatainfo(filterrr)    
    }

    // console.log(del);

    return(
        <div>

            <h1>From Developer.js</h1>

            <Devlist datainfo= {datainfo} del= {del}/>
        </div>
    )
}

export default Developer