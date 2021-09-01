
const initiate = {
    showName: true,
    name: "Monko"
}
const NameReducer = (state=initiate, action) => {
    switch (action.type){
        case 'S': {
            return {
                ...state,
                showName: true
            }
        }
        case 'C': {
            return {
                ...state,
                showName: false
            }
        }
        default: return state
    }
}
export default NameReducer;