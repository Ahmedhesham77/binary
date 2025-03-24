import { CCard, CCardBody, CCardHeader, CRow, CCol, CBadge } from "@coreui/react";
import "./style.css"
const UserDetails = () => {


    return (
        <CCard className="side-bar-main" >
            {/* Header - Logo */}
            <CCardHeader >
                <img src="/images/company.png" alt="Company Logo" height="120" />
            </CCardHeader>

            <CCardBody className="side-bar-data-container">
                {/* Company Info */}
                <p >Company Name <span >Company Name</span></p>
                <h6 >100205</h6>

                {/* License Status */}
                <div className="License-status">
                    <CBadge >License status:<span  >Active</span> </CBadge>
                    <CBadge className="second-badge ">Test Test</CBadge>
                </div>

                {/* Subscription Warning */}
                <div
                    className="subscription-warning"

                >
                    <span> <img src="/images/lamp.png" alt="" /> Subscription is about to expire</span>
                    <strong ><span  > 3</span> Days</strong>
                </div>

                <CRow className="mt-5">
                    <CCol>
                        <h6 className="fw-bold mb-2">User Login Details</h6>
                        <ul className="list-unstyled">
                            <li>    <img src="/images/user.png" alt="" /> <strong>Admin</strong></li>
                            <li>    <img src="/images/profile.png" alt="" /> Noor Alfaleet</li>
                            <li>    <img src="/images/message.png" alt="" /> noor****@gmail.com</li>
                            <li>    <img src="/images/calendar-2.png" alt="" /> Sat, 12.07.2024 10:05 am</li>
                        </ul>

                    </CCol>
                </CRow>


                {/* Devices & Attempts */}
                <CRow className="text-center mt-3">
                    <CCol >
                        <div className=" bg-light rounded " style={{ border: "2px dashed #3FBC48" }}>
                            <p className="mb-0 text-success">Active Devices</p>
                            <h5 className="fw-bold ">3</h5>
                        </div>
                    </CCol>
                    <CCol>
                        <div className="bg-light rounded" style={{ border: "2px dashed #CC302B" }}>
                            <p className="mb-0 text-danger">Failed Attempts</p>
                            <h5 className="fw-bold">2 <span className="text-muted " style={{ fontWeight: "normal" }}>Last days</span></h5>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    );
};

export default UserDetails;
