import React from 'react'

const BasicItem = (props) => {
  const { item } = props
  const { item_name, item_price, itemOwner } = item
  
  return (
    <li>
      <h3>{item_name}</h3>
      <p>${item_price/100}</p>
      <p>sold by: {itemOwner.fullname}</p>
    </li>
  )
}

export default BasicItem