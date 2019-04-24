import React from 'react'
import './App.css'
import './Normalize.css'

import { ApolloProvider, Query } from 'react-apollo'
import apolloClient from './apolloclient'
import { authenticationQuery } from './graphql-queries/queries.js'

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
// import theme from './theme'

import AppRouter from './AppRouter'
import Loading from './components/Loading'

const App = () => {
	return (
    <ApolloProvider client={apolloClient}>
      {/* <MuiThemeProvider theme={theme}> */}
        <Query query={authenticationQuery}>
          {({loading, err, data}) => {
            if (loading) return <Loading />
            if (err) return <div>Error: {JSON.stringify(err)}</div>

            return (
              <div>
                <AppRouter />
              </div>
            )
          }}
        </Query>
      {/* </MuiThemeProvider> */}
    </ApolloProvider>
	)
}

export default App
