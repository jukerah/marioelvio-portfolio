import { PageDataType } from "../types/PageInfoType";

export const pageInfo: PageDataType = {
  development: "Site is under development, follow the news here or GitHub:",
  htmlTitle: "Mario Elvio | Front-end developer",
  home: {
    pageTitle: "Home",
  },
  about: {
    pageTitle: {
      en: "About me",
      pt: "Sobre mim",
    },
    personalResume: {
      title: {
        en: "Personal resume",
        pt: "Resumo pessoal",
      },
      resume: {
        en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores, aliquam nesciunt aperiam quod perspiciatis ex eos amet numquam quos tenetur, laudantium dolorem. Debitis fugit perspiciatis facilis id officiis molestiae.",
        pt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores, aliquam nesciunt aperiam quod perspiciatis ex eos amet numquam quos tenetur, laudantium dolorem. Debitis fugit perspiciatis facilis id officiis molestiae.",
      },
    },
    professionalResume: {
      title: {
        en: "Professional resume",
        pt: "Resumo profissional",
      },
      resume: {
        en: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores, aliquam nesciunt aperiam quod perspiciatis ex eos amet numquam quos tenetur, laudantium dolorem. Debitis fugit perspiciatis facilis id officiis molestiae.",
        pt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores, aliquam nesciunt aperiam quod perspiciatis ex eos amet numquam quos tenetur, laudantium dolorem. Debitis fugit perspiciatis facilis id officiis molestiae.",
      },
    },
    myInterests: {
      title: {
        en: "My interests",
        pt: "Meus interesses",
      },
      tech: [
        {
          id: 1,
          name: "HTML5",
          img: {
            primary: require("../assets/technology/html5.svg").default,
            light: require("../assets/technology/html5-light.svg").default,
            dark: require("../assets/technology/html5-dark.svg").default,
            alt: {
              en: "HTML5 logo.",
              pt: "Logotipo HTML5.",
            },
          },
        },
        {
          id: 2,
          name: "CSS3",
          img: {
            primary: require("../assets/technology/css3.svg").default,
            light: require("../assets/technology/css3-light.svg").default,
            dark: require("../assets/technology/css3-dark.svg").default,
            alt: {
              en: "CSS3 logo.",
              pt: "Logotipo CSS3.",
            },
          },
        },
        {
          id: 3,
          name: "JavaScript",
          img: {
            primary: require("../assets/technology/javascript.svg").default,
            light: require("../assets/technology/javascript-light.svg").default,
            dark: require("../assets/technology/javascript-dark.svg").default,
            alt: {
              en: "JavaScript logo.",
              pt: "Logotipo JavaScript.",
            },
          },
        },
        {
          id: 4,
          name: "TypeScript",
          img: {
            primary: require("../assets/technology/typescript.svg").default,
            light: require("../assets/technology/typescript-light.svg").default,
            dark: require("../assets/technology/typescript-dark.svg").default,
            alt: {
              en: "TypeScript logo.",
              pt: "Logotipo TypeScript.",
            },
          },
        },
        {
          id: 5,
          name: "React.js",
          img: {
            primary: require("../assets/technology/react.svg").default,
            light: require("../assets/technology/react-light.svg").default,
            dark: require("../assets/technology/react-dark.svg").default,
            alt: {
              en: "React.js logo.",
              pt: "Logotipo React.js.",
            },
          },
        },
        {
          id: 6,
          name: "Node.js",
          img: {
            primary: require("../assets/technology/node.svg").default,
            light: require("../assets/technology/node-light.svg").default,
            dark: require("../assets/technology/node-dark.svg").default,
            alt: {
              en: "Node.js logo.",
              pt: "Logotipo Node.js",
            },
          },
        },
      ],
    },
    personalDetails: {
      title: {
        en: "Personal details",
        pt: "Dados Pessoais",
      },
      phone: "+55 16 98865-8468",
      email: "devmarioelvio@gmail.com",
      address: "Araraquara/SP, Brazil",
      linkedin: {
        text: "linkedin.com/in/marioelvio",
        url: "https://www.linkedin.com/in/marioelvio/",
      },
      github: {
        text: "github.com/jukerah",
        url: "https://github.com/jukerah",
      },
      youtube: {
        text: "youtube/c/marioelvio",
        url: "https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw",
      },
    },
    download: {
      en: "Download cv",
      pt: "Baixar cv",
    },
    workExperience: {
      title: {
        en: "Work experiences",
        pt: "Experiências Profissionais",
      },
      activities: {
        en: "Activities:",
        pt: "Atividades:",
      },
      workList: [
        {
          id: 1,
          jobRole: {
            en: "Systems analyst",
            pt: "Analista de sistemas",
          },
          company: "DXC Technology",
          start: "10 / 2021",
          theEnd: "",
          currentStatus: true,
          current: {
            en: "Current",
            pt: "Atual",
          },
          seniority: {
            en: "Intern",
            pt: "Estagiário",
          },
          activities: {
            en: "Support for mission-critical processes in the client Claro Brasil (NET), carrying out treatments and monitoring incidents until their closure to ensure the availability of applications and data integrity services.",
            pt: "Suporte aos processos de missão crítica no cliente Claro Brasil (NET), realizando tratamentos e monitorando os incidentes até o seu encerramento para garantir a disponibilidade dos aplicativos e serviços de integridade dos dados.",
          },
        },
        {
          id: 2,
          jobRole: {
            en: "Developer",
            pt: "Desenvolvedor",
          },
          company: "Freelancer",
          start: "04 / 2021",
          theEnd: "",
          currentStatus: true,
          current: {
            en: "Current",
            pt: "Atual",
          },
          seniority: {
            en: "",
            pt: "",
          },
          activities: {
            en: "Requirements gathering, creation of interfaces and prototypes using Figma with a focus on the best user experience, SQL, PL/SQL development, database modeling, Git, GitHub, front-end development using HTML5, CSS3, JavaScript, TypeScript and React .js.",
            pt: "Levantamento de requisitos, criação de interfaces e protótipos utilizando Figma com foco na melhor experiência de usuário, SQL, desenvolvimento PL/SQL, modelagem de banco de dados, Git, GitHub, desenvolvimento front-end usando HTML5, CSS3, JavaScript, TypeScript e React.js.",
          },
        },
        {
          id: 3,
          jobRole: {
            en: "Service provider",
            pt: "Prestação de serviços",
          },
          company: "Freelancer",
          start: "03 / 2011",
          theEnd: "09 / 2021",
          currentStatus: false,
          current: {
            en: "Current",
            pt: "Atual",
          },
          seniority: {
            en: "",
            pt: "",
          },
          activities: {
            en: "Administration, customer service, service delivery services, budgets and stock management.",
            pt: "Administração, atendimento ao cliente, prestação de serviços, orçamentos e gestão de estoque.",
          },
        },
      ],
    },
    education: {
      title: {
        en: "Education",
        pt: "Educação",
      },
      educationList: [
        {
          id: 1,
          course: {
            en: "Analysis and sistems development",
            pt: "Análise e desenvolvimento de sistemas",
          },
          start: "02 / 2021",
          theEnd: "08 / 2023",
          college: "UNIARA",
        },
      ],
    },
    courses: {
      title: {
        en: "",
        pt: "",
      },
      courseList: [
        {
          id: 1,
          start: "2021",
          theEnd: "2024",
          college: "Prof.Kenny",
          course: {
            en: "English.",
            pt: "Inglês",
          },
        },
        {
          id: 2,
          start: "2022",
          theEnd: "2022",
          college: "Udemy",
          course: {
            en: "UI/UX, SQL, PL/SQL and Database Modeling.",
            pt: "UI/UX, SQL, PL/SQL e modelagem de banco de dados.",
          },
        },
        {
          id: 3,
          start: "2022",
          theEnd: "2022",
          college: "B7Web",
          course: {
            en: "JavaScript, TypeScript and React.js.",
            pt: "JavaScript, TypeScript e React.js.",
          },
        },
        {
          id: 4,
          start: "2022",
          theEnd: "2022",
          college: "B7Web",
          course: {
            en: "JavaScript, TypeScript and React.js.",
            pt: "JavaScript, TypeScript e React.js.",
          },
        },
        {
          id: 5,
          start: "2022",
          theEnd: "2022",
          college: "Devmedia",
          course: {
            en: "TypeScript, React.js and Node.js.",
            pt: "TypeScript, React.js e Node.js.",
          },
        },
        {
          id: 6,
          start: "2021",
          theEnd: "2021",
          college: "Devmedia",
          course: {
            en: "HTML5, CSS3, programming logic, JavaScript, SQL, .NET, C#, database Modeling, MVC, REST, GIT and GITHUB.",
            pt: "HTML5, CSS3, lógica de programação, JavaScript, SQL, .NET, C#, modelagem de banco de dados, MVC, REST, GIT e GITHUB.",
          },
        },
        {
          id: 7,
          start: "2021",
          theEnd: "2021",
          college: "DIGITAL INNOVATION ONE",
          course: {
            en: "HTML5, CSS3 and programming logic.",
            pt: "HTML5, CSS3 e lógica de programação.",
          },
        },
        {
          id: 8,
          start: "2021",
          theEnd: "2021",
          college: "AUTOMATION ANYWHERE",
          course: {
            en: "Developer (Automation 360).",
            pt: "Desenvolvedor (Automation 360).",
          },
        },
      ],
    },
    certificates: {
      title: {
        en: "Certificates",
        pt: "Certificados",
      },
      certificateList: [
        {
          id: 1,
          certificateIssuer: "Certiprof",
          year: "2021",
          certificate: {
            en: "LGPDF™ and SFPC™.",
            pt: "LGPDF™ e SFPC™.",
          },
        },
      ],
    },
    softSkills: {
      title: {
        en: "Soft Skills",
        pt: "Habilidades Interpessoais",
      },
      description: {
        en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
        pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
      },
      skill: [
        {
          id: 1,
          name: {
            en: "Communication",
            pt: "Comunicação",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 2,
          name: {
            en: "Teamwork",
            pt: "Trabalho em Equipe",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 3,
          name: {
            en: "Creativity",
            pt: "Criatividade",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 4,
          name: {
            en: "Dedication",
            pt: "Dedicação",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 5,
          name: {
            en: "Analytical Ability",
            pt: "Habilidade analítica",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 6,
          name: {
            en: "Flexibility",
            pt: "Flexibilidade",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 7,
          name: {
            en: "Ethic",
            pt: "Ética",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 8,
          name: {
            en: "Collaborative Spirit",
            pt: "Espírito Colaborativo",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 9,
          name: {
            en: "Emotional Stability",
            pt: "Estabilidade Emocional",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
        {
          id: 10,
          name: {
            en: "Self-Teached",
            pt: "Autodidata",
          },
          description: {
            en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
            pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
          },
        },
      ],
    },
    hardSkills: {
      title: {
        en: "Hard Skills",
        pt: "Habilidades Técnicas"
      },
      description: {
        en: "Lorem ipsum dolor sit amet consec tetur adipisicing elit.",
        pt: "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
      },
      frontEnd: {
        skill: [
          {
            id: 1,
            name: "HTML5",
            img: {
              primary: require("../assets/technology/html5.svg").default,
              light: require("../assets/technology/html5-light.svg").default,
              dark: require("../assets/technology/html5-dark.svg").default,
              alt: {
                en: "HTML5 logo.",
                pt: "Logotipo HTML5.",
              },
            },
          },
          {
            id: 2,
            name: "CSS3",
            img: {
              primary: require("../assets/technology/css3.svg").default,
              light: require("../assets/technology/css3-light.svg").default,
              dark: require("../assets/technology/css3-dark.svg").default,
              alt: {
                en: "CSS3 logo.",
                pt: "Logotipo CSS3.",
              },
            },
          },
          {
            id: 3,
            name: "JavaScript",
            img: {
              primary: require("../assets/technology/javascript.svg").default,
              light: require("../assets/technology/javascript-light.svg")
                .default,
              dark: require("../assets/technology/javascript-dark.svg").default,
              alt: {
                en: "JavaScript logo.",
                pt: "Logotipo JavaScript.",
              },
            },
          },
          {
            id: 4,
            name: "TypeScript",
            img: {
              primary: require("../assets/technology/typescript.svg").default,
              light: require("../assets/technology/typescript-light.svg")
                .default,
              dark: require("../assets/technology/typescript-dark.svg").default,
              alt: {
                en: "TypeScript logo.",
                pt: "Logotipo TypeScript.",
              },
            },
          },
          {
            id: 5,
            name: "React.js",
            img: {
              primary: require("../assets/technology/react.svg").default,
              light: require("../assets/technology/react-light.svg").default,
              dark: require("../assets/technology/react-dark.svg").default,
              alt: {
                en: "React.js logo.",
                pt: "Logotipo React.js.",
              },
            },
          },
          {
            id: 6,
            name: "SEO",
            img: {
              primary: require("../assets/technology/seo.svg").default,
              light: require("../assets/technology/seo-light.svg").default,
              dark: require("../assets/technology/seo-dark.svg").default,
              alt: {
                en: "SEO logo.",
                pt: "Logotipo SEO.",
              },
            },
          },
          {
            id: 7,
            name: "Accessibility",
            img: {
              primary: require("../assets/technology/accessibility.svg")
                .default,
              light: require("../assets/technology/accessibility-light.svg")
                .default,
              dark: require("../assets/technology/accessibility-dark.svg")
                .default,
              alt: {
                en: "Accessibility logo.",
                pt: "Logotipo Accessibility.",
              },
            },
          },
          {
            id: 8,
            name: "UI/UX",
            img: {
              primary: require("../assets/technology/uiux.svg").default,
              light: require("../assets/technology/uiux-light.svg").default,
              dark: require("../assets/technology/uiux-dark.svg").default,
              alt: {
                en: "UI/UX logo.",
                pt: "Logotipo UI/UX.",
              },
            },
          },
        ],
      },
      backEnd: {
        skill: [
          {
            id: 3,
            name: "JavaScript",
            img: {
              primary: require("../assets/technology/javascript.svg").default,
              light: require("../assets/technology/javascript-light.svg")
                .default,
              dark: require("../assets/technology/javascript-dark.svg").default,
              alt: {
                en: "JavaScript logo.",
                pt: "Logotipo JavaScript.",
              },
            },
          },
          {
            id: 2,
            name: "TypeScript",
            img: {
              primary: require("../assets/technology/typescript.svg").default,
              light: require("../assets/technology/typescript-light.svg")
                .default,
              dark: require("../assets/technology/typescript-dark.svg").default,
              alt: {
                en: "TypeScript logo.",
                pt: "Logotipo TypeScript.",
              },
            },
          },
          {
            id: 3,
            name: "Node.js",
            img: {
              primary: require("../assets/technology/node.svg").default,
              light: require("../assets/technology/node-light.svg").default,
              dark: require("../assets/technology/node-dark.svg").default,
              alt: {
                en: "Node.js logo.",
                pt: "Logotipo Node.js.",
              },
            },
          },
        ],
      },
      mobile: {
        skill: [],
      },
      tools: {
        name: {
          en: "Tools",
          pt: "Ferramentas"
        },
        skill: [
          {
            id: 1,
            name: "Git",
            img: {
              primary: require("../assets/technology/git.svg").default,
              light: require("../assets/technology/git-light.svg").default,
              dark: require("../assets/technology/git-dark.svg").default,
              alt: {
                en: "Git logo.",
                pt: "Logotipo Git.",
              },
            },
          },
          {
            id: 2,
            name: "GitHub",
            img: {
              primary: require("../assets/technology/github.svg").default,
              light: require("../assets/technology/github-light.svg").default,
              dark: require("../assets/technology/github-dark.svg").default,
              alt: {
                en: "GitHub logo.",
                pt: "Logotipo GitHub.",
              },
            },
          },
          {
            id: 3,
            name: "PhotoShop",
            img: {
              primary: require("../assets/technology/photoshop.svg").default,
              light: require("../assets/technology/photoshop-light.svg")
                .default,
              dark: require("../assets/technology/photoshop-dark.svg").default,
              alt: {
                en: "PhotoShop logo.",
                pt: "Logotipo PhotoShop.",
              },
            },
          },
          {
            id: 4,
            name: "Figma",
            img: {
              primary: require("../assets/technology/figma.svg").default,
              light: require("../assets/technology/figma-light.svg").default,
              dark: require("../assets/technology/figma-dark.svg").default,
              alt: {
                en: "Figma logo.",
                pt: "Logotipo Figma.",
              },
            },
          },
        ],
      },
      database: {
        name: {
          en: "Database",
          pt: "Banco de dados"
        },
        skill: [
          {
            id: 1,
            name: "Modeling",
            img: {
              primary: require("../assets/technology/modeling.svg").default,
              light: require("../assets/technology/modeling-light.svg").default,
              dark: require("../assets/technology/modeling-dark.svg").default,
              alt: {
                en: "Modeling logo.",
                pt: "Logotipo Modeling.",
              },
            },
          },
          {
            id: 2,
            name: "MySQL",
            img: {
              primary: require("../assets/technology/mysql.svg").default,
              light: require("../assets/technology/mysql-light.svg").default,
              dark: require("../assets/technology/mysql-dark.svg").default,
              alt: {
                en: "MySQL logo.",
                pt: "Logotipo MySQL.",
              },
            },
          },
          {
            id: 3,
            name: "SQL",
            img: {
              primary: require("../assets/technology/sql.svg").default,
              light: require("../assets/technology/sql-light.svg").default,
              dark: require("../assets/technology/sql-dark.svg").default,
              alt: {
                en: "SQL logo.",
                pt: "Logotipo SQL.",
              },
            },
          },
          {
            id: 4,
            name: "PL/SQL",
            img: {
              primary: require("../assets/technology/oracle.svg").default,
              light: require("../assets/technology/oracle-light.svg").default,
              dark: require("../assets/technology/oracle-dark.svg").default,
              alt: {
                en: "PL/SQL logo.",
                pt: "Logotipo PL/SQL.",
              },
            },
          },
        ],
      },
    },
  },
  portfolio: {
    pageTitle: {
      en: "Portfolio",
      pt: "Portfólio"
    },
    project: {
      aboutProject: {
        en: "About this project",
        pt: "Sobre este projeto"
      },
      projectTechnologies: {
        en: "Project technologies",
        pt: "Tecnologias do projeto"
      },
      noDataFound: {
        en: "No projects found.",
        pt: "Nenhum projeto encontrado."
      },
      resources: {
        en: "Resources",
        pt: "Recursos"
      },
      list: [
        {
          id: 1,
          name: "Boltz Carregadores",
          description: {
            en: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ratione iusto doloremque, unde vitae! Molestias quo laboriosam accusantium ea asperiores necessitatibus sunt cupiditate atque autem, ab fugit cum enim.",
            pt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ratione iusto doloremque, unde vitae! Molestias quo laboriosam accusantium ea asperiores necessitatibus sunt cupiditate atque autem, ab fugit cum enim."
          },
          img: require("../assets/banner/boltz-carregadores.jpg"),
          alt: "Boltz Carregadores",
          url: "boltz-carregadores",
          category: ["All", "Front-end", "UI Design"],
          technologies: [
            "Figma",
            "HTML5",
            "React.js",
            "TypeScript",
            "Styled Components",
            "React Router DOM",
            "Hooks",
            "Context",
            "React Scroll",
            "usehooks-ts",
          ],
          resources: {
            webSite: "https://www.boltzcarregadores.com.br",
            gitHub: "",
            figma:
              "https://www.figma.com/file/fsN99ba8jI6J2vMNrOtB7A/Boltz-Carregadores?node-id=25%3A174",
          },
        },
        {
          id: 2,
          name: "Project 2",
          description: {
            en: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ratione iusto doloremque, unde vitae! Molestias quo laboriosam accusantium ea asperiores necessitatibus sunt cupiditate atque autem, ab fugit cum enim.",
            pt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ratione iusto doloremque, unde vitae! Molestias quo laboriosam accusantium ea asperiores necessitatibus sunt cupiditate atque autem, ab fugit cum enim."
          },
          img: require("../assets/banner/2.jpg"),
          alt: "Project 2",
          url: "project-2",
          category: ["All", "UI Design"],
          technologies: ["TECH1", "TECH2", "TECH3"],
          resources: {
            webSite: "",
            gitHub: "",
            figma: "",
          },
        },
        {
          id: 3,
          name: "Project 3",
          description: {
            en: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ratione iusto doloremque, unde vitae! Molestias quo laboriosam accusantium ea asperiores necessitatibus sunt cupiditate atque autem, ab fugit cum enim.",
            pt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid ratione iusto doloremque, unde vitae! Molestias quo laboriosam accusantium ea asperiores necessitatibus sunt cupiditate atque autem, ab fugit cum enim."
          },
          img: require("../assets/banner/3.jpg"),
          alt: "Project 3",
          url: "project-3",
          category: ["All", "Front-end"],
          technologies: ["TECH1", "TECH2", "TECH3"],
          resources: {
            webSite: "",
            gitHub: "",
            figma: "",
          },
        },
      ],
    }
  },
  blog: {
    name: "Blog",
  },
  contact: {
    name: "Contact",
  },
  login: {
    name: "Login",
  },
  button: {
    back: {
      en: "Back",
      pt: "Voltar"
    },
    viewMore: {
      en: "View more",
      pt: "Ver mais"
    },
  }
};
