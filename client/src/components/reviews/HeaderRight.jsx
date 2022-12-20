import React from 'react'

export default function HeaderRight() {
  return (
    <div className="reviews-header--right">
      <a className="add-review-button" 
        role="button"
        tabindex="0"
        aria-label="Review"
        aria-disabled="false"
        href="#">
          <svg width="24" 
            height="24" 
            className="add-review-icon"
            viewBox="0 0 24 24">
              <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
          </svg>
        <div className="add-review-button__text">Review</div>
        </a>
    </div>
  )
}
