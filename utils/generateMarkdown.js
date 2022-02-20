

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

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
  

  ## Contribution Guidelines 
  ${contribution}

  ## Testing Instructions
  ${data.test}

  ## Questions 
  For any questions please feel free to email or checkout my GitHub profile:
  Email:  ${data.email}
  GitHub: github.com/${data.github}


`;

}

module.exports = generateMarkdown;
