import React from "react";
import { useSelector } from "react-redux";
const TestRedux = () => {
    const showName = useSelector(state => state.nameChange.showName);
    const name = useSelector(state => state.nameChange.name);
    const counter = useSelector(state => state.counter.count);
    return(
        <div>
            <h1>My name is Rafat Hossain. My sure name is {showName && name}</h1>
            <h1>Count = {counter}</h1>
        </div>
    );
}

export default TestRedux;