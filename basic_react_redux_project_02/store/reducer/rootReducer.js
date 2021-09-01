import NameReducer from "./NameReducer";
import CounterReducer from "./CounterReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    nameChange: NameReducer,
    counter: CounterReducer
});
export default rootReducer;