function generateReadme(answers){
    const { projectsTitle, projectDesc, install, usage, license, contributors , githubUser, email} = answers
    return `

# ${projectsTitle}

#### Table of of Contents
1. [Project Description](#project-description)
2. [Installation](#install)
3. [Usage](#usage)
4. [Contribution Guide](#contributions)
5. [License](#license)

## Project Description 🔍
* ${projectDesc}

## Installation 💾
* ${install}

## Usage Info 💻
* ${usage}

## Contributors 👪
* ${contributors}

## License
* Licensed under ${license}

## Questions ✋
* ✋ Find me on Github @ [${githubUser}](http://github.com/${githubUser})
* ✉️For questions about this project please contact me @: ${email}.
    
    `;
}

module.exports = generateReadme;