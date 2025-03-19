import { CContainer, CImage, CButton, CFormInput, CFormCheck, CInputGroup, CInputGroupText } from "@coreui/react";

export default function NewPassword() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 mt-4">
            <CContainer
                className="d-flex flex-column justify-content-center align-items-center bg-white rounded-4"
                style={{ maxWidth: "400px", padding: "30px" }}
            >
                {/* Header Section */}
                <div className="d-flex flex-column align-items-center w-100 mb-3">
                    <CImage
                        src="/images/password.png"
                        className="img-fluid mb-3 rounded-3"

                    />
                    <div className="d-flex flex-column align-items-start w-100">
                        <h4 className="text-dark mb-2">Setup New Password</h4>
                        <p className="text-muted mb-0">Create a memorable yet strong password to protect.</p>
                    </div>
                </div>

                {/* Password Fields Section */}
                <div className="w-100 mb-3">
                    {/* Password Field */}
                    <CInputGroup>
                        <div className="d-flex flex-row align-items-start w-100 mb-2">
                            <CInputGroupText className="bg-white border-0">
                                <img src="/images/lock.png" alt="" />
                            </CInputGroupText>
                            <CFormInput
                                type="password"
                                placeholder="Enter Password"
                                className="mb-2 form-control"
                                aria-label="Password"
                            />

                        </div>
                    </CInputGroup>


                    <span className="text-danger fs-6">Use 8 or more characters with a mix of letters, numbers & symbols.</span>
                    <CInputGroup>
                        <CInputGroupText className="bg-white border-0">
                            <img src="/images/lock.png" alt="" />
                        </CInputGroupText>
                        <CFormInput
                            type="password"
                            placeholder="Repeat Password"
                            className="mb-2"
                            aria-label="Repeat Password"
                        />
                    </CInputGroup>

                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="d-flex  justify mb-3 text-start">
                    <CFormCheck
                        type="checkbox"
                        id="agreeCheck"
                        label="I Agree & Terms and conditions."
                        className="text-muted fs-6"
                    />
                </div>

                {/* Submit Button */}
                <CButton color="primary" className="w-100 py-2 mt-2 mb-3 rounded-3" onClick={() => alert("Pressed!")}>
                    Submit
                </CButton>
            </CContainer>
        </div>
    );
}
