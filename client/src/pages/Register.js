import React from "react";
import "./style.css";
function Register() {
  return (
    <div className="signing-box">
      <div className="form-head">
        <h1>instagram</h1>
        <p>Sign up to see photos and videos from your friends.</p>
      </div>

      <form className="insta-form">
        <div class="form-group">
          <input type="text" placeholder="Name" className="form-control" />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email" className="form-control" />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
          />
        </div>
        <button type="submit" class="sub-btn">
          Submit
        </button>
      </form>
      <div className="form-foot">
        <h5>
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </h5>
        <p>Have an account? Log in</p>
      </div>
    </div>
  );
}
export default Register;
