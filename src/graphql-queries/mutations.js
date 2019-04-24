import gql from 'graphql-tag'

const signUpMutation = gql `
  mutation signUpVars($input: SignUpInput!){
    signUp(input: $input) {
      message
    }
  }
`

export { signUpMutation }