import React, { useState } from 'react'

const User = (props) => {
  const{name} = props;
  const[age , setAge] = useState(20);
  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Address: Pune</h3>
      <h3>Age: {age}</h3>
      <h4>Github Profile: www.github.com/PrasadYewale</h4>
    </div>
  )
}

export default User
