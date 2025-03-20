import { CCard, CCardBody, CCardHeader, CRow, CCol, CBadge } from "@coreui/react";
const UserDetails = () => {


    return (
        <CCard className="shadow-sm p-3 ms-2 mt-4" style={{ maxWidth: "525px" }}>
            {/* Header - Logo */}
            <CCardHeader className="text-center border-0" style={{ backgroundColor: "#F5F5F5" }}>
                <img src="/images/company.png" alt="Company Logo" height="120" />
            </CCardHeader>

            <CCardBody>
                {/* Company Info */}
                <p className="text-muted">Company Name <span className="text-muted">Company Name</span></p>
                <h5 className="fw-bold">100205</h5>

                {/* License Status */}
                <div className="d-flex align-items-center justify-content-between my-3">
                    <CBadge style={{ backgroundColor: "#E0FFE3", color: "#29292A", fontWeight: "light" }} className="p-3 w-75 fs-6  ">License status:<span style={{ color: "#59C762" }} >Active</span> </CBadge>
                    <CBadge style={{ backgroundColor: "#F5F5F5", color: "#696A6C" }} className="p-3 ">Test Test</CBadge>
                </div>

                {/* Subscription Warning */}
                <div
                    className="d-flex align-items-center justify-content-between p-3 rounded"
                    style={{
                        backgroundColor: "#FFF9EC",
                        border: "2px dashed #FDB528",  // Border dashed بلون FDB528
                    }}
                >
                    <span> <img src="/images/lamp.png" alt="" /> Subscription is about to expire</span>
                    <strong className="text-dark fs-5"><span style={{ color: " #FDB528" }} > 3</span> Days</strong>
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
                    <CCol className="border-end">
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
