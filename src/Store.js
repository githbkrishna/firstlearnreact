import { createStore } from "redux";
import MainReducers from "./redux/Reducers/MainReducers";

const Stores = createStore(MainReducers)

export default Stores