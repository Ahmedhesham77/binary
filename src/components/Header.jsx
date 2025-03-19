
const Header = () => {
    return (
        <div className="container d-flex justify-content-between align-items-center mb-4">
            <a
                href="#"


            >
                <img
                    src="/images/logo.png"

                    alt="Logo"
                />
            </a>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-4">
                    <a href="#" className="w-20 me-2">
                        <img
                            src="/images/search.png"
                            className="w-20"
                            alt="Search Icon"
                        />
                    </a>
                    <span className="text-muted fs-5">Search</span>
                </div>
                <div className="d-flex align-items-center">
                    <a href="#" className="w-15 rounded-circle me-2">
                        <img
                            src="/images/lang.png"
                            className="w-15 rounded-circle"
                            alt="Profile"
                        />
                    </a>
                    <a href="#" className="w-15 rounded-circle me-2">
                        <img
                            src="/images/mode.png"
                            className="w-15 rounded-circle"
                            alt="Profile"
                        />
                    </a>
                    <a href="#" className="w-15 rounded-circle me-2">
                        <img
                            src="/images/star.png"
                            className="w-15 rounded-circle"
                            alt="Profile"
                        />
                    </a>
                    <a href="#" className="w-15 rounded-circle">
                        <img
                            src="/images/notfication.png"
                            className="w-15 rounded-circle"
                            alt="Profile"
                        />
                    </a>
                </div>
                <a href="#" className="w-20 rounded-circle">
                    <img
                        src="/images/avatar.png"
                        className="w-20 rounded-circle"
                        alt="User Avatar"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;
