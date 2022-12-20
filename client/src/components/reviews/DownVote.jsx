import React, { useState } from 'react'

export default function DownVote() {
  const i = Math.floor(Math.random() * 100)
  const [ downVote, setDownVote] = useState(Math.floor(i/3));

  const handleDownVote = () => {
    setDownVote(downVote + 1);
  }

  return (
    <>
      <div className="ipc-voting__transition-group">
              <button className="ipc-voting__icon--down"
                title="is not helpful"
                role="button"
                tabindex="0"
                aria-label="Is not helpful"
                aria-disabled="false"
                type="button"
                onClick={handleDownVote}>
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
              <span className="ipc-voting__label__count">{downVote}</span>
            </span>
    </>
  )
}
