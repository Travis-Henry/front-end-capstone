import React from 'react'
import ReviewsHeader from './ReviewsHeader'
import ReviewsBody from './ReviewsBody'
import '../css/reviewsCss/reviewsSectionContainer.css'

export default function Reviews() {
  return (
    <section className="reviews-section--container">
      <ReviewsHeader />
      <ReviewsBody />
    </section>
  )
}
