

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data === 'Apache')  {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  } else if (data === 'Boost') {
    return `
    [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    `
  } else if (data === 'BSD') {
    return `
    [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    `
  } else if (data === 'Creative Commons') {
    return `
    [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)
    `
  } else if (data === 'Eclipse') {
    return `
    [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
    `
  } else if (data === 'GNU') {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
  } else if (data === 'Organization for Ethical Source') {
    return `
    [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)
    `
  } else if (data === 'IBM') {
    return `
    [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
    `
  } else if ( data === 'ISC') {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `
  } else if ( data === 'MIT') {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  } else if (data === 'Mozilla') {
    return `
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    `
  } else if (data === 'Open Data Commons') {
    return `
    [![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
    `
  } else if (data === 'Perl') {
    return `
    [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
    `
  } else if (data === 'SIL') {
    return `
    [![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
    `
  } else if (data === 'Unlicense') {
    return `
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
    `
  } else if (data === 'WTFPL') {
    return `
    [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
    `
  } else if (data === 'Zlib') {
    return `
    [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
    `
  } else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation-Instructions)
  [Usage](#Usage-Information)
  [License](#License)
  [Contributing](#Contribution-Guidelines)
  [Tests](#Testing-Instructions)
  [Questions](#Questions)

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines 
  ${data.contribution}

  ## Testing Instructions
  ${data.test}

  ## Questions 
  For any questions please feel free to email or checkout my GitHub profile:
  Email:  ${data.email}
  GitHub: github.com/${data.github}


`;

}

module.exports = generateMarkdown;
