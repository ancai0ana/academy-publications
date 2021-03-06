import React, { Fragment } from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { th, File, Row, StatusTag, DetailsCard } from '../component-ui'

const ManuscriptDetailsCard = ({ manuscript, ...rest }) => {
  const title = get(manuscript, 'title', '')
  const status = get(manuscript, 'status', '')
  const articleType = get(manuscript, 'articleType', '')
  const version = get(manuscript, 'version', '')
  const abstract = get(manuscript, 'abstract', '')
  const file = get(manuscript, 'file', null)
  const authorComment = get(manuscript, 'author.comment', null)
  const editorName = get(manuscript, 'editor.name', null)
  const role = get(manuscript, 'userRole', null)
  const pages = get(manuscript, 'pages', null)
  const words = get(manuscript, 'words', null)

  return (
    <DetailsCard {...rest}>
      <Row>
        <Title>{title}</Title>
        <StatusTag status={status} />
      </Row>

      <Row>
        <ArticleType>{articleType}</ArticleType>
        <VersionTag>Version {version}</VersionTag>
      </Row>

      <Label>Abstract</Label>
      <Abstract>{abstract}</Abstract>

      {role !== 'user' && editorName && (
        <Fragment>
          <Label>Editor </Label>
          <Abstract>{editorName}</Abstract>
        </Fragment>
      )}

      <Label>File</Label>
      <File file={file} mb={0.8} />

      {authorComment && (
        <Fragment>
          <Label>Author Comment</Label>
          <Abstract>{authorComment}</Abstract>
        </Fragment>
      )}

      {pages && (
        <Row justify="flex-start">
          <Label>Pages: </Label>
          <InfoPage>{pages}</InfoPage>
        </Row>
      )}

      {words && (
        <Row justify="flex-start">
          <Label>Words: </Label>
          <InfoPage>{words}</InfoPage>
        </Row>
      )}
    </DetailsCard>
  )
}

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: ${th.colorBrick};
`
const ArticleType = styled.div`
  padding: 7px 0px;
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: ${th.colorGrey};
  text-overflow: ellipsis;
`
const VersionTag = styled.div`
  color: ${th.colorGrey};
  white-space: nowrap;
`
const Abstract = styled.div`
  font-size: 14px;
  padding: 0px 0px 16px;
`
const Label = styled.div`
  font-size: 17px;
  font-weight: 600;
  padding: 16px 0px 0px;
`
const InfoPage = styled.div`
  font-size: 14px;
  padding: 16px 0px 0px 5px;
`
export default ManuscriptDetailsCard
