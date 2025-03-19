import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CBadge } from "@coreui/react";
import "./index.css";

export const Verfication = () => {  // إزالة JSX.Element هنا
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 ">
            <CContainer
                className="d-flex flex-column gap-4 align-items-center justify-content-center bg-white rounded-3 shadow-sm"
                style={{
                    maxWidth: "450px",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <CRow className="w-100 justify-content-center">
                    <CCol xs={12} className="text-center">
                        <CCard className="p-1 border-0 bg-light">
                            <CCardBody className="p-2 d-flex flex-column gap-1">
                                <div className="image-container">
                                    <img src={"/images/protect.png"} alt="Protect" className="img-fluid w-50 mb-1" />
                                </div>
                                <h6 className="text-dark m-0">Two-Factor Verification</h6>
                                <p className="text-muted small mb-1">
                                    Enter the verification code we sent to <span className="text-primary">********93</span>
                                </p>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

                <CRow className="w-100 mt-1 text-center">
                    <CCol xs={12} className="d-flex justify-content-between align-items-center">
                        <p className="text-secondary small mb-1">Type your 6-digit security code</p>
                        <CBadge color="danger" className="px-2 py-1 fs-7">00:10</CBadge>
                    </CCol>
                </CRow>

                <CRow className="w-100 mt-1 justify-content-center">
                    <CCol xs={10} className="d-flex justify-content-between">
                        {[...Array(6)].map((_, i) => (
                            <div key={i}
                                className="border border-secondary rounded p-1 text-center"
                                style={{ width: "35px", height: "35px", fontSize: "16px" }}>
                                {i === 0 ? "*" : i === 1 ? "2" : ""}
                            </div>
                        ))}
                    </CCol>
                </CRow>

                <CRow className="w-100 mt-2 text-center">
                    <CCol>
                        <CButton color="primary" className="w-75 py-1">Submit</CButton>
                        <p className="mt-1 text-muted small">Didn’t receive code? <a className="text-danger" href="">Resend</a></p>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Verfication;
