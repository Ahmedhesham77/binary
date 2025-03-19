import { CButton, CCard } from "@coreui/react";  // تأكد من استيراد CButton و CCard بشكل صحيح

const UserDetails = () => {
    const handleButtonClick = (message) => {
        alert(message);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    {/* Card Section */}
                    <CCard className="shadow-sm" style={{ maxWidth: "400px", margin: "auto" }}>
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <img
                                    src="/images/company.png"
                                    className="img-fluid mb-3"
                                    style={{ maxWidth: "250px", height: "80px" }}  // تقليل حجم الصورة
                                    alt="Company Logo"
                                />
                                <div className="mb-3">
                                    <span className="text-muted d-block mb-2">Company Name Company Name</span>
                                    <span className="h5">100205</span>  {/* تقليل حجم الرقم */}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <CButton
                                        color="success"
                                        className="btn-sm"  // تقليل حجم الزر
                                        onClick={() => handleButtonClick("License status: Active")}
                                    >
                                        <span className="text-dark">License status: Active</span>
                                    </CButton>
                                    <CButton
                                        color="light"
                                        className="btn-sm"  // تقليل حجم الزر
                                        onClick={() => handleButtonClick("Test Test")}
                                    >
                                        <span className="text-muted">Test Test</span>
                                    </CButton>
                                </div>
                            </div>
                        </div>

                        <CButton

                            className="btn-sm btn-block mt-4"  // تقليل حجم الزر
                            onClick={() => handleButtonClick("Subscription is about to expire")}
                            style={{
                                border: "2px dashed yellow",  // إضافة border dashed بلون أصفر
                            }}
                        >
                            <img
                                src="/images/lamp.png"
                                className="mr-3"
                                style={{ width: "20px", height: "20px" }}  // تقليل حجم الصورة
                                alt="Warning Icon"
                            />
                            <span className="text-dark">Subscription is about to expire</span>
                            <span className="text-warning font-weight-bold ml-2">3 Days</span>
                        </CButton>
                    </CCard>

                    {/* Alert Section */}


                    {/* User Details Section */}
                    <CCard className="mt-4 shadow-sm" style={{ maxWidth: "400px", margin: "auto" }}>
                        <div className="card-body">
                            <h5 className="card-title">User Login Details</h5>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src="/images/profile.png"
                                        className="mr-2"
                                        style={{ width: "14px", height: "14px" }}  // تقليل حجم الأيقونة
                                        alt="Admin Icon"
                                    />
                                    <span className="text-muted">Admin</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src="/images/user.png"
                                        className="mr-2"
                                        style={{ width: "14px", height: "14px" }}  // تقليل حجم الأيقونة
                                        alt="User Icon"
                                    />
                                    <span className="text-muted">Noor Alfaleet</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src="/images/message.ong"
                                        className="mr-2"
                                        style={{ width: "14px", height: "14px" }}  // تقليل حجم الأيقونة
                                        alt="Email Icon"
                                    />
                                    <span className="text-muted">noor****@gmail.com</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/images/calendar-2.png"
                                        className="mr-2"
                                        style={{ width: "14px", height: "14px" }}  // تقليل حجم الأيقونة
                                        alt="Date Icon"
                                    />
                                    <span className="text-muted">Sat, 12.07.2024 10:05 am</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <CButton
                                    color="outline-success"
                                    className="btn-sm"  // تقليل حجم الزر
                                    onClick={() => handleButtonClick("Active Devices")}
                                >
                                    <span className="font-weight-bold">Active Devices</span>
                                    <span className="h5">3</span>  {/* تقليل حجم الرقم */}
                                </CButton>
                                <CButton
                                    color="outline-danger"
                                    className="btn-sm"  // تقليل حجم الزر
                                    onClick={() => handleButtonClick("Failed Attempts")}
                                >
                                    <span className="font-weight-bold">Failed Attempts</span>
                                    <span className="text-muted">2 Last Day</span>
                                </CButton>
                            </div>
                        </div>
                    </CCard>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
