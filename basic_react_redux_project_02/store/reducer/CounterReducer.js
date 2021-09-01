
const initiate = {
    count: 100
}
const CounterReducer = (state=initiate, action) => {
    switch (action.type){
        case 'ADD': {
            return {
                count: state.count + 1
            }
        }
        case 'SUB': {
            return {
                count: state.count - 1
            }
        }
        default: return state
    }
}
export default CounterReducer;