import React from 'react'

import { Formik } from 'formik'
import { addItemValidation } from '../validationSchemas'

import { Mutation } from 'react-apollo'
import { addItemMutation } from '../graphql-queries/mutations'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Switch from '@material-ui/core/Switch'
import { FormGroup } from '@material-ui/core';

const initialFormValues = {
  itemName: '',
  itemPrice: '',
  itemInventory: '',
  listItem: true,
}

const AddItemForm = () => {
  return (
    <div>
      <Mutation 
        mutation={addItemMutation}
        onError={(error) => {
          console.log(error)
        }}
        onCompleted={response => {
          console.log('Response: ', response)
        }}
      >
        {(registerItem) => (
          <Formik
            initialValues={initialFormValues}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
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
                      id='itemName'
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
                  <div className='form-field'>
                  
                  </div>
                  <div className='form-field'>
                  
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