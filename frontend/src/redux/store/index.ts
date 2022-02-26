import { createStore } from "redux"
import combinedReducers from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface StoreInterface {
    showModal: boolean
    showConfirm: boolean
    processingData: any
    formDetails: any
}

// const InitialStore: StoreInterface = {
//     showModal: false,
//     showConfirm: false
// }

const AppStore = createStore(
    combinedReducers,
    composeWithDevTools()
);

export default AppStore