import { bool } from "prop-types"
import React from "react"
import { ProfileType } from "../../types"

const Footer = ({ name, showThemeLogo = true }) => (
  <footer className="bg-front mt-16 pt-8 pb-16">
    <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
      <div className="w-2/3 text-back-light font-header text-xs">
        <b>
          &copy; {new Date().getFullYear()} {name}.
        </b>{" "}
        All rights reserved.
      </div>
      <div className="w-1/3 text-right">
        {showThemeLogo && (
          <a
            aria-label="Intro theme"
            className="text-back-light"
            href="https://weeby.studio/intro"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className="fill-current inline-block"
              viewBox="0 0 741 238"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M24.8 50.4c-7.6 0-13.5-2.4-17.8-7.3C2.7 38.2.6 32.4.6 25.8c0-6.5 2.1-12 6.3-16.6C11.1 4.6 17 2.3 24.8 2.3c6.9 0 12.5 2.5 16.8 7.6 3.8 4.6 5.7 10.1 5.7 16.6 0 6.3-2 11.9-6 16.7-4.1 4.8-9.6 7.2-16.5 7.2zM4.2 62h40.2v174.9H4.2V62zm69.6 175.4V132.3c0-22.9 8.2-42.4 24.7-58.6C115 57.5 134.8 49.4 158 49.4c22.7 0 42.1 8.1 58.2 24.4 16.1 16.2 24.1 35.8 24.1 58.6v105h-42.8V131c0-10.7-4.1-19.8-12.4-27.3s-18-11.2-29.2-11.2c-10.7 0-20 3.7-27.8 11-7.8 7.3-11.7 16.3-11.7 26.9v107H73.8zm191-237h39.8V48h27.5v41.7h-27.5v78.8c0 4.3.7 8 2.2 11.2 1.5 3.2 3.9 6.4 7.2 9.7 6.3 6.3 13.7 9.5 22.3 9.5h6.6v38.6h-6.4c-7.1 0-14-1.1-20.8-3.3-8.4-2.7-17.6-7.5-27.7-14.5-6.2-4.3-11.4-10.9-15.9-19.9-4.9-10-7.3-20.1-7.3-30.4V.4zm148.2 237l-44.3-.2V133.9c0-15.8 2.9-29.4 8.6-41 5.8-11.5 15-21.5 27.6-30.1 7.7-5.2 15-9 21.8-11.2 6.8-2.3 14.2-3.4 22.3-3.4 2 0 4.5.1 7.3.4 2.8.2 6.1.7 9.7 1.3v41.9c-3.9-1.1-8-1.7-12.3-1.7-8.2 0-16.1 2.8-23.7 8.3-5.5 3.9-9.7 8.4-12.7 13.5-2.9 5.1-4.4 10.9-4.4 17.5v108h.1zm163.4 0c-29 0-52.1-9.6-69.1-28.7-15.3-17.2-23-38.4-23-63.5 0-25.4 7.8-47 23.4-64.7 17.5-19.8 41.1-29.6 70.8-29.6 29 0 52.1 9.6 69.1 28.7 15.3 17.2 23 38.4 23 63.5 0 25.4-7.8 47-23.4 64.7-17.6 19.7-41.2 29.6-70.8 29.6zm4-148c-17.2 0-30.9 5.7-41 17.1-9.2 10.3-13.7 22.9-13.7 37.7 0 14.4 4.3 26.5 13 36.3 9.8 10.9 23 16.4 39.8 16.4 17.2 0 30.9-5.7 41-17.1 9.2-10.3 13.7-22.9 13.7-37.7 0-14.4-4.3-26.5-13-36.3-9.8-10.9-23.1-16.4-39.8-16.4z"
                  className="text"
                />
                <circle
                  className="text-lead fill-current"
                  cx="713"
                  cy="209"
                  r="28"
                />
              </g>
            </svg>
          </a>
        )}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  name: ProfileType.name,
  showThemeLogo: bool,
}

export default Footer
