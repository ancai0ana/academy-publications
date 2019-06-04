import React from 'react'
import { Card, th } from '../component-ui'
import styled from 'styled-components'
import { compose } from 'recompose'
import { mutations } from '../qraphqlClient'

const DashboardCard = ({ manuscript, history }) => {
  const { _id, title, articleType, abstract } = manuscript

  const handleReview = () => {
    history.push(`/publicManuscripts/${_id}`)
  }

  return (
    <StyledCard mt={0.5} mb={0.5} pt={1} pr={0.5} pl={0.5} pb={1}>
      <ButtonCard onClick={handleReview}>
        <Content>
          <Border>
            <Title>{title}</Title>
            <ArticleType>{articleType}</ArticleType>
            <Abstract>{abstract}</Abstract>
          </Border>
        </Content>
      </ButtonCard>
    </StyledCard>
  )
}
const StyledCard = styled(Card)`
  position: relative;
  border-radius: 5px;
  font-family: 'Nunito';
  padding: 1em 0.5em;
`

const Content = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
`
const Border = styled.div`
  height: 100%;
  width: 100%;
  border-style: solid;
  border-color: ${th.colorCremLight};
  border-width: 1px;
  border-radius: 5px 5px 5px 5px;
  padding: 1em;
`
const Title = styled.div`
  font-size: 1.3em;
  width: 100%;
  color: ${th.colorBlue};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const ArticleType = styled.div`
  font-size: 0.9em;
  padding-bottom: 0.7em;
`
const ButtonCard = styled.button`
  height: 100%;
  width: 100%;
  text-align: initial;
  background-color: transparent;
  border: none;
  text-decoration: none;
  :focus {
    outline: none;
  }
`
const Abstract = styled.div`
  font-size: 0.8em;
  width: 100%;
  overflow: hidden;
`

export default compose(mutations)(DashboardCard)