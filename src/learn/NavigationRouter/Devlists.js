import { useState } from "react"
import { useParams } from "react-router-dom"
import data from '../../learn/data'
import { Link } from "react-router-dom"


const Devlists = () =>{

    // const[data,setdata] = useState(data)

    // const id = useParams().id

    return(
        <div className="text-center text-3xl py-2">
            {/* <h1>hello devlists {id}</h1> */}



            <h1>hello devlists</h1>
            {/* now we map the data  */}
            <div>
                {
                    data.map((val)=> {
                        return(
                            <div key={val.id} className="pt-3">
                                <Link to={`/devdetails/${val.id}`}>{val.id} {val.fname}</Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        
    )
}

export default Devlists