import React from "react";
import Featured from "./Featured";
import Footers from "./Footers";
import "./reviewsCss/reviewsBody.css";

export default function ReviewsBody() {
  return (
    <div className="user-reviews--container">
      <div className="user-review--content">
        <Featured />
      </div>
      <div className="post-user-date">
        <Footers />
      </div>
    </div>
  );
}
