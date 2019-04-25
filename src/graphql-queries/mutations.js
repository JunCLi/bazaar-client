import gql from 'graphql-tag'

const signUpMutation = gql`
  mutation signUpVars($input: SignUpObject!){
    signUp(input: $input) {
      message
    }
  }
`

const loginMutation = gql`
  mutation loginVars($input: LogInObject!){
    login(input: $input) {
      message
    }
  }
`

export { signUpMutation, loginMutation }