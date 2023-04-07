import React, { useState } from 'react'

function TwiterFollowCard({ formatUsername, username, isFollowing, children }) {
  const [follow, setFollow] = useState(isFollowing)
  return (
    <article>
      <header>
        <img src={`https://unavatar.io/${username}`} alt={`${username}.image`} />
        <div>
          <strong>{children}</strong>
          <span>{formatUsername(username)}</span>
        </div>
      </header>
      <aside>
        <button
        className={`${follow ? 'follow' : 'unfollow'}`}
          onClick={() => setFollow(!follow)}>
          {follow ? 'Seguir' : 'Siguiendo'}
        </button>
      </aside>
    </article>
  )
}

export default TwiterFollowCard