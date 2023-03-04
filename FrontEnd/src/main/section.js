import React from 'react'

function Section({showUsers,showSubscriptions}) {
  return (
    <div className='sections'>
        <div className='section' onClick={()=>{
          showSubscriptions(false)
          showUsers(true)
        }}>
          <span>Users</span>
        </div>
        <div className='section' onClick={()=>{
          showUsers(false)
          showSubscriptions(true)
        }}>
          <span>Subscriptions</span>
        </div>
    </div>
  )
}

export default Section