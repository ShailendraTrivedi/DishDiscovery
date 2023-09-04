import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import DashBoard from "../components/pages/DashBoard";
import EmailVerification from "../components/auth/forget_password/EmailVerification";
import OtpVerification from "../components/auth/forget_password/OtpVerification";
import ChangePassword from "../components/auth/forget_password/ChangePassword";
import Home from "../components/pages/Home";

const isAuthenticated = false;
const Routers = () => {
  return (
    <>
      {isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<>Home</>} />
            <Route path="/about_us" element={<DashBoard />} />
            <Route path="/*" element={<>Shailendra</>} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/emailVerification" element={<EmailVerification />} />
            <Route path="/otpVerification" element={<OtpVerification />} />
            <Route path="/changePassword" element={<ChangePassword />} />

            <Route
              path="/forget_password"
              element={<div className="text-5xl">Forget Password</div>}
            />
            <Route
              path="/*"
              element={
                <>
                  <div className="text-3xl">Not Found</div>
                </>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default Routers;
