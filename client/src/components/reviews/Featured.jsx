import React, { useState, useContext } from 'react'
import UpVote from './UpVote'
import { listContextStates } from '../../App'
import DownVote from './DownVote'

export default function Featured() {
  const [currentMovie] = useContext(listContextStates)
  const i = Math.floor(Math.random() * 100)
  console.log(currentMovie)
  const title = currentMovie.reviews[i].title;
  const review = currentMovie.reviews[i].content;
  const sum = currentMovie.reviews.map(r => r.rating).reduce((a, b) => a + b);
  const avg = sum/currentMovie.reviews.length
  const usableAvg = parseFloat(avg.toFixed(1))
 


 

  return (
    <>
      <div className="featured-review--header">
        <div className="featured-review--label">
          <div className="featured-review--text">
            Featured review
          </div>
        </div>
        <span className="star-rating-div">
          <svg width="24" 
            height="24" 
            className="star-icon"
            viewBox="0 0 24 24">
            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
          </svg>{usableAvg}<span className="max-rating">/10</span>
        </span>        
      </div>
      <div className="featured-review--title-main">
        <span className="featured-review--title">{title}</span>
      </div>
      <div className="icon-reviews--overflow" role="button">
        <div className="review-summary-div">
          <div className="review-contents-div">
            {review}
          </div>
        </div>
        <button className="ipc-overflowText-overlay"
          role="button"
          tabindex="0"
          aria-label="See more"
          aria-disabled="false"
          type="button">
            <svg className="ipc-icon-show-overflow"
              viewBox="0 0 24 24"
              fill="currentColor">
                <path fill="none"
                  d="M0 0h24v24H0V0z"></path>
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
        </button>
      </div>
      <div className="ipc-list-card__actions">
        <div className="review-card-actions">
          <div className="ipc-voting">
            <UpVote />
            <DownVote />
          </div>
          <div>
            <button className="ipc-icon-button"
              title="More options"
              role="button"
              tabindex="0"
              aria-label="More options"
              aria-disabled="false"
              type="button">
                <svg className="ipc-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                    <path fill="none"
                      d="M0 0h24v24H0V0z"></path>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
              </button>
              <div className="share-container"></div>
          </div>
        </div>
      </div>
    </>
  )
}
