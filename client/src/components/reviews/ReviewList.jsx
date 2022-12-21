import React from 'react'

export default function ReviewList({...review}) {
  return (
    <div>
      <div>
        {review.rating}
      </div> 
      <div>
        {review.title}
      </div>
      <div>
        {review.username}
        {review.revDate}
      </div>
      <div>
        {review.content}
      </div>
    </div>
  )
}
