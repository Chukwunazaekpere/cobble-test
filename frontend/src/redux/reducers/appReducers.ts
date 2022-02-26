import { ActionTypes, FormDataActionInteface, ModalActionInteface, ShowGifActionInteface } from "../actions/actionTypes";
import { StoreInterface } from "../store";


export const modalReducer = (store: StoreInterface, action: ModalActionInteface) => {
    switch(action.type){
        case ActionTypes.SHOW_MODAL:
            store.showModal = action.payload
            return ({
                ...store
            });
        default:
            return({
                ...store
            })
    }
};

export const confirmReducer = (store: StoreInterface, action: ModalActionInteface) => {
    switch(action.type){
        case ActionTypes.SHOW_CONFIRM:
            store.showConfirm = action.payload
            return ({
                ...store
            });
        default:
            return({
                ...store
            })
    }
};


export const formDataReducer = (store: StoreInterface, action: FormDataActionInteface) => {
    switch(action.type){
        case ActionTypes.FORM_DATA:
            store.formDetails = action.payload
            return ({
                ...store
            });
        default:
            return({
                ...store
            })
    }
}

export const showProcessingGifReducer = (store: StoreInterface, action: ShowGifActionInteface) => {
    switch(action.type){
        case ActionTypes.SHOW_GIF:
            console.log("\n\t showProcessingGifReducer-payload: ", action.payload)
            const { showGif, gifStatus, gifMessage, } = action.payload
            store.processingData = {
                showGif,
                gifStatus,
                gifMessage,
            };
            return ({
                ...store
            });
        default:
            return({
                ...store
            })
    }
}