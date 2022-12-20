import React, { createContext } from "react";
import Featured from "./Featured";
import Footers from "./Footers";
import "./reviewsCss/reviewsBody.css";

export const reviewContext = createContext();

export default function ReviewsBody() {
  const i = Math.floor(Math.random() * 100)
  return (
    <reviewContext.Provider value={i}>
    <div className="user-reviews--container">
      <div className="user-review--content">
        <Featured />
      </div>
      <div className="post-user-date">
        <Footers />
      </div>
    </div>
    </reviewContext.Provider>
  );
}
