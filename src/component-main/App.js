import React from 'react'
import styled from 'styled-components'
import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import Icons from './Icons'
import { Routing } from '../component-main'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = createUploadLink({
  uri: 'http://localhost:1000/graphql',
  credentials: 'same-origin',
})

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: authLink.concat(httpLink),
})
const App = props => {
  Icons()
  return (
    <Root>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Routing />
        </ApolloHooksProvider>
      </ApolloProvider>
    </Root>
  )
}
const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e9ebee;
`
export default App
