import {createStore, combineReducer} from "redux";
import foodReducer from "./reducers/foodReducer";

const rootReducer = combineReducer({
    foods: foodReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;