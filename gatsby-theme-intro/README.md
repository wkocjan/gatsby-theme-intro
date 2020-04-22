# Intro - Personal branding theme for developers

Intro is an open source [Gatsby JS](https://www.gatsbyjs.org/) theme built specially for developers.

Tell your story by showing your skills, projects and career path.

## Preview

[![Intro Theme](https://github.com/wkocjan/gatsby-theme-intro/blob/intro.png?raw=true)](https://www.youtube.com/watch?v=03rKddYHazo)

### Live Demo

Live demo is available at:
https://weeby.studio/intro/preview

## Features

- Show your skills, tools, projects & career path
- 10 predefined color versions
- Contact form integrated with [Formspree](https://formspree.io/)
- Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
- Uses utility-first [TailwindCSS](https://tailwindcss.com/) framework
- Responsive design (desktop / mobile)

## 🚀 Getting Started

### Install theme & dependencies

```shell
mkdir my-site
cd my-site
yarn init
yarn add gatsby react react-dom gatsby-theme-intro
```

### Enable theme

Then add the theme to your `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-intro",
      options: {},
    },
  ],
}
```

### Run your site

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```

This process will create `content/` directory within your site with a sample data.

### Edit content

You can change the website's content by editing `.yaml` files in `content/` directory:

#### `profile.yaml`

Follow existing convention to provide your profile information, skills & tools.

Do not remove existing parameters from the file, as it may break the website.

#### `projects.yaml`

For each project you can provide:

| Parameter   | Value                          | Is required? |
| ----------- | ------------------------------ | ------------ |
| name        | Name of the project            | yes          |
| url         | URL of the project             | no           |
| description | Project's description          | no           |
| status      | Either `in progress` or `live` | no           |
| tags        | List of tags                   | no           |
| icon        | Either `github` or `website`   | no           |
| image       | Path to the image              | no           |

#### `work-history.yaml`

For each entry you can provide:

| Parameter | Value                        | Is required? |
| --------- | ---------------------------- | ------------ |
| company   | Name of the company          | yes          |
| period    | Start / End date             | no           |
| position  | Your position at the company | no           |

#### `social.yaml`

List of your social media account. Please just fill the url parameter or leave it empty.

Do not add custom items to the list.

### Enable email notifications

Contact form is integrated with [Formspree](https://formspree.io/). Any form submissions will be sent to your e-mail (set in `profile.yaml`).

You need to confirm your e-mail - to do it, please just send any message using the contact form. Shortly after doing it, you'll receive message from Formspree with an activation link.

## Configuration

Here is the list of configuration options you can set in `gatsby-config.js`:

```javascript
module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    title: "John Doe",
  },
  plugins: [
    {
      resolve: "gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
```

After modyfying `gatsby-config.js` it may be required to restart `gatsby develop` process.

- The `siteMetadata` section is responsible for SEO settings.
- By modifying `basePath` parameter you can run the website on different URL (e.g. `https://mydomain.com/profile`). It may be useful when integrating with existing Gatsby site
- By setting `showThemeLogo` to `false` you can hide the Intro logo in the footer area
- Change the `theme` parameter to load different color variant. Please refer to the list below for available values.

### Available color variants

| Name                | Preview                                                           |
| ------------------- | ----------------------------------------------------------------- |
| `blue`              | [click here](https://weeby.studio/intro/themes/blue.jpg)          |
| `bright-green`      | [click here](https://weeby.studio/intro/themes/bright-green.jpg)  |
| `bright-orange`     | [click here](https://weeby.studio/intro/themes/bright-orange.jpg) |
| `bright-red`        | [click here](https://weeby.studio/intro/themes/bright-red.jpg)    |
| `classic` (default) | [click here](https://weeby.studio/intro/themes/classic.jpg)       |
| `dark-blue`         | [click here](https://weeby.studio/intro/themes/dark-blue.jpg)     |
| `dark-green`        | [click here](https://weeby.studio/intro/themes/dark-green.jpg)    |
| `dark-pink`         | [click here](https://weeby.studio/intro/themes/dark-pink.jpg)     |
| `gh-inspired`       | [click here](https://weeby.studio/intro/themes/gh-inspired.jpg)   |
| `warm-red`          | [click here](https://weeby.studio/intro/themes/warm-red.jpg)      |

## Customization

### Component shadowing

You can use Gatsby component shadowing concept to customize the theme.

- All components are located in `src/components` directory.
- All parameters accepted by components are defined using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html). You can find types definitions in one centeral `src/types` location.

Please refer to [the official documentation](https://www.gatsbyjs.org/docs/themes/shadowing/) to learn more.

### Custom color variant

As `theme` parameter in theme configuration (`gatsby-config.js`) you can pass either the name of the existing theme or an object of colors.

Example:

```javascript
module.exports = {
  (...)
  plugins: [
    {
      resolve: "gatsby-theme-intro",
      options: {
        (...)
        theme: {
          'back': '#edf0f3',
          'front': '#2b3137',
          'lead': '#2781ed',
          'lead-text': '#ffffff',
          'line': '#ced9e3',
          'skill-1': '#405060',
          'skill-2': '#fc8732',
          'skill-3': '#2ebc50',
        },
      },
    },
  ],
  (...)
}
```

Please remember, that after modyfying `gatsby-config.js` file it may be required to restart `gatsby develop` process.

## About

Intro. is a theme created by [Wojciech Kocjan](https://kocjan.net) from [Weeby Studio](https://weeby.studio).

The theme has been initially [launched](https://www.producthunt.com/posts/intro-8) in 2018 as a commercial project written in JavaScript. In 2020 it's been rewritten to GatsbyJS and open sourced.

**Thank you for using it!**
