export const pageInfo =  {
    development: "Site is under development, follow the news here or GitHub:",
    htmlTitle: "Mario Elvio | Front-end developer",
    home: {
        name: "Home"
    },
    about: {
        name: "About",
        personalResume: {
            title: "Personal resume",
            resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores, aliquam nesciunt aperiam quod perspiciatis ex eos amet numquam quos tenetur, laudantium dolorem. Debitis fugit perspiciatis facilis id officiis molestiae.",
        },
        professionalResume: {
            title: "Professional resume",
            resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores, aliquam nesciunt aperiam quod perspiciatis ex eos amet numquam quos tenetur, laudantium dolorem. Debitis fugit perspiciatis facilis id officiis molestiae.",
        },
        myInterests: {
            title: "My inteersts",
            tech: [
                {
                    id: 1,
                    name: "HTML5",
                    img: {
                        primary: require('../assets/technology/html5.svg').default,
                        light: require('../assets/technology/html5-light.svg').default,
                        dark: require('../assets/technology/html5-dark.svg').default,
                        alt: "HTML5 logo."
                    }
                },
                {
                    id: 2,
                    name: "CSS3",
                    img: {
                        primary: require('../assets/technology/css3.svg').default,
                        light: require('../assets/technology/css3-light.svg').default,
                        dark: require('../assets/technology/css3-dark.svg').default,
                        alt: "CSS3 logo."
                    }
                },
                {
                    id: 3,
                    name: "JavaScript",
                    img: {
                        primary: require('../assets/technology/javascript.svg').default,
                        light: require('../assets/technology/javascript-light.svg').default,
                        dark: require('../assets/technology/javascript-dark.svg').default,
                        alt: "JavaScript logo."
                    }
                },
                {
                    id: 4,
                    name: "TypeScript",
                    img: {
                        primary: require('../assets/technology/typescript.svg').default,
                        light: require('../assets/technology/typescript-light.svg').default,
                        dark: require('../assets/technology/typescript-dark.svg').default,
                        alt: "TypeScript logo."
                    }
                },
                {
                    id: 5,
                    name: "React.js",
                    img: {
                        primary: require('../assets/technology/react.svg').default,
                        light: require('../assets/technology/react-light.svg').default,
                        dark: require('../assets/technology/react-dark.svg').default,
                        alt: "React.js logo."
                    }
                },
                {
                    id: 6,
                    name: 'Node.js',
                    img: {
                        primary: require('../assets/technology/node.svg').default,
                        light: require('../assets/technology/node-light.svg').default,
                        dark: require('../assets/technology/node-dark.svg').default,
                        alt: "Node.js logo."
                    }
                },
            ]
        },
        personalDetails: {
            title: "Personal details",
            phone: "+55 16 98865-8468",
            email: "devmarioelvio@gmail.com",
            address: "Araraquara/SP, Brazil",
            linkedin: {
                text: "linkedin.com/in/marioelvio",
                url: "https://www.linkedin.com/in/marioelvio/"
            },
            github: {
                text: "github.com/jukerah",
                url: "https://github.com/jukerah"
            },
            youtube: {
                text: "youtube/c/marioelvio",
                url: "https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw"
            }
        },
        workExperience: [
            {
                id: 1,
                jobRole: "Systems Analyst",
                company: "DXC Technology",
                start: "10 / 2021",
                theEnd: "",
                current: true,
                seniority: "Intern",
                activities: "Support for mission-critical processes in the client Claro Brasil (NET), carrying out treatments and monitoring incidents until their closure to ensure the availability of applications and data integrity services."
            },
            {
                id: 2,
                jobRole: "Developer",
                company: "Freelancer",
                start: "04 / 2021",
                theEnd: "",
                current: true,
                seniority: "",
                activities: "Requirements gathering, interface creation and prototypes using Figma with a focus on the best possible user experience, SQL, PL/SQL development, database modeling, Git, GitHub, front-end development using HTML5, CSS3, JavaScript, TypeScript and React.js."
            },
            {
                id: 3,
                jobRole: "Service provider",
                company: "Autonomous",
                start: "03 / 2011",
                theEnd: "09 / 2021",
                current: false,
                seniority: "",
                activities: "Customer service and service delivery."
            }
        ],
        education: [
            {
                id: 1,
                course: "Analysis and sistems development",
                start: "02 / 2021",
                theEnd: "08 / 2023",
                college: "UNIARA"
            }
        ],
        courses: [
            {
                id: 1,
                course: "English.",
                start: "2021",
                theEnd: "2024",
                college: "Prof.Kenny"
            },
            {
                id: 2,
                course: "UI/UX, SQL, PL/SQL and Database Modeling.",
                start: "2022",
                theEnd: "2022",
                college: "Udemy"
            },
            {
                id: 3,
                course: "JavaScript, TypeScript and React.js.",
                start: "2022",
                theEnd: "2022",
                college: "B7Web"
            },
            {
                id: 4,
                course: "JavaScript, TypeScript and React.js.",
                start: "2022",
                theEnd: "2022",
                college: "B7Web"
            },
            {
                id: 5,
                course: "TypeScript, React.js and Node.js.",
                start: "2022",
                theEnd: "2022",
                college: "Devmedia"
            },
            {
                id: 6,
                course: "HTML5, CSS3, Programming Logic, JavaScript, SQL, .NET, C#, Database Modeling, MVC, REST, GIT and GITHUB.",
                start: "2021",
                theEnd: "2021",
                college: "Devmedia"
            },
            {
                id: 7,
                course: "HTML5, CSS3 and Programming Logic.",
                start: "2021",
                theEnd: "2021",
                college: "DIGITAL INNOVATION ONE"
            },
            {
                id: 8,
                course: "Developer (Automation 360).",
                start: "2021",
                theEnd: "2021",
                college: " AUTOMATION ANYWHERE"
            }
        ],
        certificates: [
            {
                id: 1,
                certificateIssuer: "Certiprof",
                certificate: "LGPDF™ and SFPC™.",
                year: "2021"
            }
        ],
        softSkills: {
            description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            skill: [
                {
                    id: 1,
                    name: "Communication",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 2,
                    name: "Teamwork",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 3,
                    name: "Creativity",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.Lorem ipsum dolor sit amet consec tetur adipisicing elit.Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 4,
                    name: "Dedication",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 5,
                    name: "Analytical Ability",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 6,
                    name: "Flexibility",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 7,
                    name: "Ethic",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 8,
                    name: "Collaborative Spirit",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 9,
                    name: "Emotional Stability",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                },
                {
                    id: 10,
                    name: "Self-Teached",
                    description: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
                }
            ]
        },
        hardSkills: {
            description: "",
            frontEnd: {
                skill: [
                    {
                        id: 1,
                        idTech: 1,
                        name: "HTML5",
                        Alt: "HTML5 logo."
                    }
                ]
            },
            backEnd: {
                skill: [
                    {
                        id: 1,
                        idTech: 3,
                        name: "JavaScript",
                        Alt: "JavaScript logo."
                    }
                ]
            },
            tools: {
                skill: [
                    {
                        id: 1,
                        idTech: 20,
                        name: "GIT",
                        Alt: "GIT logo."
                    }
                ]
            },
            database: {
                skill: [
                    {
                        id: 1,
                        idTech: 13,
                        name: "Modeling",
                        Alt: "Modeling logo."
                    }
                ]
            }
        }
    },
    portfolio: {
        name: "Portfolio",
    },
    blog: {
        name: "Blog"
    },
    contact: {
        "name": "Contact"
    },
    login: {
        name: "Login"
    }
}