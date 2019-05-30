import React, { useState } from 'react'

import { Formik } from 'formik'
import { signupValidation } from '../validationSchemas'
import { Redirect } from 'react-router-dom'

import { Mutation } from 'react-apollo'
import { signUpMutation } from '../graphql-queries/mutations'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'

import '../css/forms.css'

const initialFormValues = {
	userEmail: '',
	userFullName: '',
	password: '',
	confirmPassword: '',
}

const Signup = () => {
	const [ redirecting, setRedirecting ] = useState(false)

	if (redirecting) return <Redirect to='/'></Redirect>

	return (
		<div>
			<Mutation
				mutation={signUpMutation}
				onError={(error) => {
					console.log('signup err:', error)
				}}
				onCompleted={response => {
					console.log('response:', response)

					if (response.signUp.message === 'success') {
						setRedirecting(true)
					}
				}}
			>
				{(signUp) => (
					<Formik
						initialValues={initialFormValues}
						onSubmit={(values, { setSubmitting }) => {
							console.log(values)
							signUp({ variables: {input: {
								email: values.userEmail,
								fullname: values.userFullName,
								password: values.password,
							}}})
							setSubmitting(false)
						}}
						validationSchema={signupValidation}
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
							} = formikProps

							return (
								<form className='material-form' onSubmit={handleSubmit}>
									<div className='form-field'>
										<TextField
											type='text'
											id='userEmail'
											name='userEmail'
											label='Email'
											value={values.userEmail}
											onChange={handleChange}
											onBlur={handleBlur}
											margin='normal'
											/>
										{errors.userEmail && touched.userEmail ? (
											<FormHelperText className='form-helper form-error'>
												{errors.userEmail}
											</FormHelperText>
										) : (
											<FormHelperText className='form-helper'>
											</FormHelperText>
										)}
									</div>

									<div className='form-field'>
										<TextField
											type='text'
											id='userFullName'
											name='userFullName'
											label='Full Name'
											value={values.userFullName}
											onChange={handleChange}
											onBlur={handleBlur}
											margin='normal'
											/>
										{errors.userFullName && touched.userFullName ? (
											<FormHelperText className='form-helper form-error'>
												{errors.userFullName}
											</FormHelperText>
										) : (
											<FormHelperText className='form-helper'>
											</FormHelperText>
										)}
									</div>

									<div className='form-field'>
										<TextField
											type='password'
											id='password'
											name='password'
											label='Password'
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											margin='normal'
											/>
										{errors.password && touched.password ? (
											<FormHelperText className='form-helper form-error'>
												{errors.password}
											</FormHelperText>
										) : (
											<FormHelperText className='form-helper'>
											</FormHelperText>
										)}
									</div>

									<div className='form-field'>
										<TextField
											type='password'
											id='confirmPassword'
											name='confirmPassword'
											label='Confirm Password'
											value={values.confirmPassword}
											onChange={handleChange}
											onBlur={handleBlur}
											margin='normal'
											/>
										{errors.confirmPassword && touched.confirmPassword ? (
											<FormHelperText className='form-helper form-error'>
												{errors.confirmPassword}
											</FormHelperText>
										) : (
											<FormHelperText className='form-helper'>
											</FormHelperText>
										)}
									</div>

									<section className='signup-form-btns'>
										<Button
											className='btn-submit'
											type='submit'
											disabled={isSubmitting}
										>
											Sign Up
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

export default Signup
