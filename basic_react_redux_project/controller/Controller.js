import React from "react";
import {connect} from "react-redux";

const Controller = (props) => {
    return(
        <div>
            <button type="button" onClick={()=>props.ADD()}>ADD</button>
            <button type="button" onClick={()=>props.SUB()}>SUB</button>
        </div>
    );
}

function mapDispatchToProps(dispatch){
    return {
        ADD: ()=>{
            dispatch({
                type: 'ADD'
            });
        },
        SUB: ()=>{
            dispatch({
                type: 'SUB'
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Controller);