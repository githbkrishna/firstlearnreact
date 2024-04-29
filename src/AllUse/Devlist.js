const Devlist = (props) => {

    console.log(props);
    return(
        <div>
            <h1>From Devlist.js </h1>
            <div className="w-full flex flex-wrap justify-center place-content-center gap-10 h-full p-5 font-mono capitalize">
                {
                    props.datainfo.map((val)=>{
                        return(
                            <div key={val.id} className="w-3/12 rounded-md border-solid border-2 border-black text-1xl bold text-center p-2 h-[30rem] bg-cyan-500 shadow-lg shadow-cyan-500/50">
                                <h1 >Id: {val.id}</h1>
                                <h1 >fname: {val.fname}</h1>
                                <h1>lname: {val.lname}</h1>
                                <img src={val.imgurl} className="py-2 w-full h-3/4" alt="" />
                                <button className="border-solid border-2 border-black p-2" onClick={()=>{props.del(val.id)}}>click</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Devlist