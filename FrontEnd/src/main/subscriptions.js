import React from 'react'

function Subscriptions() {
  return (
    <div className='listDiv'>
      <span className='listName'>Subscriptions List</span>
      <div className='list'>
            <div className='item'>
              <div className='info'>name</div>
            </div>
            <Subscription name="one time"  />
            <Subscription name="monthly" visits={3} />
      </div>  
    </div>   
  )
}

function Subscription({name,visits}){
  return(
    <div className='item'>
      <div className='info'>{name}</div>
    </div>
  )
}

export default Subscriptions
