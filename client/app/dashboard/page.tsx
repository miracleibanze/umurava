"use client"
import React from 'react'
import TalentDashboard from '../../components/dashboard/talent/page'

function DashboardPage() {
  const [isadmin, setisadmin] = React.useState(false);
  return (
    <div className="">
      {!isadmin && <TalentDashboard />}
    </div>
    
  )
}

export default DashboardPage

