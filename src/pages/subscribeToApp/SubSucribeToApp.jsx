import { CContainer, CRow, CCol, CButton, CCard, CCardBody, CForm, CFormInput, CInputGroup, CInputGroupText } from "@coreui/react";
import "./index.css"
import Footer from "../../components/Footer";
export default function SubSubscribeToApp() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 subsucribe-container">

            <CContainer className="d-flex justify-content-center align-items-center rounded-4 shadow-lg p-2 " style={{ marginBlock: "1.5rem" }}>
                <CCard className="w-100" style={{ border: "0" }}>
                    <CCardBody className="bg-white p-3 border-0">
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
                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/profilee.svg" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="First Name"
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>

                                    </div>

                                    {/* Last Name */}
                                    <div className="mb-1">
                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/profilee.svg" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Last Name "
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="mb-1">
                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/call.svg" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Mobile Number"
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>
                                    </div>

                                    {/* Email */}
                                    <div className="mb-1">
                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/sms.png" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Email"
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>
                                    </div>

                                    {/* Company Name */}
                                    <div className="mb-1">
                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/company-name.svg" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="CompanyName"
                                                name="Company Name"
                                                placeholder="Company Name"
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>
                                    </div>

                                    {/* Company Sector */}
                                    <div className="mb-1">

                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/company-sector.svg" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="companySector"
                                                name="companySector"
                                                placeholder="Company Sector"
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>

                                    </div>

                                    {/* Company Size */}
                                    <div className="mb-1">
                                        <CInputGroup className="border rounded p-1">
                                            <CInputGroupText className="bg-white border-0 pe-2 p-0">
                                                <img src="/images/company-size.svg" alt="" />
                                            </CInputGroupText>
                                            <CFormInput
                                                className="border-0 px-0"
                                                id="companySize"
                                                name="companySize"
                                                placeholder="Company Size"
                                                type="text"
                                                required
                                            />
                                        </CInputGroup>

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
                                                {"Already have an account? "}
                                                <a href="#">Log In</a>
                                            </span>
                                        </CCol>
                                    </CRow>
                                </CForm>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CContainer>

            <Footer />
        </div >

    );
}
