const fs = require("fs")

// Make sure the content directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  let contentPath = options.contentPath || "content/"

  if (!contentPath.endsWith("/")) {
    contentPath += "/"
  }

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory with sample data`)
    fs.mkdirSync(contentPath)
    fs.mkdirSync(`${contentPath}images`)

    const filesToCopy = [
      "profile.yaml",
      "projects.yaml",
      "social.yaml",
      "work-history.yaml",
      "images/profile.jpg",
      "images/project.jpg",
    ]

    filesToCopy.forEach(file =>
      fs.copyFileSync(`${__dirname}/content/${file}`, `${contentPath}${file}`)
    )
  }
}

// Define content types
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type WorkHistoryYaml implements Node @dontInfer {
      id: ID!
      company: String!
      period: String
      position: String
      url: String
    }
  `)
}

// Query for events and create pages
exports.createPages = async ({ actions }, options) => {
  const basePath = options.basePath || "/"

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/index.js"),
  })
}
