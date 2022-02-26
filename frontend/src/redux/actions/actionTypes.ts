export enum ActionTypes {
    SHOW_MODAL = "SHOW_MODAL",
    SHOW_CONFIRM = "SHOW_CONFIRM",
    FORM_DATA = "FORM_DATA",
    SHOW_GIF = "SHOW_GIF" 
};

export interface ModalActionInteface {
    type: string,
    payload: boolean
};

export interface ConfirmActionInteface {
    type: string,
    payload: boolean
};

export interface FormDataActionInteface {
    type: string,
    payload: object
};

export interface ShowGifActionInteface {
    type: string,
    payload: any
};