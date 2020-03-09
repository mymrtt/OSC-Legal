import { createStore } from "redux";
import RootReducers from "./reducers/rootReducers";

const store = createStore(RootReducers);

export default store;
