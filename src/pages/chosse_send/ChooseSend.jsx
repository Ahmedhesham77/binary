import { CContainer, CRow, CCol, CCard, CCardBody, CButton } from "@coreui/react";
import "./index.css";

const ChooseSend = () => {  // قمنا بإزالة JSX.Element هنا
    return (
        <CContainer fluid className=" vh-80 d-flex align-items-center justify-content-center mt-4">
            <CRow className="w-100 justify-content-center">
                <CCol md={5}>
                    <CCard className="shadow-lg py-2 px-3">
                        <CCardBody className="d-flex flex-column align-items-center text-center gap-2">
                            <div className="image-container">
                                <img src={"/images/protect.png"} alt="Protect" className="img-fluid w-50 mb-1" /> {/* تقليل المسافة أسفل الصورة */}
                            </div>
                            <h2 className="fw-bold text-dark text-start">Choose how to send the verification code</h2> {/* تصغير حجم العنوان */}
                            <p className="text-secondary mb-2 text-start">Please choose one of the methods to receive your verification code</p> {/* تقليل المسافة أسفل النص */}

                            <div className="d-flex justify-content-center gap-2 my-1">
                                <CButton
                                    color="primary"
                                    variant="outline"
                                    className="d-flex align-items-center email-button CButton"
                                    style={{ borderStyle: "dashed" }}
                                >
                                    Email
                                </CButton>

                                <CButton
                                    color="secondary"
                                    variant="outline"
                                    className="d-flex align-items-center   CButton"
                                    style={{ borderStyle: "dashed" }}
                                >
                                    Message
                                </CButton>

                                <CButton
                                    color="danger"
                                    variant="outline"
                                    className="d-flex align-items-center  CButton"
                                    style={{ borderStyle: "dashed" }}
                                >
                                    Application
                                </CButton>

                                <CButton
                                    color="success"
                                    variant="outline"
                                    className="d-flex align-items-center CButton"
                                    style={{ borderStyle: "dashed" }}
                                >
                                    WhatsApp
                                </CButton>
                            </div>

                            <div className="d-flex flex-row gap-2 w-100 align-items-center justify-content-evenly">
                                <CButton
                                    color="primary" className="fw-bold flex-grow-1 px-4 send-verfication-btn">
                                    Send Verification Code
                                </CButton>
                                <CButton
                                    color="light" variant="outline" className="text-dark fw-bold px-3 have-code-btn">
                                    I have a code
                                </CButton>
                            </div>

                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export default ChooseSend;
