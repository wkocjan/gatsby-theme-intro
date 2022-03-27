import React from "react"
import { FaCompass, FaGithub } from "react-icons/fa"
import { ProjectType } from "../../types"

const ProjectIcon = ({ icon }) => {
  const icons = {
    github: FaGithub,
    website: FaCompass,
  }

  const Icon = icons[icon]

  return Icon ? ChosenIcon(Icon) : WebsiteIcon
}

const ChosenIcon = ( Icon ) => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    <Icon className="w-6 h-6" />
  </span>
)

const WebsiteIcon = () => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    <FaCompass className="w-6 h-6" />
  </span>
)

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
}

export default ProjectIcon
