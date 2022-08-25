const initialState = {
    plans: []
}

const ChoicePlanReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PLANS":
            return action.value;
        default:
            return state;
    }
}

export default ChoicePlanReducer;