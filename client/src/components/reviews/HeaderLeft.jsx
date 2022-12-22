import React, { useContext } from "react";
import { listContextStates } from "../../App";
import { Link } from "react-router-dom";

export default function HeaderLeft() {
  const [currentMovie] = useContext(listContextStates);
  const totalReviews = currentMovie.reviews.length;
  return (
    <Link to="/reviews" className="reviews-header--left" tabindex="0">
      <h3 className="user-reviews--title">
        User reviews
        <span className="review-count">{totalReviews}</span>
        <svg
          width="24"
          height="24"
          className="icon--chevron"
          viewBox="0 0 24 24"
        >
          <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
        </svg>
      </h3>
    </Link>
  );
}
