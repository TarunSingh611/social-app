import { useEffect, useState } from "react";
import LoginForm from "./LoginFormik.tsx";
import RegisterForm from "./SignupFormik.tsx";

const LandingMain = () => {
  const [overlaydefault, setOverlayDefault] = useState(false);
  const [overlayButtonText, setOverlayButtonText] = useState("Register");
  useEffect(() => {
    if (overlaydefault) {
      setOverlayButtonText("Login");
    } else {
      setOverlayButtonText("Register");
    }
  }, [overlaydefault]);
  return (
    <div className="landingMain">
      <div
        className={`formContainer rounded-lg ${
          overlaydefault ? "overlayLogin" : "overlaySignup"
        }`}
      >
        <div className="loginForm bg-slate-500">
          <LoginForm />
          <div
          className="loginOverlayButton formOverlayButton"
          onClick={() => setOverlayDefault(false)}
        >
          Log In
        </div>
        </div>
        <div className="signupForm bg-slate-200">
          <RegisterForm />
          <div
          className="signupOverlayButton formOverlayButton"
          onClick={() => setOverlayDefault(true)}
        >
          Sign Up
        </div>
        </div>
        <div className="formOverlay">
          {/* <div className="formOverlayButton" onClick={() => setOverlayDefault(!overlaydefault)}>
            {overlayButtonText}
           </div> */}
        </div>


      </div>
    </div>
  );
};

export default LandingMain;
