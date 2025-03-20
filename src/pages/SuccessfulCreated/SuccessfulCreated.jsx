import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CImage } from "@coreui/react";
import "./index.css"

const SuccessfulCreated = () => {
    return (
        <CContainer className=" d-flex align-items-center justify-content-center">
            <CRow className="justify-content-center w-100">
                <CCol xs={12} sm={10} md={8} lg={6} xl={6} className='mb-0'>
                    <CCard className=" text-center shadow-lg main-card">
                        <CCardBody className='px-2 '>
                            <CImage src="/images/protect.png" alt="Protect Icon" width={180} className='protect-img' />
                            <h2 className="mt-1 fs-3 fw-500">Subscription Successfully Created! 🎉</h2>
                            <p className="text-muted  m-1">
                                Thank you! Your subscription has been successfully activated.
                                Enjoy all the cool features and services that come with it.
                            </p>
                            <p className="text-muted">
                                If you have any questions, feel free to reach out to our support team. We're here to help!
                            </p>

                            <CImage src="/images/bits.png" alt="BITS Logo" width={100} />
                            <p className="text-muted intro-p">BITS™ is an integrated technology solutions provider.</p>

                            <CButton color="primary" className="lets-go-btn" style={{ width: "90%" }}>
                                Let's Get Started
                            </CButton>

                            <div className="d-flex justify-content-center gap-3 icon-container ">
                                <a href="#"><img src="/images/facebook.png" alt="Facebook" className='icon-img' /></a>
                                <a href="#"><img src="/images/whatsapp.png" alt="WhatsApp" className='icon-img' /></a>
                                <a href="#"><img src="/images/youtube.png" alt="YouTube" className='icon-img' /></a>
                                <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" className='icon-img' /></a>
                                <a href="#"><img src="/images/streamline.png" alt="Streamline" className='icon-img' /></a>
                            </div>

                            <p className="text-muted mb-0 rights">All Rights Reserved for BITS™. Copyright © 2025</p>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default SuccessfulCreated;
