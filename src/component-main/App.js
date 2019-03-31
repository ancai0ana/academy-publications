import React from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faArrowLeft,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { Routing } from '../component-main'
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faUserPlus)
library.add(faSignInAlt)

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
  credentials: 'same-origin',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
const App = props => {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  )
}
export default App
