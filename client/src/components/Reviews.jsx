import Review from "./reviewChildren/Review";

function Reviews() {
  return (
    <div>
      <h3><strong>|</strong>User reviews #</h3>
      <div>
        {reviews.map(review =>
          <Review key={review.movie_id} {...review} />)}
      </div>
    </div>
  );
}

export default Reviews;
