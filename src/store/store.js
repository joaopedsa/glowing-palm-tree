import { combineReducers } from 'redux'

import PaymentReducer from "./reducers/payment";
import PlansReducer from "./reducers/plans";
import ChoicePlanReducer from "./reducers/choicePlan";

export const stores = combineReducers({
    payment: PaymentReducer,
    plans: PlansReducer,
    choicePlan: ChoicePlanReducer,
});