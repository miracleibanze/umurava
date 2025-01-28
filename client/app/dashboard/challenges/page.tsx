"use client"
import React from 'react'
import TalentChallengesPage from '@/components/dashboard/talent/challenges/page'

function ChallengesPage() {
  const [isadmin, setisadmin] = React.useState(false);
  return (
    <div className="">
      {!isadmin && <TalentChallengesPage/>}
    </div>
    
  )
}

export default ChallengesPage

