import React, { useState } from 'react'
import { compose } from 'recompose'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'
import { get } from 'lodash'
import { useMutation } from 'react-apollo-hooks'

import {
  th,
  Row,
  Button,
  InputForm,
  InputSelect,
  InputTextarea,
} from '../component-ui'
import { mutations, queries } from '../qraphqlClient'
import { submissionValidation, UploadFile } from '../component-submission'
import { createRevision } from '../qraphqlClient/mutations'

const useCreateRevision = () => {
  const useCreateRevisionMutation = useMutation(createRevision)
  const onCreateRevision = (input, file, history, manuscript) => {
    if (file) {
      useCreateRevisionMutation({
        variables: {
          oldManuscript: {
            submissionId: manuscript.submissionId,
            version: manuscript.version,
          },
          input: { file, ...input },
        },
        refetchQueries: [
          {
            query: queries.getSubmission,
            variables: { submissionId: manuscript.submissionId },
          },
          {
            query: queries.getUserManuscripts,
          },
        ],
      })
    }
  }
  return { onCreateRevision }
}

const RevisionManuscriptCard = ({
  updateManuscript,
  history,
  match,
  manuscript,
  ...rest
}) => {
  const { onCreateRevision } = useCreateRevision()

  const initialValues = {
    title: get(manuscript, 'title', ''),
    articleType: get(manuscript, 'articleType', ''),
    abstract: get(manuscript, 'abstract', ''),
    author: { comment: '' },
  }

  const [file, setFile] = useState(get(manuscript, 'file', null))

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={submissionValidation}
      onSubmit={input => onCreateRevision(input, file, history, manuscript)}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
        return (
          <Root {...rest}>
            <Card pt={2} pr={2} pl={2} pb={2}>
              <Title>Revision</Title>
              <Row mt={1.5} justify={'flex-start'}>
                <InputForm
                  label="Manuscript Title"
                  name="title"
                  type="text"
                  required
                  widthInput={21}
                  value={values.title}
                  onChange={handleChange}
                  error={errors.title}
                />
                <InputSelect
                  pl={2}
                  label="Manuscript Type"
                  name="articleType"
                  type="text"
                  options={['Research article', 'Review article']}
                  widthInput={14}
                  width={14}
                  required
                  value={values.articleType}
                  onChange={handleChange}
                  error={errors.articleType}
                />
              </Row>

              <InputTextarea
                label="Abstract"
                name="abstract"
                type="textarea"
                width={14}
                heightinput={7}
                mt={1}
                required
                value={values.abstract}
                onChange={handleChange}
                error={errors.abstract}
              />
              <InputTextarea
                label="Comment (optional)"
                name="author.comment"
                type="textarea"
                heightinput={5}
                width={5}
                mt={1}
                value={values.author.comment}
                onChange={handleChange}
                error={errors.userComment}
              />

              <Row mt={1.2}>
                <UploadFile match={match} setFile={setFile} file={file} />
              </Row>

              <Row mt={1} mr={20} mb={0.5} justify="flex-end">
                <Button
                  underline
                  name="Revision"
                  type="submit"
                  fontSize={1.2}
                  color={th.colorBlueLight}
                  iconName={'arrow-right'}
                  onClick={handleSubmit}
                />
              </Row>
            </Card>
          </Root>
        )
      }}
    </Formik>
  )
}

export default compose(
  mutations,
  withRouter,
)(RevisionManuscriptCard)

const Card = styled.div`
  background-color: white;
  font-family: 'Nunito';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px')};
  height: fit-content;
  width: 40px;
  width: 50em;
  ${th.marginHelper}
  ${th.paddingHelper}
`
const Root = styled.div`
  display: flex;
  font-family: 'Nunito';
  justify-content: center;

  ${th.marginHelper};
  ${th.paddingHelper};
`
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${th.colorBlueLight};
`
