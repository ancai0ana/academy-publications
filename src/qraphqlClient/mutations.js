import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const signUp = gql`
  mutation signUp($input: UserInput!) {
    signUp(input: $input) {
      token
    }
  }
`
const login = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
const deleteUser = gql`
  mutation deleteUser($id: String!) {
    deleteUser(_id: $id)
  }
`
const editUser = gql`
  mutation editUser($input: UserEditInput!) {
    editUser(input: $input) {
      _id
      firstName
    }
  }
`

const editProfile = gql`
  mutation editProfile($input: EditProfileInput!) {
    editProfile(input: $input) {
      _id
      firstName
      lastName
      email
      role
      country
      city
      university
      password
      specialization
    }
  }
`
export const createManuscript = gql`
  mutation createManuscript($input: ManuscriptInput) {
    createManuscript(input: $input) {
      _id
      submissionId
    }
  }
`

export const createRevision = gql`
  mutation createRevision(
    $oldManuscript: OldManuscript
    $input: ManuscriptInput
  ) {
    createRevision(oldManuscript: $oldManuscript, input: $input) {
      _id
    }
  }
`

export const updateManuscript = gql`
  mutation updateManuscript($id: String!, $input: ManuscriptInput) {
    updateManuscript(_id: $id, input: $input) {
      _id
      submissionId
    }
  }
`
export const addProfessorDecision = gql`
  mutation addProfessorDecision($manuscriptId: String!, $input: EditorInput) {
    addProfessorDecision(manuscriptId: $manuscriptId, input: $input) {
      editor {
        decision
        comment
      }
    }
  }
`

const addEditorOnManuscript = gql`
  mutation addEditorOnManuscript($id: String!) {
    addEditorOnManuscript(_id: $id) {
      editor {
        id
        name
      }
    }
  }
`

const removeEditorFromManuscript = gql`
  mutation removeEditorFromManuscript($id: String!) {
    removeEditorFromManuscript(_id: $id) {
      editor {
        id
        name
      }
    }
  }
`
const deleteManuscript = gql`
  mutation deleteManuscript($submissionId: String!) {
    deleteManuscript(submissionId: $submissionId)
  }
`

export const uploadFile = gql`
  mutation uploadFile(
    $file: Upload!
    $type: String
    $size: Int
    $manuscriptId: String
  ) {
    uploadFile(
      file: $file
      type: $type
      size: $size
      manuscriptId: $manuscriptId
    ) {
      providerKey
      name
      size
    }
  }
`
export const createComment = gql`
  mutation createComment($input: CreateCommentInput) {
    createComment(input: $input) {
      _id
      manuscriptId
      page
      created
      text
      userId
      role
      reply {
        _id
        text
        userId
        role
        created
      }
    }
  }
`
export const addReply = gql`
  mutation addReply($input: CreateReplyInput) {
    addReply(input: $input) {
      _id
      manuscriptId
      page
      created
      text
      userId
      role
      reply {
        _id
        text
        userId
        role
        created
      }
    }
  }
`

export default compose(
  graphql(signUp, { name: 'signUp' }),
  graphql(login, { name: 'login' }),
  graphql(uploadFile, { name: 'uploadFile' }),
  graphql(updateManuscript, { name: 'updateManuscript' }),
  graphql(deleteUser, { name: 'deleteUser' }),
  graphql(editUser, { name: 'editUser' }),
  graphql(editProfile, { name: 'editProfile' }),
  graphql(createManuscript, { name: 'createManuscript' }),
  graphql(deleteManuscript, { name: 'deleteManuscript' }),
  graphql(addProfessorDecision, { name: 'addProfessorDecision' }),
  graphql(addEditorOnManuscript, { name: 'addEditorOnManuscript' }),
  graphql(removeEditorFromManuscript, { name: 'removeEditorFromManuscript' }),
  graphql(createComment, { name: 'createComment' }),
  graphql(addReply, { name: 'addReply' }),
)
