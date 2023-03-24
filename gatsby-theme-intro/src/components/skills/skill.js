import React from "react"
import { number, string } from "prop-types"
import SkillSvg from "./skill.svg"

const Skill = ({ skill, i }) => (
  <li
    className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i} dark:border-skill-${i}-dark`}
  >
    <span className="absolute font-header font-semibold text-front dark:text-front-dark text-sm md:text-base px-2 text-center">
      {skill}
    </span>
    <SkillSvg className={`w-full text-skill-${i} dark:text-skill-${i}-dark opacity-75 m-2`} />
  </li>
)

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
