import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { th, Loader } from '../../component-ui'
import {
  EditorMakeDecisionCard,
  EditorDecisionCard,
} from '../../component-manuscript-details'

const FinalDecisionTab = ({
  submission,
  totalManuscripts,
  currentManuscript,
  setCurrentManuscript,
  ...rest
}) => {
  const manuscript = submission[currentManuscript - 1]
  const editorDecision = get(manuscript, 'editor.decision', null)
  const userRole = get(manuscript, 'userRole', null)

  return (
    <Root {...rest}>
      <Wrapper>
        <Column />
        {!manuscript ? (
          <RootLoader {...rest}>
            <Loader iconSize={2} />
          </RootLoader>
        ) : (
          <Container>
            {!editorDecision && userRole === 'professor' && (
              <EditorMakeDecisionCard manuscript={manuscript} mb={2} />
            )}
            {editorDecision && (
              <EditorDecisionCard manuscript={manuscript} mb={2} />
            )}
          </Container>
        )}
        <Column />
      </Wrapper>
    </Root>
  )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`

const Root = styled.div`
  overflow: scroll;
  height: calc(100vh - 104px);
  font-family: 'Nunito';

  ${th.marginHelper};
  ${th.paddingHelper};
`
const Container = styled.div``
const Column = styled.div``

const RootLoader = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Nunito';
  ${th.marginHelper};
  ${th.paddingHelper};
`
export default FinalDecisionTab
