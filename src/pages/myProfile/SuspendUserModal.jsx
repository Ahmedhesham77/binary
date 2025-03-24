import React from 'react';
import { CModal, CModalBody, CModalFooter, CButton } from '@coreui/react';

const SuspendUserModal = ({ visible, onClose, onConfirm }) => {
    return (
        <CModal visible={visible} onClose={onClose} alignment="center" >
            <CModalBody className="text-center  susbend-box">
                <img src="/images/info-circle.png" alt="Warning" width={100} className="mb-3 info-circle" />
                <h5 className="fw-bold">Are you sure?</h5>
                <p className="text-muted">You won’t be able to revert user!</p>
            </CModalBody>
            <CModalFooter className="d-flex justify-content-center">
                <CButton color="primary" className="px-2 susbend-susbend-btn" onClick={onConfirm}>
                    Yes, Suspend User!
                </CButton>
                <CButton className="w-25 susbend-close-btn" onClick={onClose}>
                    Cancel
                </CButton>
            </CModalFooter>
        </CModal>
    );
};

export default SuspendUserModal;
