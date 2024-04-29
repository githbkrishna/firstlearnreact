
// const Reducers = (state = 0,action) => {
// we can directly pass state value but this will not like this in big projects
    
let initialstate = 0
 
const Reducers = (state = initialstate,action) => {

    switch (action.type) {
        case "increment":
            
            return state + 1;

            case "decrement":

                return state - 1;
    
        default:
            
            return state;
    }

}

export default Reducers