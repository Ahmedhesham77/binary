import Header from "../../components/Header";
import UserDetails from "../../components/UserDash";
import Home from "../../components/Home";
import Footer_dashboard from "../../components/Footer_dashboard";

export default function Dashboard() {
    return (
        <div className="container-fluid bg-white">
            <Header />
            <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-12 mb-4">
                    <UserDetails />
                </div>
                <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
                    <Home />
                </div>
            </div>
            <Footer_dashboard />
        </div>
    );
}
