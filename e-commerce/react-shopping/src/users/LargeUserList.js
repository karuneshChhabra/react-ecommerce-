import React from 'react'

function LargeUserList({user}) {
  return (
    <div key={user.id}>
<span>{user.name.firstName + " " +user.name.lastname}</span>
<span>{user.email}</span>



    </div>
  )
}

export default LargeUserList