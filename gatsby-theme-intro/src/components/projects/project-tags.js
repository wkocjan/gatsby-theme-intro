import React from "react"
import { ProjectType } from "../../types"

const ProjectTags = ({ tags }) => (
  <>
    {tags.map(tag => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"
        key={tag}
      >
        {tag}
      </li>
    ))}
  </>
)

ProjectTags.propTypes = {
  tags: ProjectType.tags,
}

export default ProjectTags
