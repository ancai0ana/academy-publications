import React from 'react'
import styled from 'styled-components'
import th from './theme'

const parseStatus = status => status.charAt(0).toUpperCase() + status.slice(1)
const StatusTag = ({ status }) => <Status>{renameStatusTag(status)}</Status>

const renameStatusTag = status => {
  switch (status) {
    case 'publish':
      return 'Published'
    case 'reject':
      return 'Rejected'
    default:
      return parseStatus(status)
  }
}
const Status = styled.div`
  background-color: ${th.colorWhite};
  padding: 2px 3px;
  border-radius: 4px;
  border: 1px solid ${th.colorBlueLight};
  font-size: 15px;
  color: ${th.colorBlueLight};
  white-space: nowrap;
`
export default StatusTag
