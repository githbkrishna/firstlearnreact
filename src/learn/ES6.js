
// var fname = "Hariom"
// var fname = "singh"
//     fname = "jay"
// console.log(fname);

// if(1 == 1){
//     var a = "hello"
//     console.log(a + " block scope");
// }
// console.log(a + " global scope");

// if(1 == 1){
//     var fname = "hello"
//     console.log(fname + " from fname block scope");
// }
// console.log(fname + "  from fname global scope");

// if(1 == 1){
//     var name = "hello"
//     console.log(name + "  from name block scope");
// }
// console.log(name + "  from name global scope");


// let fname = "Hariom"
//     fname = "singh"
// console.log(fname);

// if(1 == 1){
//     let a = "hello"
//     console.log(a + " block scope");
// }
// console.log(a + " global scope");

// if(1 == 1){
//     let name = "hello"
//     console.log(name + "  from name block scope");
// }

// console.log(name + "  from name global scope give error (not store value)");


// const fname = "Hariom"
// console.log(fname);

// if(1 == 1){
//     const a = "hello"
//     console.log(a + " block scope");
// }
// console.log(a + " global scope");

// if(1 == 1){
//     const name = "hello"
//     console.log(name + "  from name block scope");
// }

// console.log(name + "  from name global scope give error (not store value)");




// function ES6 () {

    // const arr1 = [1,2,3,4,5,6]
    // let result = arr1.map(test)
    // // console.log(arr1);

    // function test(val) {
    //     return val % 2 === 1
    // }
    // console.log(result);

    // const arr1 = [1,2,3,4,5,6]
    // let result = arr1.map(
    //     function test(val) {
    //         return val % 2 == 1
    //     }
    // )
    // console.log(result);

    // const arr1 = [1,2,3,4,5,6]
    // let result = arr1.map( (val)=>{
    //     return val % 2 == 1
    // })
    // console.log(result);

    // const data = [
    //     {
    //         id:1,
    //         fname:"hariom",
    //         lname:"singh"
    //     },
    //     {
    //         id:2,
    //         fname:"hari",
    //         lname:"xyz"
    //     },
    //     {
    //         id:3,
    //         fname:"om",
    //         lname:"abc"
    //     }
    // ]

    // let res = data.map(test)
    // function test(val) {
    //     return val
    // }
    // console.log(res);

    // return(
    //     <>        
    //         <div>
    //             <h1>hello ES6</h1>
    //             <h2>id : {res[0].id}</h2>
    //             <h2>fname : {res[0].fname}</h2>
    //             <h2>lname : {res[0].lname}</h2> 
    //         </div>      
    //     </>
    // )


    // return(
    //     <>
    //         {
    //             data.map((val)=>{
    //                 return (
    //                     <div>
    //                         <h1>hello ES6</h1>
    //                         <h2>id : {val.id}</h2>
    //                         <h2>fname : {val.fname}</h2>
    //                         <h2>lname : {val.lname}</h2> 
    //                     </div>
    //                 )
    //             })
    //         }
    //     </>
    // )
// }



function ES6() {

    const data = [

        {
            id:1,
            fname:"hariom",
            lname:"singh"
        },
        {
            id:2,
            fname:"hari",
            lname:"xyz"
        },
        {
            id:3,
            fname:"om",
            lname:"abc"
        }
    ]

    // let res = data.filter(test)
    // console.log(test);

    
    return (
        <>
            {
                data.map((val)=>{
                    return(
                        <div>
                            <h1>id = {val.id}</h1>
                            <h1>fname = {val.fname}</h1>
                            <h1>lname = {val.lnamename}</h1>
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}



export default ES6;