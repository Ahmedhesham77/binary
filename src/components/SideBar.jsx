import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); // الحالة لتبديل ظهور الشريط الجانبي

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible); // التبديل بين إظهار وإخفاء الشريط الجانبي
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* زر لإخفاء الشريط الجانبي */}
            <Button
                variant="primary"
                onClick={toggleSidebar}
                style={{ position: 'absolute', top: '20px', left: isSidebarVisible ? '160px' : '20px', transition: 'left 0.3s ease' }}
            >
                {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
            </Button>

            {/* عرض الشريط الجانبي بناءً على الحالة */}
            {isSidebarVisible && (
                <div style={{ width: '150px', height: '100vh', backgroundColor: '#343a40', padding: '20px', position: 'fixed' }}>
                    <h2 className="text-white">Sidebar</h2>
                    <Nav className="flex-column">
                        <Nav.Link href="/sign-in" className="text-white">Sign In</Nav.Link>
                        <Nav.Link href="/choose-send" className="text-white">Choose Send</Nav.Link>
                        <Nav.Link href="/verification" className="text-white">Verification</Nav.Link>
                        <Nav.Link href="/forgot-password" className="text-white">Forgot Password</Nav.Link>
                        <Nav.Link href="/new-password" className="text-white">New Password</Nav.Link>
                        <Nav.Link href="/password-changed" className="text-white">Password Changed</Nav.Link>
                        <Nav.Link href="/subscribe" className="text-white">Subscribe</Nav.Link>
                        <Nav.Link href="/dashboard" className="text-white">Dashboard</Nav.Link>
                    </Nav>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
