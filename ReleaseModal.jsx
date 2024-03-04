import { useState } from "react";
import Confirmation from "./ConfirmationModal";
import "./ReleaseModal.css";

const selectedItems = [
    {
        ItemCode: 'HDMI1',
        clientName: 'Sensui'
    },
    {
        ItemCode: 'HDMI2',
        clientName: 'Eugine'
    },
    {
        ItemCode: 'HDMI3',
        clientName: 'Taguro'
    },
    {
        ItemCode: 'SPEAKER1',
        clientName: 'Master Jericho'
    },
    {
        ItemCode: 'SPEAKER2',
        clientName: 'Vincent'
    },
    {
        ItemCode: 'SPEAKER3',
        clientName: 'Raizen'
    },
    {
        ItemCode: 'SPEAKER2',
        clientName: 'Vincent'
    },
    {
        ItemCode: 'SPEAKER3',
        clientName: 'Jobo Catubig'
    }
];

const Release = ({ isOpen, onClose, confirmRelease, confirmDelete }) => {
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [confirmationMethod, setConfirmationMethod] = useState('');
    const [value, setValue] = useState('');

    const closeConfirmation = () => {
        setConfirmationOpen(false);
    };

    const handleRelease = () => {
        setConfirmationMethod('Release');
        setConfirmationOpen(!confirmationOpen);
    };

    const deleteReservation = () => {
        setConfirmationMethod('Delete');
        setConfirmationOpen(!confirmationOpen);
    };

    if (value === "Release") {
        confirmRelease();
        onClose();
        setValue('');
    } else if (value === "Delete") {
        confirmDelete();
        onClose();
        setValue('');
    }

    console.log(value);

    return (
        <div className={`release-container ${isOpen ? 'open' : ''}`}>
            <Confirmation
                isOpen={confirmationOpen}
                onClose={closeConfirmation}
                confirm={setValue}
                method={confirmationMethod}
            />

            <div className="release">
                <div className="release-content">
                    <div className="release-head">
                        <h6><b>Release Item</b></h6>
                        <span onClick={onClose}>&times;</span>
                    </div>

                    <div className="release-items">
                        <ul>
                            <li className="releasing-item-info head">
                                <div className="item-info"><b>ITEM</b></div>
                                <div className="client-info"><b>CLIENT</b></div>
                            </li>
                            {selectedItems.map((item, index) => (
                                <li key={index} className="releasing-item-info">
                                    <div className="item-info">
                                        <p>{item.ItemCode}</p>
                                    </div>
                                    <div className="client-info">
                                        <p>{item.clientName}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="release-buttons">
                        <button className="reserve-item-delete" onClick={deleteReservation}>Delete</button>
                        <button className="reserve-item-release" onClick={handleRelease}>Release</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Release;
