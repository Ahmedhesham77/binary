import { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { TbSettings2 } from "react-icons/tb";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

import "./style.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isModeMenuOpen, setIsModeMenuOpen] = useState(false);


    const notifications = [
        { id: 1, text: "Congratulations Flora! 🎉", subtext: "Won the monthly best seller gold badge", time: "Today" },
        { id: 2, text: "New user registered.", subtext: "Accepted your connection", time: "Yesterday" },
        { id: 3, text: "New user registered.", subtext: "Accepted your connection", time: "Yesterday" }
    ];
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img src="/images/logo.png" alt="Logo" height="40" />
                </a>

                {/* Toggle Button (Mobile) */}
                <button
                    className="navbar-toggler d-md-none"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content (Desktop) */}
                <div className="d-none d-md-flex align-items-center gap-3">
                    {/* Search Box */}
                    <div className="d-flex align-items-center search-box">
                        <button className="border-0 bg-transparent me-2">
                            <img src="/images/search.png" alt="Search" height="20" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="border-0 fs-6 form-control"
                            style={{ maxWidth: "200px" }}
                        />
                    </div>

                    {/* Icons */}
                    <div className="d-flex align-items-center gap-2">
                        {/* Language Dropdown */}
                        <div className="position-relative">
                            <img
                                src="/images/lang.png"
                                className="rounded-circle"
                                alt="Language Icon"
                                height="30"
                                style={{ cursor: "pointer" }}
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            />
                            <div
                                className={`dropdown-menu p-2 shadow ${isLangMenuOpen ? "show" : ""}`}
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: "40px",
                                    minWidth: "200px",
                                    borderRadius: "10px",
                                }}
                            >
                                <button className="dropdown-item d-flex align-items-center p-2">
                                    <img src="/images/usa.png" alt="English" height="20" className="me-2" />
                                    English
                                </button>
                                <button className="dropdown-item d-flex align-items-center p-2">
                                    <img src="/images/saudi.png" alt="Arabic" height="20" className="me-2" />
                                    Arabic
                                </button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <div className="position-relative">
                                <img src="/images/notfication.png" className="rounded-circle" alt="Notifications" height="30" style={{ cursor: "pointer" }} onClick={() => setIsNotificationOpen(!isNotificationOpen)} />
                                <div className={`dropdown-menu p-3 shadow ${isNotificationOpen ? "show" : ""}`} style={{ position: "absolute", right: 0, top: "40px", minWidth: "300px", borderRadius: "10px" }}>
                                    <h6 className="mb-2">Notifications</h6>
                                    {notifications.map((notification) => (
                                        <div key={notification.id} className="d-flex align-items-start p-2 border-bottom">
                                            <div>
                                                <strong>{notification.text}</strong>
                                                <p className="text-muted small m-0">{notification.subtext}</p>
                                                <small className="text-muted">{notification.time}</small>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="btn btn-primary w-100 mt-2">View All Notifications</button>
                                </div>
                            </div>
                        </div>


                        <div className="position-relative">
                            <img className="btn btn-light" onClick={() => setIsModeMenuOpen(!isModeMenuOpen)} src="/images/mode.png" />
                            <div className={`dropdown-menu p-3 shadow ${isModeMenuOpen ? "show" : ""}`} style={{ position: "absolute", right: 0, top: "40px", minWidth: "200px", borderRadius: "10px" }}>
                                <h6 className="mb-2">Theme Mode</h6>
                                <button className="dropdown-item d-flex align-items-center">
                                    <CiLight size={30} className="pe-2 " /> Light
                                </button>
                                <button className="dropdown-item d-flex align-items-center">
                                    <CiDark size={30} className="pe-2 text-dark" /> Dark
                                </button>
                                <button className="dropdown-item d-flex align-items-center">
                                    <HiOutlineComputerDesktop size={30} className="pe-2 " /> System
                                </button>
                            </div>
                        </div>
                        {/* Other Icons */}
                        {["star"].map((icon) => (
                            <a key={icon} href="#" className="nav-link">
                                <img
                                    src={`/images/${icon}.png`}
                                    className="rounded-circle"
                                    alt={icon}
                                    height="30"
                                />
                            </a>
                        ))}
                    </div>

                    {/* User Avatar with Dropdown */}
                    <div className="position-relative">
                        <img
                            src="/images/avatar.png"
                            className="rounded-circle"
                            alt="User Avatar"
                            height="40"
                            style={{ cursor: "pointer" }}
                            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        />

                        {/* Profile Menu */}
                        <div
                            className={`dropdown-menu p-3 shadow ${isProfileMenuOpen ? "show" : ""}`}
                            style={{
                                position: "absolute",
                                right: 0,
                                top: "50px",
                                minWidth: "200px",
                                borderRadius: "10px",
                            }}
                        >
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <img
                                    src="/images/avatar.png"
                                    className="rounded-circle"
                                    alt="User Avatar"
                                    height="40"
                                />
                                <div>
                                    <strong>Noor Alfalet</strong>
                                    <p className="text-muted small m-0">Admin</p>
                                </div>
                            </div>
                            <hr className="m-1" />
                            <a href="#" className="dropdown-item d-flex align-items-center">
                                <HiOutlineUser size={20} className="pe-1" /> My Profile
                            </a>
                            <a href="#" className="dropdown-item d-flex align-items-center">
                                <TbSettings2 size={20} className="pe-1" /> Settings
                            </a>
                            <hr className="m-1" />
                            <button className="btn btn-danger w-100">
                                <i className="bi bi-box-arrow-right me-2"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Menu (Mobile) */}
            <div className={`menu-container d-md-none ${isMenuOpen ? "menu-open" : ""}`}>
                <ul className="navbar-nav d-flex flex-column align-items-center gap-3">
                    {/* Search Box */}
                    <li className="nav-item d-flex align-items-center">
                        <button className="border-0 bg-transparent me-2">
                            <img src="/images/search.png" alt="Search" height="20" />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            className="border-0 fs-6 form-control"
                            style={{ maxWidth: "200px" }}
                        />
                    </li>

                    {/* Icons */}
                    <li className="nav-item d-flex align-items-center gap-4">
                        {["lang", "mode", "star", "notfication", "avatar"].map((icon) => (
                            <a key={icon} href="#" className="nav-link">
                                <img
                                    src={`/images/${icon}.png`}
                                    className="rounded-circle"
                                    alt={icon}
                                    height="40"
                                />
                            </a>
                        ))}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
