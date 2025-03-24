import { CContainer, CRow, CCol, CCard, CCardBody, CButton } from "@coreui/react";
import "./index.css";
import Footer from "../../components/Footer";

const ChooseSend = () => {
    return (

        <div className="choose-send-container">
            <CContainer fluid className="d-flex align-items-center justify-content-center flex-grow-1 ">

                <CRow className="w-100 justify-content-center">
                    <CCol md={5} className=" w-md-auto">
                        <CCard className="shadow-lg py-2 px-3">
                            <CCardBody className="d-flex flex-column align-items-center text-center gap-2">
                                <div className="image-container">
                                    <img src={"/images/protect.svg"} alt="Protect" className="img-fluid w-50 mb-1" /> {/* تقليل المسافة أسفل الصورة */}
                                </div>
                                <h2 className="fw-bold text-dark text-start">Choose how to send the verification code</h2> {/* تصغير حجم العنوان */}
                                <p className="text-secondary mb-2 text-start">Please choose one of the methods to receive your verification code</p> {/* تقليل المسافة أسفل النص */}

                                <div className="d-flex justify-content-center gap-2 my-1 w-100">
                                    <CButton
                                        color="primary"
                                        variant="outline"
                                        className="d-flex align-items-center justify-content-center email-button w-25 CButton"
                                        style={{ borderStyle: "dashed" }}
                                    >
                                        Email
                                    </CButton>

                                    <CButton

                                        variant="outline"
                                        className="d-flex align-items-center justify-content-center w-25 p-2 CButton border-2 shadow-lg"
                                        style={{ borderStyle: "dashed" }}
                                    >
                                        Message
                                    </CButton>

                                    <CButton

                                        variant="outline"
                                        className="d-flex align-items-center justify-content-center w-25 CButton border-2 shadow-lg"
                                        style={{ borderStyle: "dashed" }}
                                    >
                                        Application
                                    </CButton>

                                    <CButton

                                        variant="outline"
                                        className="d-flex align-items-center justify-content-center w-25 CButton  border-2 shadow-lg"
                                        style={{ borderStyle: "dashed" }}
                                    >
                                        WhatsApp
                                    </CButton>
                                </div>

                                <div className="d-flex flex-row gap-2 mt-3  w-100 align-items-center justify-content-evenly">
                                    <CButton
                                        color="primary" className="fw-bold flex-grow-1  send-verfication-btn ">
                                        Send Verification Code
                                    </CButton>
                                    <CButton
                                        color="light" className="text-dark fw-bold  have-code-btn">
                                        I have a code
                                    </CButton>
                                </div>

                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
            <Footer />
        </div>

    );
};

export default ChooseSend;
