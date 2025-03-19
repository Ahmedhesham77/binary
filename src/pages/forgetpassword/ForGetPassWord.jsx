import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CInputGroup, CFormInput, CInputGroupText } from "@coreui/react";
import "./index.css";

export const ForGetPassWord = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <CContainer className="p-4 bg-white rounded-3 shadow-lg" style={{ maxWidth: "450px" }}>
                <CCard className="border-0 bg-light text-center p-1">
                    <CCardBody className="p-1">
                        <div className="image-container">
                            <img src={"/images/cyber.png"} alt="Cybersecurity" className="img-fluid w-50 mb-0" />
                        </div>
                        <h2 className="text-dark mb-0 text-start mt-1 fw-600">Forget Password</h2>
                        <p className="text-muted small text-start mb-0">Enter your email to reset your password.</p>
                    </CCardBody>
                </CCard>

                <CRow className="mt-2">
                    <CCol>
                        <CInputGroup className="border rounded p-1">
                            <CInputGroupText className="bg-white border-0">

                            </CInputGroupText>
                            <CFormInput type="email" placeholder="Email" className="border-0" />

                        </CInputGroup>
                    </CCol>
                </CRow>


                <CRow className="mt-1 border border-primary rounded p-1">
                    <CCol className="text-center">
                        <h4 className="rockstar-font mb-2">529648</h4>

                        <hr className="my-2 border-2 border-primary" />

                        <p className="text-muted small mb-2">Type the text you hear or see:</p>

                        <CFormInput className="rounded-pill py-1" />
                    </CCol>
                </CRow>


                <CRow className="mt-2">
                    <CCol className="text-center">
                        <CButton color="primary" className="w-100 py-2">
                            Submit
                        </CButton>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default ForGetPassWord;
