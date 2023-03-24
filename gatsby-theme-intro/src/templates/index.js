import * as React from "react"
import { graphql } from "gatsby"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

const IndexPage = ({ data, pageContext }) => {
  const { history, profile, projects, site, social } = data

  return (
    <div className="antialiased bg-back dark:bg-back-dark leading-normal font-text text-front dark:text-front-dark">
      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
          formspreeEndpoint={site.siteMetadata.formspreeEndpoint}
        />
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={pageContext.showThemeLogo}
      />
    </div>
  )
}

export const Head = ({ data }) => {
  const { history, profile, projects, site, social, papers } = data

  return (
    <>
      <SEO title="Home" />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        formspreeEndpoint
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`
