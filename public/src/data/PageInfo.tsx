import { PageDataType } from "../types/PageInfoType";

export const pageInfo: PageDataType = {
  development: {
    en: "Site is under development, follow the news here or GitHub:",
    pt: "Site em desenvolvimento, acompanhe as novidades aqui ou no GitHub:"
  },
  htmlTitle: "Mario Elvio | Front-end developer",
  header: {
    logo: {
      en: "Mario Elvio logo",
      pt: "Logotipo Mario Elvio"
    }
  },
  home: {
    pageTitle: {
      en: "Home",
      pt: "Início"
    },
    info: {
      hello: {
        en: <span className="title-hello">Hi there!</span>,
        pt: <span className="title-hello">Olá!</span>
      },
      name: {
        en: <span className="title-name">
              I'm Mario <span className="accent-color">Elvio</span>
            </span>,
        pt: <span className="title-name">
              Eu sou Mario <span className="accent-color">Elvio</span>
            </span>,
      },
      work: {
        en: <span className="title-work">
              <span className="accent-color">Front-end</span> developer
            </span>,
        pt: <span className="title-work">
            Desenvolvedor <span className="accent-color">Front-end</span>
          </span>
      }
    }
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
        en: "Hello, my name is Mario Elvio, I'm 28 years old, I live in Araraquara, a city in the interior of São Paulo, I consider myself an extremely calm and observant person, I love spending my free time with my family, reading and studying things that add knowledge, I love watching science fiction movies and series. My passion for technology started when I was 6 years old when I got my first computer, it was very old, but it was enough to hold me in this incredible digital world. In 2020 I decided to migrate my career and today I can't see my future away from the lines of code.",
        pt: "Olá, me chamo Mario Elvio, tenho 28 anos, moro em Araraquara uma cidade no interior de São Paulo, me considero uma pessoa extremamente calma e observadora, adoro passar meu tempo livre com a família, lendo e estudando coisas que agreguem conhecimento, adoro assistir filmes e series de ficção cientifica. Minha paixão por tecnologia começou aos  6 anos de idade quando ganhei meu primeiro computador, ele era bem velhinho, mas foi o suficiente para me prender nesse incrível mundo digital. Em 2020 decidi migrar de carreira e hoje eu não consigo ver meu futuro longe das linhas de códigos.",
      },
    },
    professionalResume: {
      title: {
        en: "Professional resume",
        pt: "Resumo profissional",
      },
      resume: {
        en: "Dedicated professional with 1 year of experience and skills in modern technologies, self-taught, always looking for new knowledge and super adaptive, no problems in learning new technologies, great relationship of friendship and communication in all the teams I've worked with, I love sharing knowledge between teammates. I believe in the theory that there isn't something we can't do, there's something we haven't learned yet, and if I don't know, I'll do my best to find a solution.",
        pt: "Profissional dedicado com  1 ano de experiência e habilidades em tecnologias modernas, autodidata, sempre em busca de novos conhecimentos e super adaptativo, sem problemas em aprender novas tecnologias, ótima relação de amizade e comunicação em todas as equipes que já trabalhei, adoro compartilhar conhecimento entre colegas de equipe. Acredito na teoria de que não existe algo que não possamos fazer, existe algo que ainda não aprendemos, e se eu não sei, dou o meu melhor para achar uma solução.",
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
        en: "Courses",
        pt: "Cursos",
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
          college: "Devmedia",
          course: {
            en: "TypeScript, React.js and Node.js.",
            pt: "TypeScript, React.js e Node.js.",
          },
        },
        {
          id: 5,
          start: "2021",
          theEnd: "2021",
          college: "Devmedia",
          course: {
            en: "HTML5, CSS3, programming logic, JavaScript, SQL, .NET, C#, database Modeling, MVC, REST, GIT and GITHUB.",
            pt: "HTML5, CSS3, lógica de programação, JavaScript, SQL, .NET, C#, modelagem de banco de dados, MVC, REST, GIT e GITHUB.",
          },
        },
        {
          id: 6,
          start: "2021",
          theEnd: "2021",
          college: "DIGITAL INNOVATION ONE",
          course: {
            en: "HTML5, CSS3 and programming logic.",
            pt: "HTML5, CSS3 e lógica de programação.",
          },
        },
        {
          id: 7,
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
        en: "certifications",
        pt: "Certificações",
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
        en: "Soft skills are skills and abilities related to human behavior. In this way, they are considered necessary for a professional to achieve his professional goals, what he establishes for his career.",
        pt: "As habilidades interpessoais são competências e habilidades relacionadas ao comportamento humano. Dessa forma, são consideradas necessárias para que um profissional alcance os seus objetivos profissionais, aquilo que estabelece para a sua carreira.",
      },
      skill: [
        {
          id: 1,
          name: {
            en: "Communication",
            pt: "Comunicação",
          },
          description: {
            en: "I am a person who has no problem communicating with other people, always giving my best to be efficient and the receiver always understands what was said. I love to improve this skill by teaching and answering questions from work friends.",
            pt: "Sou uma pessoa que não tem problemas em comunicar-se com outras pessoas, sempre entregando o meu máximo para ser eficiente e o receptor sempre entender o que foi dito. Adoro aprimorar essa habilidade ensinando e tirando dúvidas de amigos de trabalho.",
          },
        },
        {
          id: 2,
          name: {
            en: "Teamwork",
            pt: "Trabalho em Equipe",
          },
          description: {
            en: "I love working in a team and solving a problem that I have to challenge myself. In all the teams I've worked on to date, I've always had a good relationship of friendship and I'm always helping my co-workers.",
            pt: "Adoro trabalhar em equipe e resolver um problema que tenho que desafiar-me. Em todas as equipes em que já trabalhei até hoje, sempre tive uma boa relação de amizade e sempre estou ajudando os colegas de trabalho.",
          },
        },
        {
          id: 3,
          name: {
            en: "Creativity",
            pt: "Criatividade",
          },
          description: {
            en: "Being creative is the process of change, development and personal evolution. In all my projects and works, I always dedicate myself to the maximum to deliver something original and I always imagine new solutions for future problems.",
            pt: "Ser criativo  é o processo de mudança, desenvolvimento e evolução pessoal. Em todos meus projetos e trabalhos sempre me dedico ao máximo para entregar algo original e sempre imagino novas soluções para futuros problemas.",
          },
        },
        {
          id: 4,
          name: {
            en: "Dedication",
            pt: "Dedicação",
          },
          description: {
            en: "Everything I take to do, whether study or work, I always do with dedication and hard work, giving my best for the best result.",
            pt: "Tudo que pego para fazer, sendo estudo ou trabalho, faço sempre com dedicação e muito emprenho, entregando meu máximo para o melhor resultado.",
          },
        },
        {
          id: 5,
          name: {
            en: "Analytical Ability",
            pt: "Habilidade analítica",
          },
          description: {
            en: "This skill I have been improving for the last 11 years, I work with data and information, with a critical sense, bringing solutions to solve everyday challenges and always base on facts before making any decision.",
            pt: "Está habilidade venho aprimorando durante os últimos 11 anos, trabalho com dados e informações, com senso crítico, trazendo soluções para resolver os desafios do dia a dia e sempre baseio em fatos antes de tomar qualquer decisão.",
          },
        },
        {
          id: 6,
          name: {
            en: "Flexibility",
            pt: "Flexibilidade",
          },
          description: {
            en: "I'm always adapting to changes, I love receiving criticism and turning it into reflections for improvement, learning and new opportunities, I'm receptive and I don't lose focus on goals.",
            pt: "Estou sempre me adaptando as mudanças, adoro receber critícas e transformar em reflexões de melhoria, aprendizado e novas oportunidades, sou receptivo e não perco o foco nos objetivos.",
          },
        },
        {
          id: 7,
          name: {
            en: "Ethic",
            pt: "Ética",
          },
          description: {
            en: "I am a good person and I always seek to do the right thing. This is one of my main skills, because it is my attitudes that demonstrate who I really am.",
            pt: "Sou uma pessoa do bem e que busca sempre fazer o certo. Está é uma das minhas principais habilidades, pois são minhas atitudes que demonstram quem eu realmente sou.",
          },
        },
        {
          id: 8,
          name: {
            en: "Collaborative Spirit",
            pt: "Espírito Colaborativo",
          },
          description: {
            en: "I believe that collaboration is certainly not suitable for every task and situation. Collaboration is, however, important to get the best result for multifaceted projects and complex problems. To be successful, it is important to identify when and how to collaborate. I also recognize my limitations and ask for help when needed or provide help to those who need it.",
            pt: "Acredito que a colaboração certamente não é adequada para todas as tarefas e situações. A colaboração é, no entanto, importante para obter o melhor resultado para projetos multifacetados e problemas complexos. Para que seja bem sucedido, é importante identificar quando e como colaborar. Também reconheço minhas limitações e peço ajuda quando necessário ou presto ajuda a quem precisar.",
          },
        },
        {
          id: 9,
          name: {
            en: "Emotional Stability",
            pt: "Estabilidade Emocional",
          },
          description: {
            en: "A skill that I've started to hone in the last few years, when I reach the limit, I pause, reflect, and from there, I make a decision on what to do next. One technique I also use is the pomodoro.",
            pt: "Uma habilidade que comecei aprimorar nos últimos anos, quando chego ao limite, faço uma pausa, reflito e, a partir daí, tomo uma decisão sobre as atitudes seguintes. Uma técnica que também utilizo é o pomodoro.",
          },
        },
        {
          id: 10,
          name: {
            en: "Self-Teached",
            pt: "Autodidata",
          },
          description: {
            en: "I started my study trajectory in 2020, due to college and courses being online, I started to improve my ability to study and learn on my own. Today I love studying reading technology documentation and consuming forum content.",
            pt: "Iniciei minha trajetória de estudos em 2020, devido a faculdade e cursos serem online, comecei aperfeiçoar minha habilidade de estudar e aprender sozinho. Hoje adoro estudar lendo documentações de tecnologias e consumindo conteúdos de fóruns.",
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
        en: "Hard skills are skills and technical knowledge, acquired through certifications, degrees, diplomas and proof of experience in a particular area of expertise.",
        pt: "As habilidades técnicas são habilidades e conhecimentos técnicos, adquiridas por meio de certificações, graduações, diplomas e comprovações de experiência em determinada área de atuação."
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
          category: ["Front-end", "UI Design"],
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
          category: ["UI Design"],
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
          category: ["Front-end"],
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
    pageTitle: {
      en: "Blog",
      pt: "Blog"
    },
  },
  contact: {
    pageTitle: {
      en: "Contact",
      pt: "Contato"
    },
    info: {
      en: "Get in touch through the form or through one of our contacts. I will reply as soon as possible.",
      pt: "Entre em contato através do formulário ou através de um de nossos contatos. Eu responderei o mais breve possível."
    },
        form: {
            name: {
              placeHolder: {
                en: "Name*",
                pt: "Nome*"
              },
              alert: {
                empty: {
                  en: "Fill in the name field!",
                  pt: "Preencha o campo do nome!"
                }
              }
            },
            email: {
              placeHolder: {
                en: "Email*",
                pt: "E-mail*"
              },
              alert: {
                empty: {
                  en: "Fill in the email field!",
                  pt: "Preencha o campo de e-mail!"
                },
                invalid: {
                  en: "Invalid email!",
                  pt: "E-mail inválido!"
                }
              }
            },
            phone: {
              placeHolder: {
                en: "Phone*",
                pt: "Telefone*"
              },
              alert: {
                empty: {
                  en: "Fill in the phone field!",
                  pt: "Preencha o campo do telefone!"
                },
                invalid: {
                  en: "Invalid phone!",
                  pt: "Telefone inválido!"
                }
              },
              ddiList: [ '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52', '+53', '+54', '+55', '+56', '+57', '+58', '+60', '+61', '+62', '+63', '+64', '+65', '+66', '+81', '+82', '+84', '+86', '+90', '+91', '+92', '+93', '+94', '+95', '+98', '+212', '+213', '+216', '+218', '+220', '+221', '+222', '+223', '+224', '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232', '+233', '+234', '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242', '+243', '+244', '+245', '+246', '+247', '+248', '+249', '+250', '+251', '+252', '+253', '+254', '+255', '+256', '+257', '+258', '+260', '+261', '+262', '+263', '+264', '+265', '+266', '+267', '+268', '+269', '+269', '+290', '+290', '+291', '+297', '+298', '+299', '+350', '+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359', '+370', '+371', '+372', '+373', '+374', '+375', '+376', '+377', '+378', '+379', '+380', '+381', '+382', '+385', '+386', '+387', '+388', '+389', '+420', '+421', '+423', '+500', '+501', '+502', '+503', '+504', '+505', '+506', '+507', '+508', '+509', '+590', '+591', '+592', '+593', '+594', '+595', '+596', '+597', '+598', '+599', '+670', '+672', '+673', '+674', '+675', '+676', '+677', '+678', '+679', '+680', '+681', '+682', '+683', '+685', '+686', '+687', '+688', '+689', '+690', '+691', '+692', '+800', '+808', '+850', '+852', '+853', '+855', '+856', '+870', '+878', '+880', '+881', '+882', '+883', '+886', '+888', '+960', '+961', '+962', '+963', '+964', '+965', '+966', '+967', '+968', '+970', '+971', '+972', '+973', '+974', '+975', '+976', '+977', '+979', '+991', '+992', '+993', '+994', '+995', '+996', '+998' ]
            },
            message: {
              placeHolder: {
                en: "Message*",
                pt: "Mensagem*"
              },
              alert: {
                empty: {
                  en: "Fill in the message field!",
                  pt: "Preencha o campo da mensagem!"
                }
              },
              send: {
                en: "Message sent successfully!",
                pt: "Mensagem enviada com sucesso!",
              }
            },
        }
  },
  login: {
    pageTitle: {
      en: "Login",
      pt: "Entrar"
    },
  },
  notFound: {
    pageTitle: {
      en: "Error 404",
      pt: "Erro 404"
    },
    text: {
      en: "Oops! Page not found.",
      pt: "Oops! Página não encontrada."
    },
  },
  footer: {
    en: "© 2021-2022 Mario Elvio. All rights reserved.",
    pt: "© 2021-2022 Mario Elvio. Todos os direitos reservados."
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
    moreAboutMe: {
      en: "More about me",
      pt: "Mais sobre mim"
    },
    myPortfolio: {
      en: "My portfolio",
      pt: "Meu porfólio"
    },
    login: {
      en: "Login",
      pt: "Entrar"
    },
    sendMessage: {
      en: "Send Message",
      pt: "Enviar Mensagem"
    }
  }
};
