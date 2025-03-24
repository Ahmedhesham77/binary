import React, { useState } from 'react'
import { CContainer, CCard, CButton, CFormInput, CInputGroup, CInputGroupText, CBadge, CForm } from '@coreui/react';
import EditUserInfo from './EditUserInfo'; // استيراد مكون التحرير
import "./style.css"
import 'devextreme/dist/css/dx.light.css';
import EnableOTP from "./EnableOTP";
import SuspendUserModal from './SuspendUserModal';
import {
    DataGrid,
    Column
} from 'devextreme-react/data-grid';

import { data } from "./data"
import Header from '../../components/Header';


const MyProfile = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            <Header />

            <CContainer className='d-flex  my-4 main-container' >

                <CCard className=' px-2  align-items-center aside ' >
                    <img src="/images/Avatar1.png" alt="avatar" style={{ maxWidth: "120px", maxHeight: "120px", alignSelf: "center", marginTop: "20px" }} />
                    <h4  >Mo Salah</h4>
                    <CBadge className=' role'> Subsucriber</CBadge>
                    <div className="d-flex w-100 ">
                        <div className='task-done  w-100' >
                            <div style={{
                                backgroundColor: "#D4F4FE",
                                borderRadius: "15px",
                                width: "40px",
                                height: "40px",
                                marginRight: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                            }}>
                                <img src="/images/tick-square.png" alt="" style={{ width: "20px", height: "20px" }} />
                            </div>

                            <div className='d-flex flex-column'>
                                <h5 className='mb-0'>1.23K</h5>
                                <p className='text-muted mb-0'>Task Done</p>
                            </div>

                        </div>
                        <div className='project-done w-100' >
                            <div style={{
                                backgroundColor: "#D4F4FE",
                                borderRadius: "15px",
                                width: "40px",
                                height: "40px",
                                marginRight: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative"
                            }}>
                                <img src="/images/briefcase.png" alt="" style={{ width: "20px", height: "20px" }} />
                            </div>

                            <div className='d-flex flex-column'>
                                <h5 className='mb-0'>586</h5>
                                <p className='text-muted mb-0'>Project Done</p>
                            </div>

                        </div>

                    </div>

                    <p className='text-muted w-100 text-left  mt-2 mb-0 pb-0'> Details</p>
                    <hr className=' className="border border-dark w-100 mb-0' />
                    <div className='d-flex flex-column mt-3 justify-content-start w-100'>
                        <div className='d-flex' >
                            <img src="/images/profilee.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>User name :</p>
                            <p className='ps-2'> Mo Salah</p>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/sms1.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>Email :</p>
                            <p className='ps-2'> John.doe@example.com</p>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/status.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>Status: :</p>
                            <span style={{ backgroundColor: "#E3F9D4", color: "#72E128", width: "75px", height: "25px", fontSize: "1rem", textAlign: "center", borderRadius: "25px" }}>Active</span>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/star.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>Role :</p>
                            <p className='ps-2'> Author</p>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/check.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>Taxi id:</p>
                            <p className='ps-2'> Tax-8965</p>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/call.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p> Contact</p>
                            <p className='ps-2'> (123) 456-7890</p>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/language-square.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>Language: </p>
                            <p className='ps-2'>English</p>
                        </div>
                        <div className='d-flex' >
                            <img src="/images/flag.png" alt="profile" style={{ width: "20px", height: "20px", marginRight: "0.4rem" }} />
                            <p>Country :</p>
                            <p className='ps-2'> USA</p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-evenly btn-box'>
                            <CButton className='edit-btn' color='primary' onClick={() => setShowEdit(true)}>Edit</CButton>
                            <CButton className='susbend-btn' style={{ color: "#E33530", border: "1px solid #E33530", }} onClick={() => setModalVisible(true)}>Suspend</CButton>
                        </div>
                    </div>
                </CCard>
                <div className='main' >
                    <CCard >
                        <div className='d-flex flex-column  '>
                            <div className='d-flex mt-3 ms-1  '>
                                <img src="/images/profilee.png" alt="profile" style={{ width: "24px", height: "24px", marginRight: "0.4rem" }} />
                                <p className='mb-0 '>My Profile</p>
                            </div>

                            <div className='d-flex flex-column mt-3'>
                                <h5 className='ms-3'>Change Password</h5>
                                <div className='d-flex yellow-box ' >
                                    <div className='d-flex flex-column ps-3'  >
                                        <h5 style={{ color: "#FDB528", marginTop: "14px" }} >Ensure that these requirements are met</h5>
                                        <p style={{ color: "#FDB528" }}>Minimum 8 characters long, uppercase & symbol</p>

                                    </div>
                                    <img className='cross-btn' src="/images/close-circle.png" alt="" />
                                </div>

                                <CForm>
                                    <div className='d-flex mx-3 password-inputs mt-2'>
                                        <CInputGroup className='me-3'>
                                            <  CInputGroupText>
                                                <img src="/images/lock.png" alt="lock" />
                                            </CInputGroupText>
                                            <CFormInput
                                                placeholder='New Password'
                                                style={{ borderInline: 0 }}
                                            ></CFormInput>
                                            <CInputGroupText>
                                                <img style={{ cursor: "pointer" }} src="/images/Component_1.png" alt="eye" />
                                            </CInputGroupText>
                                        </CInputGroup>
                                        <CInputGroup>
                                            <  CInputGroupText>
                                                <img src="/images/lock.png" alt="lock" />
                                            </CInputGroupText>
                                            <CFormInput
                                                placeholder='Confirm Password'
                                                style={{ borderInline: 0 }}
                                            ></CFormInput>
                                            <CInputGroupText>
                                                <img src="/images/hidden.png" alt="eye" style={{ cursor: "pointer" }} />
                                            </CInputGroupText>
                                        </CInputGroup>
                                    </div>
                                    <CButton color="primary" className='change-password-btn' onClick={() => setShowOTP(true)}>
                                        Change Password
                                    </CButton>
                                </CForm>
                                <div className='d-flex mt-3 mx-3'>
                                    <div className='d-flex flex-column mt-2 tow-steps-sec'>
                                        <h5>Two- Steps verifiction</h5>
                                        <p className='mb-0' style={{ color: "#A7A7A7" }}>Minimum 8 characters long, uppercase & symbol</p>
                                        <h5 className='mt-1'>SMS</h5>
                                        <div className='d-flex mb-3'>
                                            <CFormInput placeholder='+1(968)819-2547'
                                                style={{ color: "#A7A7A7", marginRight: "0.8rem" }}
                                            ></CFormInput>
                                            <button > <img src="/images/edit-2.png" alt="edit" /></button>
                                            <button > <img src="/images/profile-add.png" alt="add" /></button>
                                        </div>
                                        <p style={{ color: "#A7A7A7" }}> Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in     <a href="#" style={{ textDecoration: "none" }}> Learn more.</a></p>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </CCard>
                    <CCard className='table-data'>
                        <h5>Recent Devices</h5>
                        <div className="table-responsive">
                            <DataGrid
                                dataSource={data}
                                keyExpr="ID"
                            >
                                <Column
                                    dataField="image"
                                    caption="Logo"
                                    width={100}
                                    cellRender={(data) => (
                                        <img
                                            src={data.value}
                                            alt="logo"
                                            style={{ width: "29px", height: "29px", borderRadius: "8px" }}
                                        />
                                    )}
                                />
                                <Column dataField="Browser" caption="Browser" />
                                <Column dataField="Device" caption="Device" />
                                <Column dataField="Location" caption="Location" />
                                <Column dataField="Recent Activities" caption="Recent Activities" />
                            </DataGrid>
                        </div>
                    </CCard>
                </div>
                {showEdit && (
                    <div className="modal-overlay">
                        <EditUserInfo />
                        <button className="close-btn" onClick={() => setShowEdit(false)}>X</button>
                    </div>
                )}
                {showOTP && (
                    <div className='modal-overlay'>
                        <EnableOTP />
                    </div>

                )}
                <SuspendUserModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onConfirm={() => {
                        alert("User Suspended!");
                        setModalVisible(false);
                    }}
                />
            </CContainer >
        </div>

    )
}

export default MyProfile
