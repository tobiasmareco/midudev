import React from 'react'
import './App.css'
import TwiterFollowCard from './components/TwiterFollowCard'
function App() {
  const formatUsername = username => `@${username}`
  return (
    <section className='App'>
      <TwiterFollowCard
        formatUsername={formatUsername}
        isFollowing
        username='midudev'>
        Miguel Angel Duran
      </TwiterFollowCard>
      <TwiterFollowCard
        formatUsername={formatUsername}
        isFollowing={false}
        username='pheralb'>
        Francisco Farina
      </TwiterFollowCard>
      <TwiterFollowCard
        formatUsername={formatUsername}
        isFollowing username='elonmusk'>
        Elon Musk
      </TwiterFollowCard>
    </section>
  )
}

export default App