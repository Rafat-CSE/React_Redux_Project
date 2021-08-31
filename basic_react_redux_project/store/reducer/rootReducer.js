
const initialValue = {
    count: 100
}

const rootReducer = (state=initialValue, action) => {

    switch (action.type) {
        case 'ADD':{
            return {
                count: state.count + 1
            }
        }
        case 'SUB':{
            return {
                count: state.count - 1
            }
        }
        default: return state
    }

    return state;
}
export default rootReducer;