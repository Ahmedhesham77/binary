import React, { useState } from "react";
import { CForm, CFormInput, CButton, CInputGroup, CInputGroupText } from "@coreui/react";
import { BsEye } from "react-icons/bs";
import { VscAzureDevops } from "react-icons/vsc";

import "./index.css";


const FrameScreen = () => { // قمنا بإزالة JSX.Element من هنا
    const [formData, setFormData] = useState({
        clientId: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="container shadow p-4 bg-white rounded-4 h-100 mt-4">
            <div className="row align-items-center">
                <div className="col-md-6 d-none d-md-block text-center">
                    <img className="sign-in -img img-fluid " alt="Group" src="/images/signIn.png" />
                </div>

                <div className="col-sm-4 col-md-6 col-lg-5 p-3">
                    <div className="col d-flex flex-column text-start gap-2">
                        <h2 className="text-dark">Sign in</h2>
                        <p className="text-secondary">You can log in to your account.</p>
                    </div>

                    <CForm onSubmit={handleSubmit} className="d-flex flex-column gap-2">
                        <CInputGroup>
                            <CInputGroupText className="bg-white">
                                <img src="/images/password-check.png" alt="" />
                            </CInputGroupText>

                            <CFormInput
                                type="text"
                                name="clientId"
                                placeholder="Client ID"
                                value={formData.clientId}
                                onChange={handleChange}
                                className="form-control border-left-0"
                            />
                        </CInputGroup>

                        <CInputGroup>
                            <CInputGroupText className="bg-white">
                                <img src="/images/sms.png" alt="" />
                            </CInputGroupText>
                            <CFormInput
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </CInputGroup>

                        <CInputGroup>
                            <CInputGroupText className="bg-white">
                                <img src="/images/lock.png" alt="" />
                            </CInputGroupText>
                            <CFormInput
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control border-right-0"
                            />
                            <CInputGroupText >
                                <BsEye />
                            </CInputGroupText>

                        </CInputGroup>

                        <a href="#" className="text-danger text-sm text-end">Forget Password?</a>
                        <CButton type="submit" color="primary" className="w-100">Sign In</CButton>
                    </CForm>

                    <p className="text-center text-muted">
                        Don't have an account yet? <a href="#" className="text-primary">Create one</a>
                    </p>

                    <div className="d-flex align-items-center gap-3 w-100">
                        <hr className="flex-grow-1" />
                        <span className="text-muted">OR</span>
                        <hr className="flex-grow-1" />
                    </div>

                    {/* Azure Login */}
                    <CButton color="light" className="d-flex justify-content-center align-items-center gap-2 w-100 border">
                        <VscAzureDevops className="text-primary fs-4" />
                        <span className="text-dark fw-semibold">Login with Azure</span>
                    </CButton>
                </div>
            </div>
        </div>
    );
};

export default FrameScreen; // تأكد من استخدام export default هنا
