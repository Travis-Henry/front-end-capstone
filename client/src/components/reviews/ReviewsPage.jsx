import React, { useContext, useState } from 'react'
import { listContextStates } from '../../App'
import ReviewList from './ReviewList'

export default function ReviewsPage() {
  const [currentMovie] = useContext(listContextStates)
  const [isLoading, setIsLoading] = useState(true)
  const reviews = currentMovie.reviews

  while(isLoading){
    if(reviews){
      setIsLoading(false)
      isLoading === false;
    }
    return (
      <h2>...Loading</h2>
    )
  }
  while(!isLoading){
    return (
      <div>
        {reviews.map(review => 
          <ReviewList key={review.review_id} {...review} />)}
      </div>
    )    
  }
}
