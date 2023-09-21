import { useState } from 'react';
const User = (props) => {

  const { name, location } = props;

  return (
    <div className="m-4 p-4 bg-gray-500 rounded-lg">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sameeranand23</h4>
    </div>
  )
}

export default User;