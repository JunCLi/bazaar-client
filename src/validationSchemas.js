import * as Yup from 'yup'

const loginValidation = Yup.object().shape({
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
    .required()
})

const signupValidation = Yup.object().shape({
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
})

export {loginValidation, signupValidation}