import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import "./style.css"
import Footer from "../../components/Footer";
export default function PasswordChanged() {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center password-changed-container"

        >
            <CContainer
                className="d-flex flex-column justify-content-center align-items-center bg-white rounded-4 p-4 shadow-lg"
                style={{ maxWidth: "464px", marginBlock: "auto" }}

            >
                <div
                    className="d-flex flex-column align-items-center justify-content-center w-100 py-3 rounded-3"
                    style={{
                        background: "linear-gradient(180deg, #E8F3FF, #B8D9FF)",
                    }}
                >
                    <img
                        src="/images/protect.png"
                        className="img-fluid mb-3 shield-img"

                    />
                    <div className="d-flex flex-column align-items-center w-100 px-3 password-changed-text">
                        <h3 className="mb-2" >
                            {"Password is Changed"}
                        </h3>
                        <span className="text-muted" style={{ fontSize: "14px" }}>
                            {"You can now log in again."}
                        </span>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center w-100 mt-3">
                    <CButton

                        color="primary"
                        className="w-100 py-2 mb-2 rounded-3 log-in-btn"
                        onClick={() => alert("Pressed!")}
                    >
                        log in
                    </CButton>

                    <CRow className="d-flex justify-content-center mb-3">
                        <CCol xs="auto">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/facebook.png"
                                    className="w-100 icon-password"

                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/whatsapp.png"
                                    className="w-100 icon-password"

                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/youtube.png"
                                    className="w-100 icon-password"

                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/linkedin.png"
                                    className="w-100 icon-password"

                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/images/streamline.png"
                                    className="w-100  icon-password"

                                />
                            </a>
                        </CCol>
                    </CRow>

                    <span className="text-dark" style={{ fontSize: "12px" }}>
                        {"All Rights Reserved for BITS™, Copyright© 2025"}
                    </span>
                </div>
            </CContainer>
            <Footer />
        </div>
    );
}
