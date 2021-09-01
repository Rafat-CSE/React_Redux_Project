import React from "react";
import { useDispatch, useSelector} from "react-redux";
import IncrementOrDecrement from "../store/action/IncrementOrDecrement";
import ShowNameOrNot from "../store/action/ShowNameOrNot";


const Controller = (props) => {

    const showName = useSelector(state => state.nameChange.showName);
    const dispatch =  useDispatch();
    return(
        <div>
            <button type="button" onClick={()=>dispatch(IncrementOrDecrement().add)}>ADD</button><br/><br/>
            <button type="button" onClick={()=>dispatch(IncrementOrDecrement().sub)}>SUB</button><br/><br/>
            {showName == false ? <button type="button" onClick={()=>dispatch(ShowNameOrNot().show)}>Show Name</button> :
                <button type="button" onClick={()=>dispatch(ShowNameOrNot().cancel)}>Cancel Name</button>}
        </div>
    );
}



export default Controller;