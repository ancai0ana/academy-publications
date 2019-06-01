import React from 'react'
import styled from 'styled-components'
import { get, last } from 'lodash'
import { queries } from '../qraphqlClient'
import { useQuery } from 'react-apollo-hooks'
import { th, Loader } from '../component-ui'
import {
  ManuscriptDetailsCard,
  ProfessorMakeDecisionCard,
  ProfessorDecisionCard,
} from '../component-manuscript-details'

const ManuscriptDetails = ({ match, ...rest }) => {
  const { submissionId } = match.params
  const { data, loading } = useQuery(queries.getSubmission, {
    variables: { submissionId },
  })

  if (loading) {
    return (
      <Root {...rest}>
        <Loader />
      </Root>
    )
  }

  const manuscript = last(get(data, 'getSubmission', []))
  const professorDecision = get(manuscript, 'professorDecision', null)
  const userRole = get(manuscript, 'userRole', null)

  return (
    <Root {...rest}>
      <Container>
        {manuscript && <ManuscriptDetailsCard manuscript={manuscript} pb={2} />}
        {!professorDecision && userRole === 'professor' && (
          <ProfessorMakeDecisionCard manuscript={manuscript} />
        )}
        {professorDecision && <ProfessorDecisionCard manuscript={manuscript} />}
      </Container>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  font-family: 'Nunito';
  justify-content: center;

  ${th.marginHelper};
  ${th.paddingHelper};
`
const Container = styled.div``

export default ManuscriptDetails
