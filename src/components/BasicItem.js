import React from 'react'

const BasicItem = (props) => {
  const { item } = props
  const { item_name, item_price, item_owner_name } = item


  return (
    <li>
      <h3>{item_name}</h3>
      <p>${item_price/100}</p>
      <p>sold by: {item_owner_name}</p>
    </li>
  )
}

export default BasicItem