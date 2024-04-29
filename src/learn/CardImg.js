import data from './data'
import './Basic1.css'
import read from '../assets/read.jpg'


// function CardImg() {
//     return(
//         <div>
//             <h1>hello</h1>
//             {/* img from url can be visible */}
//             <img src="https://images.pexels.com/photos/1462633/pexels-photo-1462633.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

//             {/* img from inside the folder, first you have to mport it see import of read.jpg image */}
//             <img src={read} alt="" />
//         </div>
//     )
// }




function CardImg (){
    // console.log(data);
    return(
        <div className="containers">
            <h1>here is our cards</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic blanditiis deleniti nostrum modi cupiditate at ipsam saepe ad voluptatibus, dolor ab!</p>
            <div className="container">
                {
                    data.map((val)=>{
                        return(
                            <div className="contain">
                                <h1>fname: {val.fname}</h1>
                                <p>age: {val.age}</p>
                                <span>
                                    <img src={val.imgurl} alt="" />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



// for filtered data
// if you want only filtered data that has age > 3
// so just filter and store in new variable after that just change :-
// variable name.map :-
// filtered.map()


// function CardImg (){
 
//     const filtered = data.filter((filt)=>{
//         return filt.age > 3
//     })
//     // console.log(filtered);

//     return(
//         <div className="container">
//             {
//                 filtered.map((val)=>{
//                     return(
//                         <div className="contain">
//                             <h1>fname: {val.fname}</h1>
//                             <p>age: {val.age}</p>
//                             <span>
//                                 <img src={val.imgurl} alt="" />
//                             </span>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

export default CardImg