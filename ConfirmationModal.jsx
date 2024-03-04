import "./ConfirmationModal.css";

const Confirmation = ({isOpen, onClose, confirm, method}) => {
    const confirmHandler = () => {
        confirm(method)
        onClose();

    }
    const cancelHandler = () => {
        confirm('')
        onClose();
    }


    return(
        <div className={`confirmation-modal ${isOpen ? 'open':''} `}>
            <div className="confirmation-body">
              <span>Are you sure you want to <b>{method}</b>?</span>   
              <div className="confirmation-button">
              <button onClick={cancelHandler} className="cancel">Cancel</button>
              <button onClick={confirmHandler} className="confirm">Confirm</button>
              </div>
              
              
            </div>
        </div>
    )
}

export default Confirmation;
