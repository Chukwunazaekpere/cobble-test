import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showProcessingGifAction, toggleConfirmAction, toggleModalAction } from '../redux/actions/appActions';
import "../styles/ModalStyles.css"
import { pascalCaseSeparator } from '../validators';
import { FormDataInterface } from './Modal';
import ProcessingGif from './ProcessingGif';


interface Props {
    formData: any
}

const Confirm = (props: Props) => {
    console.log("\n\t Confirm...")
    const dispatch = useDispatch();
    const [formDataPreview, setFormDataPreview] = useState({
        "accomodationStatus": '', 
        "rentAmount": 0, 
        "monthlyIncome": 0, 
        "paymentPlan": ""
    })

    const toggleModal = (action: string) => {
        if(action.toLowerCase() === 'edit'){
            dispatch(toggleConfirmAction(false))
            return dispatch(toggleModalAction(true));
        }
        sendRequest();
        dispatch(showProcessingGifAction({
            showGif: true,
            gifStatus: "loading",
            gifMessage: "Please wait. Cobble is processing your request..."
        }));
    }
  
    useEffect(() => {
        setFormDataPreview({
            "accomodationStatus": props.formData["Accomodation Status"],
            "monthlyIncome": props.formData["Monthly Income"],
            "paymentPlan": props.formData["Payment Plan"],
            "rentAmount": props.formData["Rent Amount"]
        })
    }, [props.formData])
    const actionBtns = ["Accept", "Edit"];

    const sendRequest = async() => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_REMOTE_SERVER}/rent/rent-request`, {...formDataPreview}, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const message = response.data.message;
            dispatch(toggleConfirmAction(false));
            dispatch(toggleModalAction(false));
            setTimeout(() => {
                dispatch(showProcessingGifAction({
                    showGif: true,
                    gifStatus: "success",
                    gifMessage: message
                }));
            }, 4000);
            setTimeout(() => {
                dispatch(showProcessingGifAction({
                    showGif: false,
                    gifStatus: "loading",
                    gifMessage: ""
                }));
                window.location.reload()
            }, 10000)
        } catch (error: any) {
            console.log("\n\t Error: ", error.response)
            const message = error.response ? error.response.data.message : "Network error";
            setTimeout(() => {
                dispatch(showProcessingGifAction({
                    showGif: true,
                    gifStatus: "error",
                    gifMessage: message
                }));
            }, 4000)
            setTimeout(() => {
                dispatch(showProcessingGifAction({
                    showGif: false,
                    gifStatus: "loading",
                    gifMessage: ""
                }));
            }, 10000)
        }
    }
    return (
        <div className="modal d-flex justify-content-center align-items-center ml-5 animate__animated animate__bounce"  role="dialog" id="modal" tabIndex={-1}>
            <div className="modal-dialog" role="">
                <div className="modal-content">
                    <section className="modal-header">
                        <p className=" text-teal-500 text-2xl font-serif">Please confirm the inputted details</p>
                    </section>
                    <section className="modal-body">
                        {
                            formDataPreview && Object.keys(formDataPreview).map(data => (
                                <article key={data}>
                                    <p className="font-serif">{pascalCaseSeparator(data)}:</p>
                                    <label className="font-serif" htmlFor="">{parseInt((formDataPreview as any)[data] as any) ? (+(formDataPreview as any)[data]).toLocaleString() : (formDataPreview as any)[data]}</label>
                                    <hr />
                                </article>
                            ))
                        }
                    </section>
                    <section className="modal-footer">
                        {
                            actionBtns.map(btns => (
                                <button 
                                    key={btns} 
                                    data-target="#modal"
                                    data-toggle="modal"
                                    onClick={() => toggleModal(btns)}
                                    data-dismiss={`${btns.toLowerCase() === 'cancel' ? 'modal' : undefined }`}
                                    className={`font-serif btn ${btns.toLowerCase() === 'accept' ? 'bg-blue-900' : 'btn-secondary'} text-white`}>
                                    {btns}
                                </button>
                            ))
                        }
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Confirm;


