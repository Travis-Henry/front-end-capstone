import React, { useContext } from 'react'
import { listContextStates } from '../../App'

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
            <div className="ipc-voting__transition-group">
              <button className="ipc-voting__icon--up" 
                title="Is helpful"
                role="button"
                tabindex="0"
                aria-label="Is helpful"
                aria-disabled="false"
                type="button">
                <svg className="ipc-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M13.12 2.06c.58-.59 1.52-.59 2.11-.01.36.36.51.87.41 1.37L14.69 8h5.65c2.15 0 3.6 2.2 2.76 4.18l-3.26 7.61C19.52 20.52 18.8 21 18 21H9c-1.1 0-2-.9-2-2V9.01c0-.53.21-1.04.58-1.41l5.54-5.54zM9.293 8.707A1 1 0 0 0 9 9.414V18a1 1 0 0 0 1 1h7.332a1 1 0 0 0 .924-.617c1.663-4.014 2.527-6.142 2.594-6.383.07-.253.12-.587.15-1v-.002A1 1 0 0 0 20 10h-8l1.34-5.34-4.047 4.047zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z"></path>
                </svg>
              </button>
            </div>
            <span className="ipc-voting__label">
              <span className="ipc-voting__label__text" 
                title="helpful">helpful</span>
              <span className="ipc-voting__dot-separator">•</span>
              <span className="ipc-voting__label__count">*70</span>
            </span>
            <div className="ipc-voting__transition-group">
              <button className="ipc-voting__icon--down"
                title="is not helpful"
                role="button"
                tabindex="0"
                aria-label="Is not helpful"
                aria-disabled="false"
                type="button">
                  <svg className="ipc-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                      <path d="M16.41 16.4l-5.53 5.54c-.58.59-1.52.59-2.11.01-.36-.36-.51-.87-.41-1.37L9.31 16H3.66c-2.15 0-3.6-2.2-2.75-4.18l3.26-7.61A1.99 1.99 0 0 1 6 3h8.99c1.1 0 2 .9 2 2v9.99c0 .53-.21 1.04-.58 1.41zm-1.703-1.107a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1H6.66a1 1 0 0 0-.92.607c-1.667 3.902-2.53 5.981-2.586 6.236-.06.268-.11.606-.154 1.013V13a1 1 0 0 0 1 1h8l-1.077 4.293c-.153.527-.19.814-.11.86.08.046.281-.144.605-.571l3.29-3.29zM21 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                    </svg>
                </button>
            </div>
            <span className="ipc-voting__label">
              <span className="ipc-voting__label__count">*30</span>
            </span>
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
