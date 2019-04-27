import React from 'react'

import styled from 'styled-components'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { ReviewManuscripts } from '../component-review'

import { SideMenu } from '../component-ui'

const ReviewPage = ({ history }) => {
  return (
    <Root>
      <SideMenu history={history} pt={6} />
      <ReviewManuscripts pt={6} />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 18% 82%;
`

export default compose(withRouter)(ReviewPage)
