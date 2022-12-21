import React, { useContext } from 'react'
import { listContextStates } from '../../App'
import ReviewList from './ReviewList'

export default function ReviewsPage() {
  const [currentMovie] = useContext(listContextStates)
  const reviews = currentMovie.reviews
  return (
    <div>
      {reviews.map(review => 
        <ReviewList key={review.review_id} {...review} />)}
    </div>
  )
}
