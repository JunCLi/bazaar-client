import React from 'react'

import { Formik } from 'formik'
import { addItemValidation } from '../validationSchemas'

import { Mutation } from 'react-apollo'
import { addItemMutation } from '../graphql-queries/mutations'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { FormGroup } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'

import '../css/forms.css'

const initialFormValues = {
  itemName: '',
  itemPrice: '',
  itemInventory: '',
  listItem: true,
  itemType: '',
  itemDescription: '',
}

const itemTypes = [
  {
    value: 'a super item',
    label: 'A super Item'
  },
  {
    value: 'an item',
    label: 'An Item'
  },
  {
    value: 'not a item',
    label: 'Not a item'
  },
  {
    value: 'a scam item',
    label: 'A Scam Item'
  },
]

const AddItemForm = () => {
  return (
    <div>
      <Mutation 
        mutation={addItemMutation}
        onError={(error) => {
          console.log(error)
        }}
        onCompleted={response => {
          alert('item submitted')
        }}
      >
        {(registerItem) => (
          <Formik
            initialValues={initialFormValues}
            onSubmit={(values, { setSubmitting }) => {
              const itemStatus = values.listItem ? 'listed' : 'unlisted'
              registerItem({ variables: {input: {
                item_name: values.itemName,
                item_owner_id: 1,
                item_status: itemStatus,
                item_type: values.itemType,
                item_price: values.itemPrice,
                item_inventory: values.itemInventory,
                item_description: values.itemDescription
              }}})
              setSubmitting(false)
            }}
            validationSchema={addItemValidation}
          >
            {formikProps => {
              const {
                values,
								touched,
								errors,
								dirty,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
                handleReset,
                setFieldValue,
              } = formikProps
              return (
                <form className='material-form' onSubmit={handleSubmit}>
                  <div className='form-field'>
                    <TextField
                      type='text'
                      name='itemName'
                      label='Item Name'
                      value={values.itemName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin='normal'
                    />
                    {errors.itemName && touched.itemName ? (
                      <FormHelperText className='form-helper form-error'>
                        {errors.itemName}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className='form-helper'>
                      </FormHelperText>
                    )}
                  </div>
                  <FormGroup className='price-and-quantity'>
                    <div className='form-field item-price'>
                      <TextField
                        type='text'
                        name='itemPrice'
                        label='Price'
                        value={values.itemPrice}
                        onChange={(event) => {
                          const itemPriceInput = event.currentTarget.value
                          let newValue = !isNaN(itemPriceInput) ? +itemPriceInput : values.itemPrice
                          if (newValue === 0) newValue = '' 
                          setFieldValue('itemPrice', newValue)
                        }}
                        onBlur={handleBlur}
                        margin='normal'
                      />
                      {errors.itemPrice && touched.itemPrice ? (
                        <FormHelperText className='form-helper form-error'>
                          {errors.itemPrice}
                        </FormHelperText>
                      ) : (
                        <FormHelperText className='form-helper'>
                        </FormHelperText>
                      )}
                    </div>
                    <div className='form-field'>
                      <TextField
                        type='number'
                        name='itemInventory'
                        label='Amount'
                        value={values.itemInventory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin='normal'
                      />
                      {errors.itemInventory && touched.itemInventory ? (
                        <FormHelperText className='form-helper form-error'>
                          {errors.itemInventory}
                        </FormHelperText>
                      ) : (
                        <FormHelperText className='form-helper'>
                        </FormHelperText>
                      )}
                    </div>                    
                  </FormGroup>

                  <div className='form-field'>
                    <TextField
                      select
                      name='itemType'
                      label='Item Type'
                      multiline={true}
                      value={values.itemType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin='normal'
                    >
                      {itemTypes.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {errors.itemType && touched.itemType ? (
                      <FormHelperText className='form-helper form-error'>
                        {errors.itemType}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className='form-helper'>
                      </FormHelperText>
                    )}
                  </div>

                  <div className='form-field'>
                    <TextField
                      type='text'
                      name='itemDescription'
                      label='Item Description'
                      multiline={true}
                      value={values.itemDescription}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin='normal'
                    />
                    {errors.itemDescription && touched.itemDescription ? (
                      <FormHelperText className='form-helper form-error'>
                        {errors.itemDescription}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className='form-helper'>
                      </FormHelperText>
                    )}
                  </div>

                  <div className='form-field toggle-list-item'>
                    <FormLabel component="label">List item in the marketplace?</FormLabel>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={values.listItem}
                          name='listItem'
                          value={values.listItem}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                        </Switch>
                      }
                      label={values.listItem ? 'Yes' : 'No'}
                    />
                  </div>

                  <section className='signup-form-btns'>
										<Button
											className='btn-submit'
											type='submit'
											disabled={isSubmitting}
										>
											Add Item
										</Button>
										<Button
											className='btn-reset'
											type='button'
											disabled={!dirty || isSubmitting}
											onClick={handleReset}
										>
											Reset
										</Button>
									</section>
                
                </form>
              )
            }}
          </Formik>
        )}
      </Mutation>
    </div>
  )
}

export default AddItemForm