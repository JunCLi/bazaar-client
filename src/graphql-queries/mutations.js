import gql from 'graphql-tag'

const signUpMutation = gql `
  mutation signUpVars($input: SignUpObject!){
    signUp(input: $input) {
      message
    }
  }
`

export { signUpMutation }