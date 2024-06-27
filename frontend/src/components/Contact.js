import React from 'react'

const Contact = ({contact}) => {
  return (
    <div>
      <h2> {contact.name} </h2>
      <h2> {contact.email} </h2>
      <h2> {contact.phone} </h2>
    </div>
  )
}

export default Contact
