import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Confirm from '../components/Confirm';
import Modal from '../components/Modal';
import ProcessingGif from '../components/ProcessingGif';
import { toggleModalAction } from '../redux/actions/appActions';
import "../styles/HomeScreenStyles.css";

interface Props {

}

const HomeScreen = (props: Props) => {
    const dispatch = useDispatch();
    const store = useSelector((store: any) => store)
    const { modalStatus, confirmStatus, formData, gifData } = store;
    const { showModal } = modalStatus;
    const { showConfirm } = confirmStatus;
    const { formDetails } = formData;
    let processingData =  "" as any
    if(Object.keys(gifData).length > 0){
        processingData = gifData.processingData
    }else{
        processingData = {showGif: false, gifStatus: "loading", gifMessage: ""}
    }
    console.log("\n\t processingData: ", processingData)
    console.log("\n\t gifData: ", gifData)

    const { gifStatus, gifMessage, showGif } = processingData;
    
    console.log("\n\t HomeScreen: ", gifStatus, gifMessage, showGif)
    const toggleModal = () => {
        dispatch(toggleModalAction(true));
    };
    return (
        <React.Fragment>
            {
                showGif ?
                <ProcessingGif status={gifStatus} message={gifMessage} />
                :
                <div className="home-screen d-flex">
                    {
                        showModal && 
                        <Modal 
                            formData={formDetails}
                        />
                    }
                    {
                        showConfirm && 
                        <Confirm 
                            formData={formDetails}
                        />
                    }
                    <div className="d-flex row justify-content-center">
                        <button 
                            data-target="#modal"
                            data-toggle="modal"
                            onClick={() => toggleModal()}
                            style={{width: "10vw"}} 
                            className="animate__animated animate__bounce btn btn-info self-center text-dark btn-box-shadow">
                            Explore!
                        </button>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default HomeScreen