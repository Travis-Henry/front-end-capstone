import React, { useState, createContext } from 'react'

export const ShowContext = createContext()

export default function ReviewList({...review}) {
  const [show, setShow] = useState(false)

  const random = Math.floor(Math.random()*100)
  let style = show === true ? 
  {maxHeight: "fit-content", overflow: "visible"} : 
  {maxHeight: "100px", overflow: "hidden"}



  return (
    <div className="review-item--container">      
      <div className="review-item">
        <div className="star-rating">
          <svg width="24" 
              height="24" 
              className="star-icon"
              viewBox="0 0 24 24">
            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
          </svg><span className="user-rating">{review.rating}</span><span className="max-rating">/10</span>        
        </div> 
        <div className="r-title">
          {review.title}
        </div>
        <div className="r-author">
          <span className="r-author--href"><a href="#">{review.username}</a></span>
          <span className="r-author--date">{review.revdate}</span>
        </div>
        {/* <ShowContext.Provider value={ style={style} }> */}
        <div className="r-content" style={style} onClick={()=>setShow(!show)}>
          {review.content}
        </div>
        {/* </ShowContext.Provider> */}
      </div>
      <div className="r-stats">
        {random} out of {random+Math.floor(Math.random()*50)} found this helpful. Was this review helpful? <a href="#">Sign in</a> to vote.
      </div>
    </div>
  )
}
