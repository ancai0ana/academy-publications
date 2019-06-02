const { gql } = require('apollo-server-express')

module.exports = gql`
  scalar Date
  scalar Upload
  type Query {
    manuscript(_id: ID!): Manuscript!
    manuscripts: [Manuscript]
    getSubmission(submissionId: ID!): [Submission]
    unassignedManuscripts: [Manuscript]
    userManuscripts: [Manuscript]
    assignedManuscripts: [Manuscript]
  }
  type Manuscript {
    _id: String!
    title: String
    userId: String!
    created: Date
    abstract: String
    status: String
    version: Int
    userComment: String
    professorId: String
    articleType: String!
    submissionId: String!
    professorName: String
    professorComment: String
    professorDecision: String
    file: File
  }

  type Submission {
    _id: String!
    title: String
    userId: String!
    created: Date
    abstract: String
    status: String
    version: Int
    userRole: String
    userComment: String
    professorId: String
    articleType: String!
    submissionId: String!
    professorName: String
    professorComment: String
    professorDecision: String
    file: File
  }

  input FileInput {
    providerKey: String
    name: String
    size: Int
  }
  input ManuscriptInput {
    title: String
    abstract: String
    articleType: String
    userComment: String
    file: FileInput
  }

  input ProfessorDecision {
    professorDecision: String
    professorComment: String
  }

  input OldManuscript {
    version: Int
    submissionId: String!
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
    deleteManuscript(_id: String!): Manuscript
    addProfessorDecision(
      manuscriptId: String
      input: ProfessorDecision
    ): Manuscript
  }
`
