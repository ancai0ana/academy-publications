import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import uuid from 'random-uuid-v4'
import { th, InputForm, Button, Row } from '../component-ui'
import { LoginValidation } from '../component-authentification'
import { withRouter } from 'react-router-dom'

const handleLogin = history => values => {
  const token = uuid()
  const isToken = localStorage.getItem('authToken')
  if (!isToken) {
    localStorage.setItem('authToken', JSON.stringify(token))
    localStorage.setItem('user', JSON.stringify(values))
    history.push('/dashboard')
    window.location.reload()
  }
}
const Login = ({ handleChangePage, history }) => {
  const initialValues = { email: '', password: '' }
  console.log(history)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginValidation}
      onSubmit={handleLogin(history)}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
        return (
          <Root>
            <Title>Login</Title>
            <InputForm
              label="Email"
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              mt={2}
              mb={1}
            />
            <InputForm
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              mt={1}
              mb={1}
            />
            <Row mt={4}>
              <Button
                name="Sign Up"
                iconName={'user-plus'}
                onClick={handleChangePage}
              />
              <Button
                name="Login"
                type="submit"
                iconName={'sign-in-alt'}
                onClick={handleSubmit}
              />
            </Row>
          </Root>
        )
      }}
    </Formik>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  color: ${th.colorPrimary};
`
const Title = styled.p`
  margin: 0.5em 0em;
  font-size: 1.5em;
  font-weight: 700;
`
export default withRouter(Login)
