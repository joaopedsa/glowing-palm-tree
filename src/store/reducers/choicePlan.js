const initialState = {
    plan: {
        value: 0,
        title: "Default",
        rateLimit: 1000,
        subTitle: "Default SubTitle"
    },
}

const ChoicePlanReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PLAN":
            return { ...state, plan: action.value};
        default:
            return state;
    }
}

export default ChoicePlanReducer;