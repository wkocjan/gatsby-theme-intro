module.exports = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type WorkHistoryYaml implements Node {
      id: ID!
      company: String!
      period: String
      position: String
      url: String
    }

    type ProjectsYaml implements Node {
      id: ID!
      description: String
      icon: String
      image: File @fileByRelativePath
      name: String!
      status: String
      tags: [String]
      url: String
    }
  `

  createTypes(typeDefs)
}