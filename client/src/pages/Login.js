import React from "react";
import "./style.css";
function Login() {
  return (
    <div className="signing-box">
      <div className="form-head">
        <h1>instagram</h1>
      </div>

      <form className="insta-form">
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
        <button type="submit" class="sub-btn">
          Submit
        </button>
      </form>
      <div className="form-foot">
        <p>Don't have an account? sign in</p>
      </div>
    </div>
  );
}
export default Login;
