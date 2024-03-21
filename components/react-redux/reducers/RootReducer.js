import changeTheState from "./IncrementDecrement"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    changeTheState,
    // changeTheBackGround  // --> not implemented yet.
    //This is just to give an example that now here we can use n no of reducers.
})

export default rootReducer;  