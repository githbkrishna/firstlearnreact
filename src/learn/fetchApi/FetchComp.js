import React, { useEffect, useState } from 'react'
import "../NavigationRouter/NavRoute.css"
import { toast } from 'react-toastify';
// import swal from 'sweetalert'
import Swal from 'sweetalert2';

function FetchComp() {

    const[data,setdata]= useState([])
    
    const[imgurl,setimgurl]=useState("")
    const[fullname,setfullname]=useState("")
    const[age,setage]=useState("")
    const[role,setrole]=useState("")
    const[para,setpara]=useState("")

    // for update 
    const[id,setid]=useState()

    
    useEffect(()=>{
        refresh()
    },[])
    
    // get data 
    // console.log(fetch('http://localhost:8000/devlopers'));
    function refresh() {
        fetch('http://localhost:5001/devlopers').then((resolve)=>{
            // console.log(resolve);
            // console.log(resolve.json());

            resolve.json().then((result)=>{
                // console.log(result);
                setdata(result)
            })
        })
    }

    // u have define array in useState because u are try to acceess fetched data 
    // console.log(data);

    
    // submit data 
    function sub() {

        let data = {fullname,age,para,role,imgurl}
        // console.log(data);

        fetch('http://localhost:5001/devlopers',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        .then((result)=>{
            result.json().then((res)=>{
                console.log(res);
                refresh()
            })
        })

        empty()

        // first we have written it outside then so it will not refreshng properly
        // refresh()
        
        toast.success("You can provide any string", {
            icon: "🚀",
            theme:"dark"
        });

        // swal({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success",
        // });
    }

    function empty() {
        setimgurl("")
        setpara("")
        setage("")
        setfullname("")
        setrole("")
    }

    // delete data 
    function del(id) {
        // console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                // delete data 
                fetch(`http://localhost:5001/devlopers/${id}`,{
                    method:"Delete"
                }).then((result)=>{
                    result.json().then((res)=>{
                        // console.log(res);
                        refresh()
                    })
                })

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });


       
        
        // first we have written it outside then so it will not refreshng properly
        // refresh()
        

        // toast.warn("Lorem ipsum dolor",{
        //     theme:"dark"
        // })
    }

    // update data 
    function upd(id) {
        // console.log(id);
        
        // jugadu method
        // let upp = data[id - 1]
        // console.log(upp);


        // right method
        let filterdata = data.filter((val)=>{
            return val.id == id;
        })
        console.log(filterdata);

        let getdetails = filterdata[0]
      
        setimgurl(getdetails.imgurl)
        setfullname(getdetails.fullname)
        setage(getdetails.age)
        setrole(getdetails.role)
        setpara(getdetails.para)
        setid(getdetails.id)
    }

    function updatedetails () {

        // how to take id from out of map method
        // we will set a new state for id

        let updtdata = {fullname,role,age,imgurl,para,id}

        fetch(`http://localhost:5001/devlopers/${id}`,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updtdata)
        })
        .then((result)=>{
            result.json().then((res)=>{
                console.log(res);
                refresh()
                empty()
            })
        })
    }
    

  return (
    <div className='fetchcomp'>
      
      <h1 className='text-center text-2xl py-2'>Fetch component</h1>

      <div className='flex gap-3 flex-wrap place-content-center justify-center'>
        {
            data.map((val)=>{
                return(
                    <div key={val.id} className='w-3/12 border-2 border-black p-2 h-[26rem] text-center hover:shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)]'>
                        <div className='h-40 w-40 m-auto rounded-full overflow-hidden'>
                            <img src={val.imgurl} className='h-full w-full rounded-full transition ease-in-out duration:450 hover:scale-125' alt="" />
                        </div>
                        <h1 className='capitalize py-1'><span className='font-bold'>fullname:</span> {val.fullname}</h1>
                        <h1 className='capitalize py-1'><span className='font-bold'>Age:</span> {val.age}</h1>
                        <h1 className='py-1'><span className='font-bold'>Role:</span> {val.role}</h1>
                        <h1 className='py-1'><span className='font-bold'>Desc:</span> {val.para}</h1>


                        {/* for delete */}
                        <button onClick={()=>{del(val.id)}}>Delete</button>
                        <button onClick={()=>{upd(val.id)}}>Update</button>
                    </div>
                )
            })
        }
      </div>

      <div className="form my-5 m-auto w-1/4 p-5 text-center bg-gradient-to-r from-sky-500 to-indigo-500">

        <input type="text" value={imgurl} onChange={(e)=>setimgurl(e.target.value)} placeholder='enter imgurl' className='p-2'/> <br /><br />
        <input type="text" value={fullname} onChange={(e)=>setfullname(e.target.value)} placeholder='enter fullname' className='p-2'/> <br /><br />
        <input type="number" value={age} onChange={(e)=>setage(e.target.value)} placeholder='enter age' className='p-2'/> <br /><br />
        <input type="text" value={role} onChange={(e)=>setrole(e.target.value)} placeholder='enter role' className='p-2'/> <br /><br />
        <input type="text" value={para} onChange={(e)=>setpara(e.target.value)} placeholder='enter para' className='p-2'/> <br /><br />

        {/* <button onClick={sub} className='text-white bg-slate-800 hover:bg-slate-100 hover:text-black font-bold'>submit</button> */}
        
        {
            upd == true ?
            <button onClick={updatedetails} className='text-white bg-slate-800 hover:bg-slate-100 hover:text-black font-bold'>update details</button>
            :
            <button onClick={sub} className='text-white bg-slate-800 hover:bg-slate-100 hover:text-black font-bold'>submit</button>
            
        }
        
        <button onClick={updatedetails} className='text-white bg-slate-800 hover:bg-slate-100 hover:text-black font-bold'>update details</button>

      </div>

    </div>
  )
}

export default FetchComp

// json-server --watch fetchdb.json --port 8000