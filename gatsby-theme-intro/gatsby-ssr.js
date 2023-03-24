const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setBodyAttributes }, pluginOptions) => {

  // NB: We cannot use GraphQL queries here; the *arguments* to
  //     gatsby-theme-intro/gatsby-config.js (via pluginOptions) are the
  //     only data we can get. Only one language option can be passed this way.
  //     One possibility for supporting multilingual sites would be include
  //     the language code in the path, and retrieve it with the `pathname` argument.
  if (pluginOptions.lang != null) {  // Test should be False when lang is either null or undefined
    setBodyAttributes({ lang: `${pluginOptions.lang}`})
  }
}

