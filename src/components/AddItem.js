import React from 'react'

import Navbar from './Navbar'
import AddItemForm from './AddItemForm'

const AddItem = () => {
  return (
    <div>
      <Navbar />
      <section className='add-item'>
        <h1>Add an Item</h1>
        <AddItemForm />
      </section>
    </div>
  )
}

export default AddItem