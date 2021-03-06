import React from 'react'
import { Card, Button } from '../../component-ui'
import styled from 'styled-components'
import th from '../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModalError = ({ showModal, handleShowModal, error }) => {
  return (
    <Wrapper showModal={showModal}>
      <Root showModal={showModal}>
        <Card
          borderRadius={'5px 5px 5px 5px'}
          pt={0.5}
          pr={0.5}
          pl={1.5}
          pb={1.5}
          width={26}
          height={7}
        >
          <CloseItem>
            <Button
              iconName={'times'}
              decisionDash
              onClick={handleShowModal}
              color={th.colorGrey}
            />
          </CloseItem>

          <Error>
            <Icon color={th.colorError} icon={'exclamation-triangle'} />
            {error}
          </Error>
        </Card>
      </Root>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  display: ${props => (props.showModal ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`
const Root = styled.div`
  z-index: 5;
  font-size: 1.2em;
  position: fixed;
  display: ${props => (props.showModal ? 'block' : 'none')};
  background-color: ${th.colorWhite};
  border-radius: 5px;
  left: 33%;
  top: ${props => (props.top ? props.top : '35%')};
`
const Error = styled.div`
  display: flex;
  padding-right: 1.5em;
  padding-bottom: 1em;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${th.colorError};
  line-height: normal;
`
const CloseItem = styled.div`
  width: 100;
  display: flex;
  justify-content: flex-end;
`
const Icon = styled(FontAwesomeIcon)`
  padding-right: 0.5em;
  font-size: 2em;
`
export default ModalError
