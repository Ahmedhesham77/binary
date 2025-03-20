
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/SideBar"

import SignIn from './pages/sign_in/SignIn';
import ChooseSend from './pages/chosse_send/ChooseSend';
import Verfication from './pages/verfication_2_factor/Verfication';
import ForGetPassWord from './pages/forgetpassword/ForGetPassWord';
import NewPassword from './pages/newpassword/NewPassword';
import PasswordChanged from './pages/passwordChanged/PasswordChanged';
import SubSubscribeToApp from './pages/subscribeToApp/SubSucribeToApp';
import Dashboard from './pages/dashboard/DashBoard';
import SuccessfulCreated from './pages/SuccessfulCreated/SuccessfulCreated';

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/choose-send" element={<ChooseSend />} />
          <Route path="/verification" element={<Verfication />} />
          <Route path="/forgot-password" element={<ForGetPassWord />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/password-changed" element={<PasswordChanged />} />
          <Route path="/subscribe" element={<SubSubscribeToApp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/successfuly" element={<SuccessfulCreated />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
