const initialState = {
    key: "APIKEY TETSTEKAJSLIAJSLAJ"
}

const ApiKeyReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_API_KEY":
            return { ...state, key: action.value }
        default:
            return state;
    }
}

export default ApiKeyReducer;