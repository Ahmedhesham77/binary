import React from 'react'
import {
    CForm,
    CFormLabel,
    CFormInput,
    CFormSelect,
    CFormCheck,
    CButton,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CBadge,
    CCardHeader,
    CInputGroupText,
    CInputGroup,
    CFormSwitch
} from "@coreui/react";
import "./style.css"
const EditUserInfo = () => {
    return (
        <CCard className="p-2 pt-3 main-card" >
            <h3 className="text-center fw-bold fs-5 mb-2">
                Edit User Information
            </h3>
            <p className="text-center text-muted mb-1 fs-9">
                Updating user details will receive a privacy audit.
            </p>

            <CCardBody className='pt-0 custom-scroll'>
                <CForm>
                    <CRow className="mb-0">
                        <CCol md={6}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText className="border-0 bg-transparent p-1">
                                    <img className='icon' src="/images/profilee.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                First Name
                            </CFormLabel>
                            <CFormInput type="text" placeholder="First Name" size="sm" />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/profilee.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                Last Name
                            </CFormLabel>
                            <CFormInput type="text" placeholder="Last Name" size="sm" />
                        </CCol>
                    </CRow>

                    <CRow className="mb-0">
                        <CCol md={12}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/profilee.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                User Name
                            </CFormLabel>
                            <CFormInput type="text" placeholder="User Name" size="sm" />
                        </CCol>
                    </CRow>

                    <CRow className="mb-0">
                        <CCol md={6}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/sms.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                Email
                            </CFormLabel>
                            <CFormInput type="email" placeholder="John.doe@example.com" size="sm" />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/status.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                Email
                            </CFormLabel>
                            <CFormSelect>
                                <option>Active</option>
                                <option>Inactive</option>
                            </CFormSelect>
                        </CCol>
                    </CRow>

                    <CRow className="mb-0">
                        <CCol md={12}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/call.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                Mobile Numper
                            </CFormLabel>
                            <CFormInput type="text" placeholder="USA (+1) 6099334422" size="sm" />
                        </CCol>
                    </CRow>

                    <CRow className="mb-0">
                        <CCol md={12}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/password-check.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                Tax ID
                            </CFormLabel>
                            <CFormInput type="text" placeholder="Tax-8965" size="sm" />
                        </CCol>
                    </CRow>

                    <CRow className="mb-0">
                        <CCol md={6}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/language-square.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                languge
                            </CFormLabel>
                            <CInputGroup>
                                <CInputGroupText style={{ borderRight: "0" }} >
                                    <CBadge style={{ backgroundColor: "#EAEAEB", color: "#29292A" }}>English
                                        <img className='icon' src="/images/close-circle2.png" alt="" />
                                    </CBadge>
                                </CInputGroupText>
                                <CFormInput type="text" style={{ borderLeft: "0" }} />

                            </CInputGroup>
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel className="d-flex align-items-center fs-9">
                                <CInputGroupText style={{ border: 0, backgroundColor: "transparent" }}>
                                    <img className='icon' src="/images/flag.png" alt="" style={{ border: 0 }} />
                                </CInputGroupText>
                                Country
                            </CFormLabel>
                            <CFormSelect size="sm">
                                <option>USA</option>
                                <option>Canada</option>
                                <option>UK</option>
                            </CFormSelect>
                        </CCol>
                    </CRow>

                    <CRow className="mb-0">
                        <CCol md={12}>
                            <CFormSwitch label="Use as a billing address?" id="billingSwitch" className="fs-9" />
                        </CCol>
                    </CRow>

                    <CRow className="mt-2">
                        <CCol md={6}>
                            <CButton color="primary" className="w-100 py-2 first-btn">
                                Submit
                            </CButton>
                        </CCol>
                        <CCol md={6}>
                            <CButton className=" py-2 second-btn w-100" >
                                Cancel
                            </CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default EditUserInfo
