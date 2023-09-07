import { Route, Routes } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import DashBoard from "../components/pages/DashBoard";
import EmailVerification from "../components/auth/forget_password/EmailVerification";
import OtpVerification from "../components/auth/forget_password/OtpVerification";
import ChangePassword from "../components/auth/forget_password/ChangePassword";
import Home from "../components/pages/Home";
import NotFound from "../helpers/NotFound";
import CreateRecipe from "../components/pages/CreateRecipe";
import MyCookbook from "../components/pages/MyCookbook";
import DiscoveryRecipe from "../components/pages/DiscoveryRecipe";

const Routers = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createRecipe" element={<CreateRecipe />} />
            <Route path="/about_us" element={<DashBoard />} />
            <Route path="/myCookbook" element={<MyCookbook />} />
            <Route path="/discoveryRecipe" element={<DiscoveryRecipe />} />
            <Route path="/*" element={<NotFound />} />
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Routers;
