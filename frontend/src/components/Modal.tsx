import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formDataAction, toggleConfirmAction, toggleModalAction } from '../redux/actions/appActions';
import "../styles/ModalStyles.css"
import { inputs } from '../validators';


interface Props {
    formData: any
}

export interface FormDataInterface {
    "Accomodation Status": string, 
    "Rent Amount": number , 
    "Monthly Income": number, 
    "Payment Plan": string | number
    [key: string]: string | number
}

const Modal = (props: Props) => {
    console.log("\n\t Modal...")
    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState("")
    const [formData, setFormData] = useState<FormDataInterface>({
        "Accomodation Status": '', 
        "Rent Amount": 0, 
        "Monthly Income": 0, 
        "Payment Plan": ""
    })
  
    const accStat = ["Select accomodation status", "Rent renewal", "Searching", "Ready to pay for a new place"]
    const paymentPlan = ["Select payment plan", "1", "2", "3", "6", "12"]
    const placeholders = ["What's your accomodation status?", "How much are you requesting for your rent?", "What's your monthly income?", "Choose a payment plan (in months)"];
    const actionBtns = ["Preview", "Cancel"];
    const fieldTypes = ['select', 'input', 'input', 'select'];
    const helpText = ["", "", "", "This is the frequency of re-payment."]
    const handleInputChange = (field: string, value: string | number) => {
        console.log("\n\t formData: ", field, value)
        const newData = formData;
        newData[field] = value;
        setFormData({
            ...newData
        });
        setErrorMessage("")
    };
    const previewFormData = () => {
        const report = inputs(Object.keys(formData), Object.values(formData))
        if(report) return setErrorMessage(report);
        dispatch(formDataAction(formData))
        dispatch(toggleModalAction(false));
        dispatch(toggleConfirmAction(true))
    };
    useEffect(() => {
        props.formData && setFormData({
            "Accomodation Status": props.formData["Accomodation Status"],
            "Monthly Income": props.formData["Monthly Income"] as number,
            "Payment Plan": props.formData["Payment Plan"],
            "Rent Amount": props.formData["Rent Amount"]as number
        })
    }, [props.formData])
    console.log("\n\t props.formData: ", formData && formData)
    return (
        <div className="modal d-flex justify-content-center align-items-center ml-5 animate__animated animate__bounce"  role="dialog" id="modal" tabIndex={-1}>
            
            <div className="modal-dialog" role="">
                <div className="modal-content">
                    <section className="modal-header">
                        <span className="text-teal-500 text-2xl font-serif">Fill in the required details below</span> <br />
                    </section>
                    <section className="modal-body">
                        {
                            errorMessage &&
                            <p className="text-2md text-center font-weight-bold text-red-700 font-serif my-3">{errorMessage}</p>
                        }
                        {
                            Object.keys(formData).map((name, index) => (
                                <section key={name}>
                                    {
                                        fieldTypes[index] === "select" ?
                                            <article className="form-select form-group ">
                                                <label className="font-serif text-sm align-start d-flex" htmlFor="">{placeholders[index]}:</label>
                                                <select 
                                                    onChange={e => handleInputChange(name, e.target.value)}
                                                    className="font-serif form-control" name="" id="">
                                                    {
                                                        name.toLowerCase().includes('payment') ?
                                                        paymentPlan.map(item => (
                                                            <option  className="font-serif" key={item} value={item.toLowerCase().includes("select") ? "" : item}>{item}</option>
                                                        ))
                                                        :
                                                        accStat.map(item => (
                                                            <option className="font-serif" key={item} value={item.toLowerCase().includes("select") ? "" : item}>{item}</option>
                                                        ))
                                                    }
                                                </select>
                                                <span className="font-serif text-orange-700 text-sm font-weight-bold">{helpText[index]}</span>
                                            </article>
                                            :
                                            <article className="form-group">
                                                <label className="font-serif text-sm align-start d-flex" htmlFor="">{placeholders[index]}:</label>
                                                <input 
                                                    onChange={e => handleInputChange(name, e.target.value)}
                                                    type="number" 
                                                    min={1} 
                                                    placeholder={`Enter ${name}`} 
                                                    className="font-serif form-control" 
                                                    defaultValue={formData && (name.toLowerCase().includes('income') || name.toLowerCase().includes('amount')) ? "" : formData[name]}
                                                />
                                                <span className="font-serif text-orange-700 font-weight-bold">{helpText[index]}</span>
                                            </article>
                                    }
                                </section>
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
                                    onClick={() => previewFormData()}
                                    data-dismiss={`${btns.toLowerCase() === 'cancel' ? 'modal' : undefined }`}
                                    className={`font-serif btn ${btns.toLowerCase() === 'cancel' ? 'btn-secondary' : 'btn-info'} text-white`}>
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

export default Modal;


