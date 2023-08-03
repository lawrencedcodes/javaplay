import React from "react"

function UserDescription({name, goals}) {
  return (
    <div>
        <h4>{name}</h4>
        <p>{goals}</p>
    </div>
  )
}

export default UserDescription;