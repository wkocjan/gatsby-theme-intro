import React from "react"
import { ProjectType } from "../../types"

const ProjectStatus = ({ status }) => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
    <span
      className={`inline-block w-2 h-2 rounded-full mr-2 ${
        status === "live" ? "bg-green-500" : "bg-orange-500"
      }`}
    ></span>
    Status: {status}
  </li>
)

ProjectStatus.propTypes = {
  status: ProjectType.status,
}

export default ProjectStatus
