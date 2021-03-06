const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date
  scalar Upload
  type Query {
    manuscript(_id: ID!): Manuscript!
    manuscripts: [Manuscript]
    reviewedManuscripts: [Manuscript]
    publicManuscripts: [Manuscript]
    userManuscripts: [Manuscript]
    getSubmission(submissionId: ID!): [Submission]
    unassignedManuscripts: [Manuscript]
    assignedManuscripts: [Manuscript]
    lastVersionManuscripts: [Manuscript]
  }

  type Author {
    id: String
    name: String
    comment: String
  }

  input AuthorInput {
    comment: String
  }

  type Editor {
    id: String
    name: String
    decision: String
    comment: String
  }

  input EditorInput {
    decision: String
    comment: String
  }

  type Manuscript {
    _id: String!
    title: String
    created: Date
    public: Boolean
    abstract: String
    status: String
    version: Int
    userRole: String
    articleType: String!
    submissionId: String!
    editor: Editor
    author: Author
    file: File
    pages: Int
    words: Int
  }

  type Submission {
    _id: String!
    title: String
    created: Date
    public: Boolean
    abstract: String
    status: String
    version: Int
    userRole: String
    articleType: String!
    submissionId: String!
    editor: Editor
    author: Author
    file: File
    pages: Int
    words: Int
  }

  input FileInput {
    providerKey: String
    name: String
    size: Int
  }

  input ManuscriptInput {
    title: String
    public: Boolean
    abstract: String
    articleType: String
    file: FileInput
    author: AuthorInput
  }

  input EditorInputOldManuscript {
    id: String
    name: String
  }

  input OldManuscript {
    version: Int
    public: Boolean
    submissionId: String!
    editor: EditorInputOldManuscript
  }

  type Mutation {
    createManuscript(input: ManuscriptInput): Manuscript
    createRevision(
      oldManuscript: OldManuscript
      input: ManuscriptInput
    ): Manuscript
    addEditorOnManuscript(_id: String!): Manuscript
    updateManuscript(_id: String, input: ManuscriptInput): Manuscript
    removeEditorFromManuscript(_id: String!): Manuscript
    deleteManuscript(submissionId: String!): Boolean
    addProfessorDecision(manuscriptId: String, input: EditorInput): Manuscript
  }
`
