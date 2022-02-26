import { confirmReducer, formDataReducer, modalReducer, showProcessingGifReducer } from "./appReducers";

import { combineReducers } from "redux";

const combinedReducers = combineReducers({
    modalStatus: modalReducer,
    confirmStatus: confirmReducer,
    formData: formDataReducer,
    gifData: showProcessingGifReducer
});

export default combinedReducers;