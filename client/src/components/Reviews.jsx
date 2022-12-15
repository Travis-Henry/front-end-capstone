import Review from "./reviewChildren/Review";
import './css/reviews.css'

function Reviews() {
  return (

    <div class="ipc-title ipc-title--section-title ipc-title--base ipc-title--on-textPrimary" data-testid="reviews-header">
      <div class="ipc-title__wrapper">
        <a href="/title/tt0245844/reviews?ref_=tt_urv" class="ipc-title-link-wrapper" tabindex="0">
        <h3 class="ipc-title__text">User reviews<span class="ipc-title__subtext">654</span><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-title-link ipc-title-link-chevron ipc-title--nomargin" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation">
        <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
        </svg></h3></a><div class="ipc-title__actions"><a data-testid="edit-action-button" class="ipc-button ipc-button--half-padding ipc-button--center-align-content ipc-button--default-height ipc-button--core-base ipc-button--theme-base ipc-button--on-accent2 ipc-text-button sc-66880046-1 cepkTm" role="button" tabindex="0" aria-label="Review" aria-disabled="false" href="https://contribute.imdb.com/review/tt0245844/add?bus=imdb&amp;return_url=https%3A%2F%2Fwww.imdb.com%2Fclose_me&amp;site=web&amp;ref_=tt_urv_add"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--add ipc-button__icon ipc-button__icon--pre" id="iconContext-add" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg><div class="ipc-button__text">Review</div></a></div></div></div>


    
    // <div>
    //   <h3><strong>|</strong>User reviews #</h3>
    //   <div>
    //     {/* {reviews.map(review =>
    //       <Review key={review.movie_id} {...review} />)} */}
    //   </div>
    // </div>
  );
}

export default Reviews;
