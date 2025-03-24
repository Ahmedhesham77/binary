import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CInputGroup, CFormInput, CInputGroupText } from "@coreui/react";
import Footer from "../../components/Footer"
import "./index.css";

export const ForGetPassWord = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-between min-vh-100 bg-light forget-password-container">
            <CContainer className="p-4 bg-white rounded-4 shadow-lg" style={{ maxWidth: "464px", marginBlock: "auto" }}>
                <CCard className="border-0  text-center p-1">
                    <CCardBody className="p-1 forget-password">
                        <div className="forget-password-image-container mb-2">
                            <img src={"/images/cyber.png"} alt="Cybersecurity" className="img-fluid  " />
                        </div>
                        <h2 className="mb-0 text-start mt-1 fw-700">Forget Password</h2>
                        <p className="fs-7 text-start mb-0">Enter your email to reset your password.</p>
                    </CCardBody>
                </CCard>

                <CRow className="mt-2">
                    <CCol>
                        <CInputGroup className="border rounded p-1 mb-2">
                            <CInputGroupText className="bg-white border-0 p-0">
                                <img src="/images/sms.png" alt="" />
                            </CInputGroupText>
                            <CFormInput type="email" placeholder="Email" className="border-0 text-muted" />

                        </CInputGroup>
                    </CCol>
                </CRow>


                <CRow className="mt-1 border border-primary rounded p-1 w-100 ms-0">
                    <CCol className="text-center">
                        <h4 className="rockstar-font my-2 fs-5">529648</h4>

                        <hr className="my-2 border-2 border-primary" />

                        <CInputGroup className="align-items-center forget-password-input-group">
                            <CInputGroupText className="text-muted bg-white border-0 txt-input">
                                Type the text you hear or see:
                            </CInputGroupText>
                            <CFormInput className="rounded-pill py-1" />
                        </CInputGroup>
                    </CCol>
                </CRow>


                <CRow className="mt-3 mb-0 mx-0">
                    <CCol className="text-center px-0 ">
                        <CButton color="primary" className="w-100 py-2">
                            Submit
                        </CButton>
                    </CCol>
                </CRow>
            </CContainer>
            <Footer />
        </div>
    );
};

export default ForGetPassWord;
