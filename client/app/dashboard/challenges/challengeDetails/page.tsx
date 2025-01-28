"use client"
import React from 'react'
import ChallengeDetailsPage from '@/components/dashboard/talent/challenges/ChallengeDetailsPage'

function ChallengesPage() {
  const [isadmin, setisadmin] = React.useState(false);
  return (
    <div className="">
      {!isadmin && <ChallengeDetailsPage/>}
    </div>
    
  )
}

export default ChallengesPage

