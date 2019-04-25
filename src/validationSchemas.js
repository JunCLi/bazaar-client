import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required('Missing email.'),
  password: Yup.string()
    .min(
      8,
      'Password is too short. It needs to be 8 or more characters.'
    )
    .matches(
      /[a-zA-Z0-9]/,
      'Invalid password. Your password can only contain alphanumeric characters.'
    )
    .required('Missing password.')
})

export const signupValidation = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required('Missing email.'),
  password: Yup.string()
    .min(
      8,
      'Password is too short. It needs to be 8 or more characters.'
    )
    .matches(
      /[a-zA-Z0-9]/,
      'Invalid password. Your password can only contain alphanumeric characters.'
    )
    .required('Missing password.'),
  confirmPassword: Yup.string()
    .test('passwords-match', "The passwords don't match", function(
      value
    ) {
      return this.parent.password === value
    })
    .required('Missing password confirmation.'),
})

export const addItemValidation = Yup.object().shape({
  itemName: Yup.string()
    .min(
      4,
      'Name is too short. It needs to be 4 or more characters.'
    )
    .matches(
      /^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/g,
      'Invalid name. invalid character inputed.'
    )
    .required('Missing item name.'),
  itemPrice: Yup.number()
    .required('Missing item price.'),
  itemInventory: Yup.number()
    .required('Missing item quantity'),
})