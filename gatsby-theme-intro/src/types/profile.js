import { graphql } from "gatsby"
import { arrayOf, bool, number, shape, string, object } from "prop-types"

export const ProfileType = {
  about: string.isRequired,
  budget: shape({
    currency: string.isRequired,
    default: number.isRequired,
    max: number.isRequired,
    min: number.isRequired,
  }).isRequired,
  company: string.isRequired,
  focus: string.isRequired,
  focus_url: string,
  for_hire: bool.isRequired,
  image: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
  initials: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  profession: string.isRequired,
  relocation: bool.isRequired,
  skills: arrayOf(string).isRequired,
  tools: arrayOf(string).isRequired,
}

export const query = graphql`
  fragment ProfileFragment on ProfileYaml {
    about
    budget {
      currency
      default
      max
      min
    }
    company
    focus
    focus_url
    for_hire
    image {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 144, height: 144, quality: 85)
      }
      publicURL
    }
    initials
    location
    name
    profession
    relocation
    skills
    tools
  }
`
