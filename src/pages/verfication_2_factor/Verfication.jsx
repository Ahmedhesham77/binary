import { useState, useRef } from "react";
import { CContainer, CRow, CCol, CCard, CCardBody, CButton, CBadge } from "@coreui/react";
import "./index.css";
import Footer from "../../components/Footer";

export const Verfication = () => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [maskedCode, setMaskedCode] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    const handleInput = (index, value) => {
        if (!/^\d?$/.test(value)) return; // السماح فقط بالأرقام

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // عرض الرقم لفترة قصيرة ثم إخفاؤه بـ "*"
        if (value) {
            const newMaskedCode = [...maskedCode];
            newMaskedCode[index] = value;
            setMaskedCode(newMaskedCode);

            setTimeout(() => {
                newMaskedCode[index] = "*";
                setMaskedCode([...newMaskedCode]);
            }, 500);
        }

        // الانتقال تلقائيًا إلى الحقل التالي
        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !code[index]) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-between min-vh-100 verfication-container">
            <CContainer
                className="d-flex flex-column gap-4 align-items-center justify-content-center bg-white rounded-3 shadow-sm min-vh-90"
                style={{
                    maxWidth: "460px",
                    padding: "10px",
                    marginBlock: "auto"

                }}
            >
                <CRow className="w-100 justify-content-center">
                    <CCol xs={12} className="text-center">
                        <CCard className="p-1 border-0 bg-light">
                            <CCardBody className="p-2 d-flex flex-column gap-1">
                                <div className="image-container">
                                    <img src={"/images/protect.png"} alt="Protect" className="img-fluid w-50 mb-1" />
                                </div>
                                <h6 className="text-dark m-0">Two-Factor Verification</h6>
                                <p className="text-muted small mb-1">
                                    Enter the verification code we sent to <span className="text-primary">********93</span>
                                </p>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>

                <CRow className="w-100 mt-1 text-center">
                    <CCol xs={12} className="d-flex justify-content-between align-items-center">
                        <p className="text-secondary small mb-1">Type your 6-digit security code</p>
                        <CBadge color="danger" className="px-2 py-1 fs-7">00:10</CBadge>
                    </CCol>
                </CRow>

                <CRow className="w-100 mt-1 justify-content-center">
                    <CCol xs={10} className="d-flex justify-content-between">
                        {code.map((digit, i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength="1"
                                ref={(el) => (inputsRef.current[i] = el)}
                                value={maskedCode[i]} // عرض الرقم أو "*"
                                onInput={(e) => handleInput(i, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                className="border border-secondary rounded text-center"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    fontSize: "16px",
                                    textAlign: "center",
                                }}
                            />
                        ))}
                    </CCol>
                </CRow>

                <CRow className="w-100 mt-2 text-center">
                    <CCol>
                        <CButton color="primary" className="w-75 py-1">Submit</CButton>
                        <p className="mt-1 text-muted small">
                            Didn’t receive code? <a className="text-danger" href="">Resend</a>
                        </p>
                    </CCol>
                </CRow>
            </CContainer>
            <Footer />
        </div>
    );
};

export default Verfication;
