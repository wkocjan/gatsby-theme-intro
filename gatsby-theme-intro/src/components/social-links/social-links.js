import React from "react"
import SocialIcon from "./social-icon"
import { SocialType, arrayOf, shape } from "../../types"

const SocialLinks = ({ social }) => {
  return (
    <div className="pl-3">
      {social.map(({ name, url }, i) => {
        const colorsClass =
          i % 2 === 0 ? "bg-front text-back-light" : "bg-back-light text-front"
        return (
          <a
            aria-label={name}
            className={`inline-flex w-12 h-12 justify-center items-center rounded-full -ml-3 ${colorsClass} hover:shadow-lg transition-shadow duration-150`}
            href={url}
            key={name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon name={name} className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}

SocialLinks.propTypes = {
  social: arrayOf(shape(SocialType)),
}

export default SocialLinks
