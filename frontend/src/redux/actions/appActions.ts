import { ActionTypes, ConfirmActionInteface, FormDataActionInteface, ModalActionInteface, ShowGifActionInteface } from "./actionTypes"


export const toggleModalAction = (modalStatus: boolean) => {
    console.log("\n\t toggleModalAction...")
    return<ModalActionInteface>({
        type: ActionTypes.SHOW_MODAL,
        payload: modalStatus
    });
};

export const toggleConfirmAction = (modalStatus: boolean) => {
    console.log("\n\t toggleModalAction...")
    return<ConfirmActionInteface>({
        type: ActionTypes.SHOW_CONFIRM,
        payload: modalStatus
    });
};

export const formDataAction = (formData: object) => {
    console.log("\n\t formDataAction...")
    return<FormDataActionInteface>({
        type: ActionTypes.FORM_DATA,
        payload: formData
    });
};

export const showProcessingGifAction = (gifData: any) => {
    console.log("\n\t showProcessingGifAction...", gifData)
    return<ShowGifActionInteface>({
        type: ActionTypes.SHOW_GIF,
        payload: gifData
    });
};