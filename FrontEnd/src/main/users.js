import React from 'react'

function Users() {
  return (
    <div className='listDiv'>
      <span className='listName'>Users List</span>
      <div className='list'>
            <div className='item'>
              <div className='info'>name</div>
              <div className='info'> visits</div>
            </div>
            <User name="poxos" visits={4} />
            <User name="anastasia" visits={3} />
      </div>  
    </div>   
  )
}

function User({name,visits}){
  return(
    <div className='item'>
      <div className='info'>{name}</div>
      <div className='info'> {visits}</div>
    </div>
  )
}

export default Users
