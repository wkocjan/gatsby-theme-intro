import React from "react"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"

const StructuredData = ({ profile, social }) => {
  const schema = {
    "@context": "http://schema.org/",
    "@type": "Person",
    name: profile.name,
    image: profile.image?.publicURL,
    jobTitle: profile.profession,
    sameAs: social.map((item) => item.url),
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
  }

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  )
}

StructuredData.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default StructuredData
