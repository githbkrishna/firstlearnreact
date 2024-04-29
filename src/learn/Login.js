import { useState } from "react"


const Login = () => {

    const[login,setlogin] =  useState(true)
    
    const[email,setemail] =  useState("")
    const[pass,setpass] =  useState('')

    function submit() {
        
    }

    // abc@mail.com
    // 123

    return(
        <div>

            {
                login ?

                <div className="border-2 border-solid border-black w-60 p-4">
                    <h1>please login...</h1>

                    <form action="">
                        <input className="my-2 border-solid border-2 border-indigo-600 text-black" type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                        <input className="mb-2 border-solid border-2 border-indigo-600 text-black" type="password" value={pass} onChange={(e)=> setpass(e.target.value)} />

                        <input className="border-solid border-2" type="submit" onClick={submit}/>
                    </form>

                    {/* <button onClick={submit}></button> */}

                    {/* <button onClick={()=>{setlogin(false)}}>login</button> */}

                </div>
    
                :
    
                <div>
                    <h1>logout...</h1>   
                    <button onClick={()=>{setlogin(true)}}>logout</button>
                </div>
            }

        </div>
    )
}

export default Login