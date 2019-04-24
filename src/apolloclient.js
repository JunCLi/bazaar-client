import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql'
})

const appCache = new InMemoryCache()

const stateLink = withClientState({
  cache: appCache
})

const apolloClient = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache: appCache
})

export default apolloClient


