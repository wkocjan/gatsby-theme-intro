import { graphql } from "gatsby"
import { string, oneOf } from "prop-types"

export const SocialType = {
  name: oneOf([
    "behance",
    "dribbble",
    "facebook",
    "github",
    "goodreads",
    "instagram",
    "linkedin",
    "medium",
    "producthunt",
    "twitter",
    "youtube",
    "xing",
  ]),
  url: string,
}

export const query = graphql`
  fragment SocialFragment on SocialYaml {
    name
    url
  }
`
