const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rajshekhar26.github.io/cleanfolio',
    title: 'BB.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Bhargav Bhinsra',
    role: 'Developer',
    description:' I am currently student in Computer Engineering at LDCE. I like to Develop web apps & mobile app. and create creative UI/UX designs. I like to work on new things and enjoy them.',

    resume: 'https://bhargavbhinsara.github.io/BHARGAV_BHINSARA.pdf',
    social: {
      linkedin: 'https://linkedin.com/BHARGAV_BHINSARA',
      github: 'https://github.com/bhargavbhinsara',
    },
  }
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'squereOfArea',
      description:
        'In this web app, we check the area of the square with a small animation. Using the core jS',
      stack: ['JavaScript', 'HTML', 'CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'SnakeGame',
      description:
        'It\'s a small and basic Snake game. IS developed using the core JavaScript and HTML, CSS.',
      stack: ['JavaScript', 'HTML', 'CSS'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Loading...',
      stack: ['', '', ''],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    {sk:'HTML & CSS',prs: '90'},
    {sk: 'JavaScript',prs: '60'},
    {sk: 'ReactJS',prs: '50'},
    {sk: 'bootstrap',prs: '70'},
    {sk: 'PHP',prs: '60'},
    {sk: 'MYSQL',prs: '70'},

  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'bhinsra49@mail.com',
    phone: '9586167557',
    adress: 'valsad',
  }
  
  export { header, about, projects, skills, contact }
  