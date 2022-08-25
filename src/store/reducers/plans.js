const initialState = [{
    id: 1,
    title: "Basic",
    subTitle: "The basics for individual",
    rateLimit: "10,000",
    value: "1,000"
},
{
    id: 2,
    title: "Enterprise",
    subTitle: "The basics for individual",
    rateLimit: "100,000",
    value: "9,000"
}]

const PlansReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_PLANS":
            return action.value;
        default:
            return state;
    }
}

export default PlansReducer;