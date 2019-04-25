import gql from 'graphql-tag'

export const signUpMutation = gql`
  mutation signUpVars($input: SignUpObject!){
    signUp(input: $input) {
      message
    }
  }
`

export const loginMutation = gql`
  mutation loginVars($input: LogInObject!){
    login(input: $input) {
      message
    }
  }
`

export const addItemMutation = gql`
  mutation addItemVars($input: RegisterItemObject!){
    registerItem(input: $input) {
      message
    }
  }
`