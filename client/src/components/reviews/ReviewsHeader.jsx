import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import "./reviewsCss/reviewsHeader.css";

export default function ReviewsHeader() {
  return (
    <div className="reviews-header--container">
      <div className="reviews-header">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  );
}
