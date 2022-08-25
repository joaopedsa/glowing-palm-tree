const initialState = {
    method: "crypto",
    info: {
    },
    user: {
        email: "",
        apiKeyName: "",
    }
};

const PaymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PAYMENT_METHOD":
            return { ...state, method: action.value }
        case "ADD_PAYMENT_USER":
            return { ...state, user: action.value }
        case "ADD_PAYMENT_INFO":
            return { ...state, info: action.value }
        default:
            return state;
    }
}   

export default PaymentReducer;