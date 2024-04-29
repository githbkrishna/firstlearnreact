import React, { useState } from "react";

class Lifecycle extends React.Component{

    constructor(){
        super()
        console.log("constructor called");

        // all the things like string, function, object should be created in constucture only 

        this.state= {    // 1st
            fname:"html",
            lname:"css",
        }

        // this.state = "hello"    // 2nd   
    }

    componentDidMount(){
        console.log("componentDidMount called");
    } 
    
    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    render(){

        // console.log(this.props);
        // console.log(this.props.fname);

        console.log("render called");

        
        return(
            <div>
                {/* take html from props  */}
                {/* <h1>Hello LifeCycle {this.props.fname}</h1> */}

                {/* 1st -> take this from this.state object  */}
                {/* <h1>Hello LifeCycle {this.state.lname}</h1> */}

                {/* 2nd -> take this from this.lname string  */}
                {/* <h1>Hello classcomp {this.state}</h1> */}

                <h2>hello html change to {this.state.fname}</h2>

                <button onClick={()=>{this.setState({fname:"css"})}}>click to change</button>
            </div>
        )
    }
}

export default Lifecycle