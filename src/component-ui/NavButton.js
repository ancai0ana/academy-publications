import React from 'react'
import styled, { css } from 'styled-components'
import { get } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import th from './theme'

const NavButton = ({
  name,
  iconName,
  iconLeft,
  type = 'button',
  onClick,
  ...props
}) => {
  return (
    <Root {...props} type={type} onClick={onClick}>
      {iconLeft && iconName && <IconLeft icon={iconName} color="inherit" />}
      <Title {...props}>{name}</Title>
      {!iconLeft && iconName && <IconRight icon={iconName} color="inherit" />}
    </Root>
  )
}

const helper = props => {
  if (get(props, 'sideMenu')) {
    return css`
      transition: all 0.4s ease 0s;
      width: 100%;
      display: flex;
      font-size: 0.9em;
      justify-content: flex-start;
      color: ${th.colorWhite};
      padding: 0.3em;
      &.hover {
        color: ${th.colorCremLight};
        border: none;
      }
      &.active {
        color: ${th.colorCremLight};
        border: none;
      }
    `
  }

  return css`
    color: ${props => (get(props, 'color') ? props.color : th.colorDark)};
  `
}
const Root = styled(NavLink)`
  background-color: transparent;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  &.focus {
    outline: none;
  }
  font-size: ${props =>
    get(props, 'fontSize') ? `${props.fontSize}em` : `1em`};
  font-weight: ${props =>
    get(props, 'fontWeight') ? props.fontWeight : 'normal'};
  ${th.marginHelper}
  ${th.paddingHelper}
  ${helper};
`

const Title = styled.p`
  color: inherit;
  margin: 0em;
  font-size: ${props => get(props, 'fontSize')};
`
const IconRight = styled(FontAwesomeIcon)`
  margin: 0em 0em 0em 0.5em;
`
const IconLeft = styled(FontAwesomeIcon)`
  margin: 0em 0.5em 0em 0em;
`

export default NavButton
