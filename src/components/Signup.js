import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

// import { Mutation } from 'react-apollo'
// import { signUpMutation } from '../graphql-queries/mutations'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'

import Navbar from './Navbar'

const Signup = () => {
	return (
		<div>
			<Navbar />
			<h1>Sign up</h1>

			{/* <Mutation
				mutation={signUpMutation}
				onError={(error) => {
					console.log(error)
				}}
				onCompleted={response => {
					console.log('Response: ', response)
					alert("We're gucci")
				}}
			> */}
				{/* {(signUp, { data }) => ( */}
					<Formik
						initialValues={{
							userEmail: '',
							password: '',
							confirmPassword: '',
						}}
						onSubmit={(values, { setSubmitting }) => {
							console.log(values)
							// signUp({ variables: {input: values}})
							setSubmitting(false)
						}}
						validationSchema={Yup.object().shape({
							username: Yup.string()
								.min(
									4,
									'Username is too short. It needs to be 4 or more characters'
								)
								.matches(
									/^([a-zA-Z0-9_-]+)$/,
									'Invalid username. Your username can only contain alphanumeric characters.'
								)
								.required(),
							userEmail: Yup.string()
								.email()
								.required(),
							password: Yup.string()
								.min(
									8,
									'Password is too short. It needs to be 8 or more characters'
								)
								.matches(
									/[a-zA-Z0-9]/,
									'Invalid password. Your password can only contain alphanumeric characters.'
								)
								.required(),
							confirmPassword: Yup.string()
								.test('passwords-match', "The passwords don't match", function(
									value
								) {
									return this.parent.password === value
								})
								.required(),
						})}
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
								<form className='signup' onSubmit={handleSubmit}>
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
										<FormHelperText className='form-error'>
											{errors.userEmail}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											your email
										</FormHelperText>
									)}

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
										<FormHelperText className='form-error'>
											{errors.password}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											your password
										</FormHelperText>
									)}

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
										<FormHelperText className='form-error'>
											{errors.confirmPassword}
										</FormHelperText>
									) : (
										<FormHelperText className='form-helper'>
											your password
										</FormHelperText>
									)}

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
				{/* )} */}
			{/* // </Mutation> */}
		</div>
	)
}

export default Signup
