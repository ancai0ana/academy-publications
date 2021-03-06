import React from 'react'
import styled from 'styled-components'

import th from './theme'
import { Row } from '../component-ui'

const InputFile = ({
  label,
  value,
  name,
  onChange,
  required,
  validate,
  error = null,
  widthInput = null,
  ...props
}) => (
  <Root {...props}>
    <Label labelName={label} required={required} />
    <File
      name={name}
      type="file"
      accept=".pdf,.doc,.docx,.txt"
      widthinput={widthInput}
      onChange={onChange}
      validate={validate}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Root>
)

const Label = ({ labelName, required }) => (
  <Row justify={'flex-start'}>
    <StyledLabel>{labelName}</StyledLabel>
    {required && <Error>*</Error>}
  </Row>
)

const Root = styled.div`
  position: relative;
  ${th.marginHelper}
  ${th.paddingHelper}
`
const StyledLabel = styled.label`
  margin: 0;
`
const File = styled.input`
  width: 100%;

  padding: 0em 0em;
  display: inline-block;
  box-sizing: border-box;
  outline: none;
`

const Error = styled.div`
  color: ${th.colorError};
  font-size: 0.8em;
`
const ErrorMessage = styled.div`
  position: absolute;
  color: ${th.colorError};
  font-size: 0.8em;
`
export default InputFile
