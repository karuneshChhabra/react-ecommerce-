import React from 'react'

function RegularList({ItemComponent,resource,list}) {

  return (
    <>{list && list.map((value,i)=>
        <ItemComponent key={i} {...{[resource]:value}}/>
        )}</>
  )
}

export default RegularList

