import { CContainer, CRow, CCol, CButton, CCard, CCardBody, CForm, CFormInput } from "@coreui/react";
import "./index.css"
export default function SubSubscribeToApp() {
    return (
        <CContainer className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <CCard className="w-100" style={{ maxWidth: "900px", borderRadius: "20px" }}>
                <CCardBody className="bg-white p-3">
                    <CRow className="d-flex align-items-center">
                        <CCol xs={12} md={6} className="d-flex justify-content-center d-none d-md-block">
                            <img
                                src="/images/signIn.png"
                                alt="Subscribe Image"
                                style={{ maxWidth: "100%", borderRadius: "10px" }}
                            />
                        </CCol>

                        <CCol xs={12} md={6}>
                            <div className="">
                                <h2 className="text-dark font-weight-bold subscribe-txt" style={{ fontSize: "30px" }}>
                                    {"Subscribe to applications"}
                                </h2>
                                <p className="text-muted account" style={{ fontSize: "16px" }}>
                                    {"You can subscribe now and fill in your data to register and create an account with us."}
                                </p>
                            </div>

                            <CForm>
                                {/* First Name */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* Mobile Number */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        placeholder="Enter Mobile Number"
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        required
                                    />
                                </div>

                                {/* Company Name */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="companyName"
                                        name="companyName"
                                        placeholder="Enter Company Name"
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* Company Sector */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="companySector"
                                        name="companySector"
                                        placeholder="Enter Company Sector"
                                        type="text"
                                        required
                                    />
                                </div>

                                {/* Company Size */}
                                <div className="mb-1">
                                    <CFormInput
                                        id="companySize"
                                        name="companySize"
                                        placeholder="Enter Company Size"
                                        type="text"
                                        required
                                    />
                                </div>

                                <CRow>
                                    <CCol xs={12} className="d-flex justify-content-center mb-3">
                                        <CButton color="primary" className="w-100 py-2 rounded" onClick={() => alert("Pressed!")}>
                                            <span className="text-white font-weight-bold" style={{ fontSize: "18px" }}>
                                                {"Subscribe"}
                                            </span>
                                        </CButton>
                                    </CCol>
                                    <CCol xs={12} className="text-center">
                                        <span className="text-dark" style={{ fontSize: "18px" }}>
                                            {"Already have an account? Log in"}
                                        </span>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
        </CContainer>
    );
}
