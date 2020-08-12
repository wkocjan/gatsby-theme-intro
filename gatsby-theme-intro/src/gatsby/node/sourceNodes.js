module.exports = ({ actions }) => {
  actions.createTypes(`
    type WorkHistoryYaml implements Node @dontInfer {
      id: ID!
      company: String!
      period: String
      position: String
      url: String
    }

    type ProjectsYaml implements Node @dontInfer {
      id: ID!
      description: String
      icon: String
      image: File @fileByRelativePath
      name: String!
      status: String
      tags: [String]
      url: String
    }
  `)
}
