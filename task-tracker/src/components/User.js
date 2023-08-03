import React from "react";                                                                                                                                                                                                   
import UserDescription from "./UserDescription";           

function User({title, status, name, goals}) {
  return (
    <div class="card">
        <h1>{title}</h1>
        <p>{status}</p>
        <UserDescription name={name} goals={goals} />
    </div>
  )
}

export default User