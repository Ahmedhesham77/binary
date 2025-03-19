import Header from "../../components/Header";
import UserDetails from "../../components/UserDash";
import Home from "../../components/Home";

export default function Dashboard() {
    return (
        <div className="container-fluid bg-white">
            <Header />
            <div className="row">
                <div className="col-md-6 mb-4">
                    <UserDetails />
                </div>
                <div className="col-md-6 mb-4">
                    <Home />
                </div>
            </div>
        </div>
    );
}
