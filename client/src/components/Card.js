import React from "react";
import pic1 from "../images/insta.jpg";
function Card() {
  return (
    <div className="post-card">
      <img src={pic1} alt="image" />
      <div className="card-body">
        <h4>84 likes</h4>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <h5>posted on:1/12/20</h5>
      </div>
    </div>
  );
}
export default Card;
