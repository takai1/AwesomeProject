import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

export default createStore(reducers, applyMiddleware(thunk));
