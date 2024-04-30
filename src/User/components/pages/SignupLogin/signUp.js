import React, { useRef, useState } from "react";
import "./signUp.css";
import SignUp from "../../image/signup.svg";
import { BASE_URL } from "../../../../constant";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';


  const Signup = ()=> {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState('');
  const [otp ,setOtp] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmpassword);
  };
  const handleGetOTP = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/getOtp`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log( response.data.message);
      toast.info(response.data.message)
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Error sending OTP")
      // Handle error, show a message to the user, etc.
    }
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match when confirm password changes
    setPasswordsMatch(e.target.value === password);
  };
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = { name, phone, email, password, confirmpassword, otp };
    console.log(form);
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      console.log("Signup response:", response.data);
      
      if (response.status === 200) {
        if (response.data.message ) {
          
          toast.warn(response.data.message); // Display alert message for existing email
        } else {
          toast.success("SignUp successfully!");
          navigate("/login");
        }
      } else {
        
        toast.error("Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors if needed
      toast.error("Sign up failed. Please try again.");
    }
    
    
  };
  

const handleInputChange = (e) => {
  // Reset the submitted state when any input field changes
  setSubmitted(false);

  // Handle input change as usual
  const { name, value } = e.target;
  switch (name) {
    case "name":
      setName(value);
      break;
    case "phone":
      setPhone(value);
      break;
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
      break;
    case "confirmpassword":
      setConfirmPassword(value);
      break;
      case "otp":
      setOtp(value);
      break;
    default:
      break;
  }
};
 
  return (
    <main className="signup-main">
      <div className="right-signup ">
        <img src={SignUp} alt="BgImage" className="fill-image"></img>
      </div>
      <div className="left-signup">
        <div className="signup-form">
          <div className="signup-heading">
            <h1>Sign Up</h1>
           
          </div>

          <form  onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                required={submitted}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // placeholder="Phone Number"
                className="form-input"
                required={submitted}
              />
            </div>
            <div className="form-field-otp">
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // placeholder="Email-Id"
                className="form-input"
                required
              />
                <button onClick={handleGetOTP} className="get-otp-button">Get OTP</button>
            </div>
            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Enter Otp
              </label>
              <input
                type="otp"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                // placeholder="Email-Id"
                className="form-input"
                required
              />
            </div>
            </div>
           
            <div className="form-field">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="form-input"
          required={submitted}
        />
      </div>
      <div className="form-field">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
          className="form-input"
          required={submitted}
        />
        {!passwordsMatch && (
          <p style={{ color: 'red' }}>Passwords do not match.</p>
        )}
      </div>
            <div className="form-field  terms-privacy">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="form-checkbox"
                required={submitted}
              />

              <label htmlFor="terms" className="form-label">
                Agree to our Terms of use and Privacy Policy
              </label>
            </div>
            <div className="form-final-button">
           
              <button type="submit" className="submit-button" onClick={() => setSubmitted(true)}>
                Sign Up
              </button>
            
              {/* Google Sign In Button */}
              {/* <a href="#" className="rounded-button google-login-button">
                <span className="google-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                      fill="#fbbb00"
                    />
                    <path
                      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                      fill="#518ef8"
                    />
                    <path
                      d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                      fill="#28b446"
                    />
                    <path
                      d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                      fill="#f14336"
                    />
                  </svg>
                </span>
              </a> */}
            </div>
            <div className="form-final-div">
              <p>Already have an account?</p>
              <Link to="/login">
                {" "}
                <h3>Log In</h3>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signup;

