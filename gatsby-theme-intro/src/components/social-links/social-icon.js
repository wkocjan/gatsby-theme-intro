import React from "react"
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaGoodreadsG,
  FaMediumM,
  FaInstagram,
  FaLinkedinIn,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
  FaXing,
} from "react-icons/fa"
import { SocialType } from "../../types"

const SocialIcon = ({ name, ...params }) => {
  const icons = {
    behance: FaBehance,
    dribbble: FaDribbble,
    facebook: FaFacebook,
    github: FaGithub,
    goodreads: FaGoodreadsG,
    medium: FaMediumM,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    producthunt: FaProductHunt,
    twitter: FaTwitter,
    youtube: FaYoutube,
    xing: FaXing,
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
  name: SocialType.name,
}

export default SocialIcon
