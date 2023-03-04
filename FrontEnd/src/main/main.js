import React, { useState } from 'react'
import Section from './section'
import Subscriptions from './subscriptions'
import Users from "./users"

function Main() {

  const [showUsers,setShowUsers] = useState(true)
  const [showSubscriptions,setShowSubscriptions] = useState(false)

  return (
    <div className='main'>
        <Section showUsers={setShowUsers} showSubscriptions={setShowSubscriptions}/>
        {showUsers &&
          <Users />
        }
        {showSubscriptions &&
          <Subscriptions />
        }
        
    </div>
  )
}

export default Main