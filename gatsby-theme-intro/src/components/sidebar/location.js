import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ProfileType } from "../../types"

const Location = ({ location, relocation }) => (
  <>
    <div className="inline-flex items-center bg-front dark:bg-front-dark mt-6 w-auto">
      <span className="text-lead dark:text-lead-dark border-r-2 border-back dark:border-back-dark px-3">
        <FaMapMarkerAlt className="h-4 w-4" />
      </span>
      <span className="text-back dark:text-back-dark font-header font-bold py-1 px-3 text-lg">
        {location}
      </span>
    </div>
    {relocation && (
      <div className="text-xs uppercase mt-2 font-semibold text-front dark:text-front-dark font-header">
        Available for relocation
      </div>
    )}
  </>
)

Location.propTypes = {
  location: ProfileType.location,
  relocation: ProfileType.relocation,
}

export default Location
