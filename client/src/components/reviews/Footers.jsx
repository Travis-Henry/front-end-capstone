import React, { useContext } from 'react'
import { listContextStates } from '../../App'
import { reviewContext } from './ReviewsBody'

export default function Footers() {
  const i = useContext(reviewContext)
  const [currentMovie] = useContext(listContextStates)
  const userName = currentMovie.reviews[i].username;
  const postDate = currentMovie.reviews[i].revdate;
  console.log('postDate', postDate)
  return (
    <ul className="ipc-inline-list ipc-inline-list--show-dividers ipc-inline-list--inline base" role="presentation">
      <li className="ipc-inline-list__item"><a className="ipc-link ipc-link--base" role="button" tabindex="0" aria-disabled="false" data-testid="author-link" href="/user/ur0783721/?ref_=tt_urv_usr">{userName}</a></li>
      <li className="ipc-inline-list__item review-date">{postDate}</li>
    </ul>
  )
}
