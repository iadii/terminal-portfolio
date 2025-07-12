const getCurrentTime = () => {
  return new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// Replace getRandomQuote with API-based version
const getRandomQuote = async () => {
  try {
    const res = await fetch('https://api.quotable.io/random');
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    return `${data.content} – ${data.author}`;
  } catch (e) {
    return 'Could not fetch quote. Try again later.';
  }
}

const getRandomJoke = async () => {
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single');
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    if (data.type === 'single') {
      return [data.joke];
    } else if (data.type === 'twopart') {
      return [data.setup, data.delivery];
    } else {
      return ['No joke found.'];
    }
  } catch (e) {
    return ['Could not fetch joke. Try again later.'];
  }
}

const createBanner = (text) => {
  return [
    "     **     ****     **** **  ********   **      **     **    ",
    "    ****    ** **   ** ** **  **         **      **    ****   ",
    "   **  **   ** ** **   ** **  **         **      **   **  **  ",
    "  **    **  **   ***   ** **  *********  **********  **    ** ",
    " ********** **    *    ** **          ** **      ** **********",
    "**       ** **         ** **          ** **      ** **       **",
    "**        ** **        ** **  *********  **      ** **       **",
    "    "
  ]
}

const commandRegistry = {
  welcome: () => ({
    output: [
      "Welcome to Amisha's Portfolio Terminal! 🚀",
      "",
      "Type 'help' to see available commands.",
      "Use 'ls' to list directories or 'cd <dir>' to navigate.",
      ""
    ]
  }),
  help: () => ({
    output: [
      "Available commands:",
      "",
      "Navigation:",
      "  ls                 - List directories",
      "  cd <directory>     - Change directory",
      "  pwd                - Show current path",
      "  cd ..              - Go back",
      "",
      "Portfolio Sections:",
      "  cd skills          - View technical skills",
      "  cd projects        - View project portfolio", 
      "  cd experience      - View work experience",
      "  cd education       - View educational background",
      "  cd publications    - View research publications",
      "  cd about           - Learn more about me",
      "",
      "System Commands:",
      "  whoami             - Show current user",
      "  date               - Show current date/time",
      "  clear              - Clear terminal",
      "",
      "Fun & System Info:",
      "  neofetch           - Show system info",
      "  sudo hire-amisha   - Download resume",
      "  banner amisha      - Show ASCII banner",
      "  fortune            - Get a random quote",
      "  joke               - Get a random joke",
      "  open resume        - Open resume",
      "  sleep <seconds>    - Delay output",
      "",
      ""
    ]
  }),
  ls: (currentPath) => {
    const directories = {
      '~': ['skills/', 'projects/', 'experience/', 'education/', 'publications/', 'about/', 'README.md', 'contact.txt'],
      '~/skills': ['languages.txt', 'frameworks.txt', 'tools.txt'],
      '~/projects': ['docai/', 'querygenie/', 'portpulse/', 'README.md'],
      '~/experience': ['infosys.txt', 'ratna-sagar.txt'],
      '~/education': ['masters.txt', 'bachelors.txt'],
      '~/publications': ['springer-2024.pdf', 'research-notes.txt'],
      '~/about': ['bio.txt', 'interests.txt', 'goals.txt']
    }
    
    return {
      output: directories[currentPath] || ['Directory not found']
    }
  },

  pwd: (currentPath) => ({
    output: [`/home/amisha${currentPath.replace('~', '')}`]
  }),

  whoami: () => ({
    output: ['amisha']
  }),

  date: () => ({
    output: [getCurrentTime()]
  }),

  clear: () => ({
    output: [],
    clear: true
  }),

  'cat README.md': () => ({
    output: [
      "# Amisha Sharma - Full Stack Developer",
      "",
      "Hi there! 👋 I'm Amisha, a passionate full-stack developer",
      "who loves building intelligent systems that solve real-world problems.",
      "",
      "## Quick Facts:",
      "- 🔭 Currently working at Infosys as Specialist Programmer",
      "- 🌱 Exploring AI/ML and Generative AI",
      "- 💬 Ask me about Python, React, or NLP",
      "- 📫 Reach me at: amishasharma0912@gmail.com",
      "- ⚡ Fun fact: I love turning complex problems into simple solutions"
    ]
  }),

  'touch contact.txt': () => ({
    output: [
      "📧 Email: amishasharma0912@gmail.com",
      "💼 LinkedIn: linkedin.com/in/amisha-sharma",
      "🐱 GitHub: github.com/amishasharma",
      "📱 Phone: +91-XXXXXXXXXX",
      "📍 Location: Delhi, India"
    ]
  }),

  fortune: async () => ({
    output: [await getRandomQuote()]
  }),

  joke: async () => {
    return { output: await getRandomJoke() };
  },

  neofetch: () => ({
    output: [
      "                   -`                    amisha@portfolio",
      "                  .o+`                   -----------------",
      "                 `ooo/                   OS: Portfolio OS",
      "                `+oooo:                  Host: Developer Machine",
      "               `+oooooo:                 Kernel: Skills-5.0",
      "               -+oooooo+:                Uptime: 2+ years coding",
      "             `/:-:++oooo+:               Packages: 50+ projects",
      "            `/++++/+++++++:              Shell: bash",
      "           `/++++++++++++++:             Resolution: Problem Solver",
      "          `/+++ooooooooo+++/             DE: VS Code",
      "         ./ooosssso++osssssso+`          WM: Git",
      "        .oossssso-````/ossssss+`         Theme: Dark Mode",
      "       -osssssso.      :ssssssso.        Icons: Lucide React",
      "      :osssssss/        osssso+++.       Terminal: Custom React",
      "     /ossssssss/        +ssssooo/-       CPU: Coffee-powered",
      "   `/ossssso+/:-        -:/+osssso+-     Memory: Unlimited creativity",
      "  `+sso+:-`                 `.-/+oso:    ",
      " `++:.                           `-/+/   ",
      " .`                                 `/   "
    ]
  }),

  'banner amisha': () => ({
    output: createBanner('AMISHA')
  }),

  'cd skills': () => ({
    output: [
      "�� Technical Skills",
      "",
      "",
      "Languages:",
      "  • Python (Advanced)",
      "  • JavaScript/TypeScript",
      "  • C/C++",
      "  • HTML/CSS",
      "",
      "Frameworks & Libraries:",
      "  • React.js, Flask, Django",
      "  • Streamlit, FastAPI",
      "  • Scikit-learn, Keras",
      "  • Pandas, NumPy",
      "",
      "Tools & Technologies:",
      "  • Git/GitHub, Docker",
      "  • Linux, REST APIs",
      "  • MySQL, MongoDB",
      "  • AWS, Azure OpenAI",
      "",
      "Specializations:",
      "  • Machine Learning & AI",
      "  • Natural Language Processing",
      "  • Full Stack Development",
      "  • Network Security"
    ],
    newPath: '~/skills'
  }),

  'cd projects': () => ({
    output: [
      "🚀 Featured Projects",
      "=",
      "",
      "1. 🤖 DocAI - AI-Powered PDF Q&A System",
      "   ├── Tech: LangChain, Azure OpenAI, Python",
      "   ├── Features: Document parsing, intelligent Q&A",
      "   └── Impact: Streamlined document analysis workflow",
      "",
      "2. 🔍 QueryGenie - Natural Language to SQL",
      "   ├── Tech: Cohere API, Flask, React",
      "   ├── Features: NL query processing, SQL generation",
      "   └── Impact: Democratized database querying",
      "",
      "3. 🛡️ PortPulse - Real-time Port Scanner",
      "   ├── Tech: Streamlit, Plotly, Python",
      "   ├── Features: Network scanning, visualization",
      "   └── Impact: Enhanced network security monitoring",
      "",
      "4. 💬 Interactive NLP Chatbot",
      "   ├── Tech: Python, NLP libraries",
      "   ├── Features: Context-aware responses",
      "   └── Impact: Improved user engagement by 40%",
      "",
      "Type 'ls' to see project details or 'cd <project>' to explore."
    ],
    newPath: '~/projects'
  }),

  'cd experience': () => ({
    output: [
      "💼 Professional Experience",
      "========",
      "",
      "🏢 Infosys Limited",
      "   Role: Specialist Programmer",
      "   Duration: November 2024 - Present",
      "   ├── Built ML model for return prediction (87% accuracy)",
      "   ├── Designed LLM-based HR automation tool",
      "   ├── Developed real-time ticketing system",
      "   └── Collaborated with cross-functional teams",
      "",
      "🏢 Ratna Sagar Pvt Ltd",
      "   Role: Trainee Developer",
      "   Duration: June 2024 - November 2024",
      "   ├── Developed NLP-powered chatbot",
      "   ├── Digitized educational content into LMS",
      "   ├── Enhanced user engagement through interactive features",
      "   └── Improved system performance by 30%",
      "",
      "Key Achievements:",
      "• Published research paper in Springer",
      "• Led team of 3 developers in chatbot project",
      "• Mentored 5+ junior developers"
    ],
    newPath: '~/experience'
  }),

  'cd education': () => ({
    output: [
      "🎓 Educational Background",
      "=======",
      "",
      "🏫 Masters in Computer Applications (MCA)",
      "   University: Sharda University",
      "   Duration: 2022 - 2024",
      "   ├── Specialization: Software Development & AI",
      "   ├── CGPA: 8.5/10",
      "   ├── Key Courses: ML, Data Structures, Software Engineering",
      "   └── Thesis: Network Security Optimization",
      "",
      "🏫 Bachelors in Computer Applications (BCA)",
      "   University: DAV University",
      "   Duration: 2019 - 2022",
      "   ├── Major: Computer Science",
      "   ├── CGPA: 8.2/10",
      "   ├── Key Courses: Programming, Database Systems, Web Dev",
      "   └── Project: E-commerce Web Application",
      "",
      "📚 Certifications:",
      "• AWS Cloud Practitioner",
      "• Google Cloud ML Engineer",
      "• Microsoft Azure AI Fundamentals"
    ],
    newPath: '~/education'
  }),

  'cd publications': () => ({
    output: [
      "📄 Research Publications",
      "======",
      "",
      "📋 Published Paper:",
      "   Title: 'Optimization of Network Mapping for Screening",
      "          and Intrusion Sensing Devices'",
      "   Publisher: Springer",
      "   Date: April 2024",
      "   DOI: 10.1007/978-XXX-XXX-XXXX-X_XX",
      "",
      "🔬 Research Focus:",
      "   • Network Security & Intrusion Detection",
      "   • Machine Learning Applications in Cybersecurity",
      "   • Optimization Algorithms for Network Systems",
      "",
      "📊 Citation Metrics:",
      "   • Citations: 12+",
      "   • h-index: 1",
      "   • Research Impact: Network Security Community",
      "",
      "🎯 Current Research:",
      "   • AI-driven Security Analytics",
      "   • Automated Threat Detection Systems"
    ],
    newPath: '~/publications'
  }),

  'cd about': () => ({
    output: [
      "👨‍💻 About Amisha Sharma",
      "=====",
      "",
      "Hello! I'm Amisha, a passionate full-stack developer who loves",
      "building intelligent systems that bridge the gap between complex",
      "technology and real-world solutions.",
      "",
      "🚀 What drives me:",
      "   • Creating tools that simplify complex workflows",
      "   • Exploring the intersection of AI and software engineering",
      "   • Building scalable systems that make a difference",
      "   • Contributing to open-source projects",
      "",
      "🎯 Current Focus:",
      "   • Generative AI applications",
      "   • Full-stack development with React & Python",
      "   • Machine Learning model deployment",
      "   • Network security research",
      "",
      "💡 Philosophy:",
      "   'Good code is like a good joke - it needs no explanation.'",
      "   I believe in writing clean, maintainable code that solves",
      "   real problems and creates value for users.",
      "",
      "🌟 When I'm not coding:",
      "   • Reading tech blogs and research papers",
      "   • Contributing to open-source projects",
      "   • Learning new technologies",
      "   • Mentoring aspiring developers"
    ],
    newPath: '~/about'
  }),

  'cd ..': (currentPath) => {
    const pathParts = currentPath.split('/')
    const newPath = pathParts.length > 1 ? 
      pathParts.slice(0, -1).join('/') || '~' : '~'
    
    return {
      output: [],
      newPath: newPath
    }
  },

  'sudo hire-amisha': () => ({
    output: [
      "[sudo] password for amisha: ●●●●●●●●",
      "Access granted...",
      "Initializing resume download...",
      "██████████ 100%",
      "Resume downloaded successfully!"
    ],
    downloadUrl: '/ammy-resume.pdf',
    downloadName: 'Amisha_Sharma_Resume.pdf'
  }),

  'open resume': () => ({
    output: [
      '┌───────────────────────────────────────────────────────────────┐',
      '│  1  Amisha Sharma                                            │',
      '│  2  Full Stack Developer | AI/ML Engineer                    │',
      '│  3                                                           │',
      '│  4  Email: amishasharma0912@gmail.com                        │',
      '│  5  LinkedIn: linkedin.com/in/ammycodex                      │',
      '│  6  GitHub: github.com/ammycodex                             │',
      '│  7                                                           │',
      '│  8  Skills:                                                  │',
      '│  9    - Python, JavaScript, React, C/C++, SQL                │',
      '│ 10    - Machine Learning, AI, NLP                            │',
      '│ 11    - Full Stack Development, REST APIs                    │',
      '│ 12    - Docker, Git, Linux                                   │',
      '│ 13                                                           │',
      '│ 14  Experience:                                              │',
      '│ 15    - Specialist Programmer, Infosys (2024-Present)         │',
      '│ 16    - Trainee Developer, Ratna Sagar (2024)                │',
      '│ 17                                                           │',
      '│ 18  Education:                                               │',
      '│ 19    - MCA, Sharda University (2022-2024)                   │',
      '│ 20    - BCA, DAV University (2019-2022)                      │',
      '│ 21                                                           │',
      '│ 22  Achievements:                                            │',
      '│ 23    - Published research in Springer                       │',
      '│ 24    - 87% accuracy ML model for return prediction          │',
      '│ 25    - Led development of AI-powered tools                  │',
      '└───────────────────────────────────────────────────────────────┘',
      ':q to quit'
    ]
  }),

  sleep: (currentPath, args) => {
    const seconds = parseInt(args[0]) || 2
    return {
      output: [`Sleeping for ${seconds} seconds...`],
      delay: seconds * 1000
    }
  }
}

export const executeCommand = (input, currentPath) => {
  const [command, ...args] = input.toLowerCase().split(' ')
  
  if (command === 'cd') {
    const target = args.join(' ')
    if (commandRegistry[`cd ${target}`]) {
      return commandRegistry[`cd ${target}`](currentPath)
    }
    return {
      output: [`cd: ${target}: No such file or directory`]
    }
  }
  
  if (commandRegistry[input.toLowerCase()]) {
    return commandRegistry[input.toLowerCase()](currentPath, args)
  }
  
  return {
    output: [
      `Command '${input}' not found.`,
      "Type 'help' for a list of available commands."
    ]
  }
}

export const getAvailableCommands = () => [
  'help', 'ls', 'cd skills', 'cd projects', 'cd experience', 'cd education', 'cd publications', 'cd about', 'cd ..', 'pwd',
  'whoami', 'date', 'clear',
  'sudo hire-amisha', 'banner amisha', 'fortune', 'neofetch', 'open resume', 'sleep 1', 'sleep 2', 'sleep 3', 'joke'
]
