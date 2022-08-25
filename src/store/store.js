import { combineReducers } from 'redux'

import PaymentReducer from "./reducers/payment";
import PlansReducer from "./reducers/plans";
import ChoicePlanReducer from "./reducers/choicePlan";
import ApiKeyReducer from './reducers/apikey';

export const stores = combineReducers({
    payment: PaymentReducer,
    plans: PlansReducer,
    choicePlan: ChoicePlanReducer,
    apikey: ApiKeyReducer
});