import gql from 'graphql-tag'

const queries = {
  getLoggedInUser: gql`
    query loggedInUser {
      loggedInUser {
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
  `,
  getUsers: gql`
    query users {
      users {
        _id
        firstName
        lastName
        email
        country
        city
        university
        specialization
        role
      }
    }
  `,
  getManuscripts: gql`
    query manuscripts {
      manuscripts {
        _id
        title
        created
        status
        version
        abstract
        articleType
        submissionId
        author {
          id
          name
          comment
        }
        editor {
          id
          name
          decision
          comment
        }
      }
    }
  `,
  getReviewedManuscripts: gql`
    query reviewedManuscripts {
      reviewedManuscripts {
        _id
        title
        created
        status
        version
        abstract
        articleType
        submissionId
        editor {
          id
          name
          decision
          comment
        }
      }
    }
  `,
  getManuscript: gql`
    query manuscript($_id: ID!) {
      manuscript(_id: $_id) {
        _id
        title
        created
        status
        version
        userRole
        abstract
        articleType
        submissionId
        author {
          id
          comment
        }
        editor {
          id
          name
          decision
          comment
        }
        file {
          name
          size
          providerKey
        }
      }
    }
  `,
  getPublicManuscripts: gql`
    query publicManuscripts {
      publicManuscripts {
        _id
        title
        created
        status
        version
        abstract
        articleType
        submissionId
        file {
          name
          size
          providerKey
        }
        author {
          name
        }
        editor {
          id
          name
          decision
          comment
        }
      }
    }
  `,
  getLastVersionManuscripts: gql`
    query lastVersionManuscripts {
      lastVersionManuscripts {
        _id
        words
        pages
        title
        status
        public
        created
        version
        userRole
        abstract
        articleType
        submissionId
        author {
          id
          comment
        }
        editor {
          id
          name
          decision
          comment
        }
        file {
          name
          size
          providerKey
        }
      }
    }
  `,
  getSubmission: gql`
    query getSubmission($submissionId: ID!) {
      getSubmission(submissionId: $submissionId) {
        _id
        words
        pages
        title
        status
        public
        created
        version
        userRole
        abstract
        articleType
        submissionId
        author {
          id
          comment
        }
        editor {
          id
          name
          decision
          comment
        }
        file {
          name
          size
          providerKey
        }
      }
    }
  `,
  getSignedUrl: gql`
    query signedUrl($providerKey: String) {
      signedUrl(providerKey: $providerKey)
    }
  `,
  getUserManuscripts: gql`
    query userManuscripts {
      userManuscripts {
        _id
        title
        status
        version
        created
        abstract
        submissionId
        articleType
      }
    }
  `,
  getUnassignedManuscripts: gql`
    query unassignedManuscripts {
      unassignedManuscripts {
        _id
        title
        status
        version
        created
        abstract
        articleType
      }
    }
  `,
  getAssignedManuscripts: gql`
    query assignedManuscripts {
      assignedManuscripts {
        _id
        title
        status
        version
        created
        abstract
        articleType
        submissionId
        editor {
          id
          name
        }
      }
    }
  `,
  getEditorCommentsPerPage: gql`
    query editorCommentsPerPage($manuscriptId: ID!, $page: Int) {
      editorCommentsPerPage(manuscriptId: $manuscriptId, page: $page) {
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
  `,
  getManuscriptComments: gql`
    query manuscriptComments($manuscriptId: ID!) {
      manuscriptComments(manuscriptId: $manuscriptId) {
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
  `,
  getEditorComments: gql`
    query editorComments($manuscriptId: ID!) {
      editorComments(manuscriptId: $manuscriptId) {
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
  `,
  getBotComments: gql`
    query botComments($manuscriptId: ID!) {
      botComments(manuscriptId: $manuscriptId) {
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
  `,
}

export default queries
