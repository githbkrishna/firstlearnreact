import "./Basic1.css"

// function Basic1() {
//     //it will not render
//     // <h1>hello basic react</h1>
// }


// function Basic1() {
//     return(
//         <h1>hello basic react</h1>
//     )
//     //it will render
// }


// function Basic1() {
//     return(
//         <h1>hello basic react</h1>
//         <h1>hello basic react</h1>
//     )
//     //it will give error
// }


// function Basic1() {
//     return(
//         <div>
//             <h1>hello basic react 1</h1>
//             <h1>hello basic react 2</h1>
//         </div>
//     )
//     // if you are writing multiple element so it will be in a div container or fragment style
// }


// fragment style
// function Basic1(){
//     return(
//         <>
//             <h2>cxghc</h2>
//             <h2>bfhcvhf</h2>
//             <h5>dhggchc</h5>
//         </>
//     )
// }


// function Basic1() {
//     return(
//         <div>
//             <h1>basic react 1</h1>
//             <h1>basic react 2</h1>
//             <h1>basic react 3</h1>
//         </div>
//     )
// }


// use of props 
// function Basic1(props) {
//     return(
//         <div>
//             <h1>{props.product}</h1>
//             <h1>{props.price}</h1>
//         </div>
//     )
// }


// function Basic1(props) {
//     return(
//         <div>
//             <h1>{props.product}</h1>
//             <h1>{props.price}</h1>
//         </div>
//     )
// }


// fragment style
function Basic1(props) {
    return(
        <>
            <main>
                <div className="container">
                    <h1>products</h1>
                    <h3>produt - {props.product}</h3>
                    <h3>price - {props.price}</h3>
                </div>
            </main>
        </>
    )
     
}


export default Basic1;