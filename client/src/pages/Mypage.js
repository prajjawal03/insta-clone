import React from "react";
import pic1 from "../images/insta.jpg";
function Mypage() {
  return (
    <div className="myPage">
      <div className="personal-details">
        <img src={pic1} alt=" " />
        <div className="right-details">
          <h1>prajjawal tiwari</h1>
          <div>
            <p>posts:50</p>
            <p>followers:50</p>
            <p>following:50</p>
          </div>
        </div>
      </div>
      <div className="photo-gallary">
        <div>
          <img src={pic1} />
        </div>
        <div>
          <img src={pic1} />
        </div>
        <div>
          <img src={pic1} />
        </div>
        <div>
          <img src={pic1} />
        </div>
        <div>
          <img src={pic1} />
        </div>
        <div>
          <img src={pic1} />
        </div>
      </div>
    </div>
  );
}
export default Mypage;
