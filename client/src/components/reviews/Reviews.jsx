import React from "react";
import ReviewsHeader from "./ReviewsHeader";
import ReviewsBody from "./ReviewsBody";
import "./reviewsCss/reviewsHeader.css";

export default function Reviews() {
  return (
    <section className="reviews-section--container">
      <>
        <ReviewsHeader />
        <ReviewsBody />
      </>
      <div className="add-space"></div>
    </section>
  );
}
