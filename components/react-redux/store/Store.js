import rootReducer from "../reducers/RootReducer";
import { createStore } from "redux";

const store = createStore(rootReducer)

export default store;