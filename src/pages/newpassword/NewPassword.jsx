import { CContainer, CImage, CButton, CFormInput, CFormCheck, CInputGroup, CInputGroupText } from "@coreui/react";
import "./style.css"
import Footer from "../../components/Footer"

export default function NewPassword() {
    return (
        <div className="d-flex flex-column justify-content-between align-items-center min-vh-100 new-password-container">
            <CContainer
                className="d-flex flex-column justify-content-center align-items-center bg-white rounded-4 p-4 shadow-lg m-2 "
                style={{ maxWidth: "464px" }}
            >
                {/* Header Section */}
                <div className="d-flex flex-column align-items-center w-100 mb-1 ">
                    <div className=" w-100 d-flex align-items-center justify-content-center new-password-img-container rounded-4 mb-3 ">
                        <CImage
                            src="/images/password.png"
                            className="img-fluid  rounded-3 w-75"

                        />
                    </div>

                    <div className="d-flex flex-column align-items-start w-100 text-container">
                        <h4 className="mb-1">Setup New Password</h4>
                        <p className="text-muted mb-0">Create a memorable yet strong password to protect.</p>
                    </div>
                </div>

                {/* Password Fields Section */}
                <div className="w-100 mb-1 password-fields">
                    {/* Password Field */}
                    <CInputGroup className="border rounded p-1 ">

                        <CInputGroupText className="bg-white border-0 pe-2 p-0 ">
                            <img src="/images/lock.png" alt="" />
                        </CInputGroupText>
                        <CFormInput
                            type="password"
                            placeholder="Enter Password"
                            className=" form-control border-0"
                            aria-label="Password"
                        />


                    </CInputGroup>


                    <span >Use 8 or more characters with a mix of letters, numbers & symbols.</span>
                    <CInputGroup className="border rounded p-1">
                        <CInputGroupText className="bg-white border-0 pe-2  p-0">
                            <img src="/images/lock.png" alt="" />
                        </CInputGroupText>
                        <CFormInput
                            type="password"
                            placeholder="Repeat Password"
                            className=" form-control border-0"
                            aria-label="Repeat Password"
                        />
                    </CInputGroup>

                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="d-flex  justify mb-1 text-start w-100 terms" >
                    <CFormCheck
                        type="checkbox"
                        id="agreeCheck"
                        label="I Agree & "
                        className="text-muted fs-6"
                    />
                    <a href="#"> Terms and conditions.</a>
                </div>

                {/* Submit Button */}
                <CButton color="primary" className="w-100 py-2 mt-2 mb-2 rounded-3" onClick={() => alert("Pressed!")}>
                    Submit
                </CButton>
            </CContainer>
            <Footer />
        </div>
    );
}
