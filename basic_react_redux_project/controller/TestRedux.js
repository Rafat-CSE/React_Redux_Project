import React from "react";
import {connect} from "react-redux";

const TestRedux = (props) => {
    return(
        <div>
            <h2>This is {props.count}</h2>
        </div>
    );
}
function mapStateToProps (state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(TestRedux);