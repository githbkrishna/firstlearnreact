import { Link, useNavigate } from "react-router-dom"


const Developer = () =>{
    // console.log(data);

    const navigate = useNavigate()

    function test() {
        navigate("/About")
    }

    return(
        <div>

            <h1 className="text-center text-2xl py-2">hello Developer</h1>
            <li>
                {/* <Link to="/developer/devlists/1">Mani</Link> */}
                {/* here we are putting custom id in the last to the path */}
                {/* now we will take this id from the child (devlists) by using useParams() */}
                {/* go and see devlists */}
            </li>
            <li>
                {/* <Link to="devlists/2">Summet</Link> */}
                {/* here we are putting custom id in the last to the path */}
            </li>



            {/* now we make it dynamic using the data  */}
            <li className="text-center text-1xl py-2">
                <Link to="/developer/devlists">Devlist</Link>
                {/* here we are putting custom id in the last to the path */}
            </li>
           
           <div>
                <li onClick={test} className="w-4/12 m-auto">
                    <img src="https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                </li>
           </div>

        </div>
    )
}

export default Developer