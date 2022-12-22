import React, { useContext, useState } from 'react'
import { listContextStates } from '../../App'
import { Image } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import ReviewList from './ReviewList'
import './reviewsCss/reviewsPage.css'

export default function ReviewsPage() {
  const [currentMovie, setCurrentMovie, isLoading, setIsLoading] = useContext(listContextStates)

  const reviews = currentMovie.reviews
  const poster = currentMovie.poster
  const dateString = currentMovie.releasedate;
  const date = new Date(dateString);
  const year = date.getFullYear();

 

  while(isLoading){
    if(reviews){
      setIsLoading(false)
      isLoading === false;
    }
    return (
      <ColorRing
      className="spinner"
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    )
  }
  while(!isLoading){
    return (
      <div className="review-page">
        <div className="header">
          <div className="poster">
          <Image fluid src={poster} width="50px"/>
          </div>
          <span className="header-info">
          <div><a href="/" className="movie-name">{currentMovie.moviename}</a><span className="year">({year})</span></div>
          <h2 className="header-text">User Reviews</h2>
          <a href="#" 
          className="review-link">
            <svg className="add-icon " 
              fill="#0d6efd" 
              height="12" 
              viewBox="0 0 24 24" 
              width="12" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
            </svg>Review this title</a>
          </span>
        </div>
          {reviews.map(review => 
            <ReviewList key={review.review_id} {...review} />)}
      </div>
    )    
  }
}
