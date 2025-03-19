import { CContainer, CRow, CCol, CButton } from "@coreui/react";

export default function PasswordChanged() {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", backgroundColor: "#f4f4f4" }}
        >
            <CContainer
                className="d-flex flex-column justify-content-center align-items-center bg-white rounded-4 p-4"
                style={{ height: "450px", maxWidth: "350px" }}
            >
                <div
                    className="d-flex flex-column align-items-center justify-content-center w-100 py-3 rounded-3"
                    style={{
                        background: "linear-gradient(180deg, #E8F3FF, #B8D9FF)",
                    }}
                >
                    <img
                        src="/images/protect.png"
                        className="img-fluid mb-3"
                        style={{ width: "150px", height: "150px" }}
                    />
                    <div className="d-flex flex-column align-items-center w-100 px-3">
                        <span className="text-dark font-weight-bold mb-2" style={{ fontSize: "30px" }}>
                            {"Password is Changed"}
                        </span>
                        <span className="text-muted" style={{ fontSize: "14px" }}>
                            {"You can now log in again."}
                        </span>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center w-100 px-3 mt-3">
                    <CButton
                        color="primary"
                        className="w-100 py-2 mb-2 rounded-3"
                        onClick={() => alert("Pressed!")}
                    >
                        <span className="text-white font-weight-bold" style={{ fontSize: "16px" }}>
                            {"Log in"}
                        </span>
                    </CButton>

                    <CRow className="d-flex justify-content-center mb-3">
                        <CCol xs="auto">
                            <a href="https://example.com/link1" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/78dto20x.png"
                                    className="w-100"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="https://example.com/link2" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/a9qpciet.png"
                                    className="w-100"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="https://example.com/link3" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/xg4ov95j.png"
                                    className="w-100"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="https://example.com/link4" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/er9pqsi7.png"
                                    className="w-100"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </a>
                        </CCol>
                        <CCol xs="auto">
                            <a href="https://example.com/link5" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/kLk7fW8S6M/vmohpz32.png"
                                    className="w-100 rounded-circle"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </a>
                        </CCol>
                    </CRow>

                    <span className="text-dark" style={{ fontSize: "12px" }}>
                        {"All Rights Reserved for BITS™, Copyright© 2025"}
                    </span>
                </div>
            </CContainer>
        </div>
    );
}
