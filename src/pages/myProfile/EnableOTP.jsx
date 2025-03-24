import React from "react";
import {
    CCard,
    CCardBody,
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CButton,
    CRow,
    CCol,
    CInputGroupText,
    CInputGroup
} from "@coreui/react";

const EnableOTP = () => {
    return (
        <CCard className="p-4 otp-card">
            <CCardBody>
                <h3 className="text-center fw-bold fs-4">Enable One Time Password</h3>
                <p className="text-center text-muted mb-2">
                    Verify Your Mobile Number for SMS
                </p>
                <p className="text-center text-muted fs-7">
                    Enter your mobile phone number with country code and we will send you a verification code.
                </p>

                <CForm>
                    <CRow className="mb-3">
                        <CCol md={12}>

                            <CInputGroup>
                                <CInputGroupText className="d-flex align-items-center justify-content-center bg-transparent">
                                    US (+1)
                                </CInputGroupText>
                                <CFormInput type="text" placeholder="Phone Number" style={{ borderLeft: "0" }} />
                            </CInputGroup>
                        </CCol>
                    </CRow>

                    <CRow className="mt-3">
                        <CCol md={6}>
                            <CButton color="primary" className="w-100 py-2 otp-submit-btn">
                                Submit
                            </CButton>
                        </CCol>
                        <CCol md={6}>
                            <CButton color="light" className="w-100 py-2 border otp-close-btn">
                                Cancel
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default EnableOTP;
