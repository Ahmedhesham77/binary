import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div style={{ display: 'flex' }}>
            <img src='/images/lamp.png'
                variant="primary"
                onClick={toggleSidebar}
                style={{ position: 'absolute', top: '20px', left: isSidebarVisible ? '160px' : '20px', transition: 'left 0.3s ease', zIndex: 5555555, width: "40px" }}
            />



            {isSidebarVisible && (
                <div style={{ width: '150px', height: '100vh', backgroundColor: '#343a40', padding: '20px', position: 'fixed', zIndex: 10000000 }}>
                    <h2 className="text-white">Sidebar</h2>
                    <Nav className="flex-column ">
                        <Nav.Item>
                            <Link to="/sign-in" className="text-white">Sign In</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/choose-send" className="text-white">Choose Send</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/verification" className="text-white">Verification</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/forgot-password" className="text-white">Forgot Password</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/new-password" className="text-white">New Password</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/password-changed" className="text-white">Password Changed</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/subscribe" className="text-white">Subscribe</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/dashboard" className="text-white">Dashboard</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/successfuly" className="text-white">Successfuly</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/myprofile" className="text-white">myprofile</Link>
                        </Nav.Item>
                    </Nav>
                </div>
            )}
        </div>
    );
};

export default Sidebar;