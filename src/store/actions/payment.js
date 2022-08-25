export const addPaymentMethods = (paymentMethods) => {
    return {
        type: "ADD_PAYMENT_METHOD",
        value: paymentMethods
    }
}

export const addPaymentUser = (user) => {
    return {
        type: "ADD_PAYMENT_USER",
        value: user
    }
}