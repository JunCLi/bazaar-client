import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const PlaceholderSignup = () => {
	return (
		<div className='login-form'>
			<Formik
				initialValues={{
					username: '',
					userEmail: '',
					password: '',
					confirmPassword: '',
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values)
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
						<form onSubmit={handleSubmit}>
							<input
								type='text'
								id='username'
								name='username'
								placeholder='Username'
								value={values.userName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.username && touched.username && (
								<div className='form-error'>{errors.username}</div>
							)}

							<input
								type='email'
								id='userEmail'
								name='userEmail'
								placeholder='Email'
								value={values.userEmail}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.userEmail && touched.userEmail && (
								<div className='form-error'>{errors.userEmail}</div>
							)}

							<input
								type='password'
								id='password'
								name='password'
								placeholder={`Password`}
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.password && touched.password && (
								<div className='form-error'>{errors.password}</div>
							)}

							<input
								type='password'
								id='confirmPassword'
								name='confirmPassword'
								placeholder={`Confirm Password`}
								value={values.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.confirmPassword && touched.confirmPassword && (
								<div className='form-error'>{errors.confirmPassword}</div>
							)}

							<section>
								<button
									className='btn-submit'
									type='submit'
									disabled={isSubmitting}
								>
									Sign Up
								</button>
								<button
									className='btn-reset'
									type='button'
									disabled={!dirty || isSubmitting}
									onClick={handleReset}
								>
									Reset
								</button>
							</section>
						</form>
					)
				}}
			</Formik>
		</div>
	)
}

export default PlaceholderSignup
