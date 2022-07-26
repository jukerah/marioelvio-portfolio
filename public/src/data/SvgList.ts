import { technologies } from './TechnologyList';

export const svgs = {
    logo: {
        marioElvio: {
            src: require('../assets/system/logo/marioelvio-logo.svg').default,
            altPt: 'Logotipo Mario Elvio, Mario na cor branca, Elvio na cor verde e uma cor cinza escuro de fundo.',
            altEn: 'Mario Elvio logo, Mario in white, Elvio in green and a dark gray background color.'
        },
        adminPanel: {
            src: require('../assets/system/logo/adminpanel-logo.svg').default,
            altPt: 'Logotipo painel de administração, administração na cor branca, painel na cor verde e uma cor cinza escuro de fundo.',
            altEn: 'Admin panel logo, white admin, green panel and a dark gray background color.'
        }
    },
    avatar: {
        src: require('../assets/system/avatar/avatar.svg').default,
        altPt: 'Mario Elvio utilizando o notebook.',
        altEn: 'Mario Elvio using the notebook.'
    },
    background : {
        switch: require('../assets/system/background/switch-mode.svg').default
    },
    country: {
        brazil: require('../assets/country/br.svg').default,
        unitedStates: require('../assets/country/us.svg').default,
        spain: require('../assets/country/es.svg').default,
    },
    systemIcon: {
        id: {
            light: require('../assets/system/icon/id-light.svg').default,
            dark: require('../assets/system/icon/id-dark.svg').default,
            altPt: 'Ícone documento de identidade.',
            altEn: 'Identity document icon.'
        },
        mobile: {
            light: require('../assets/system/icon/mobile-light.svg').default,
            dark: require('../assets/system/icon/mobile-dark.svg').default,
            altPt: 'Ícone dispositivo móvel.',
            altEn: 'mobile device icon.'
        },
        database: {
            light: require('../assets/system/icon/database-light.svg').default,
            dark: require('../assets/system/icon/database-dark.svg').default,
            altPt: 'Ícone banco de dados.',
            altEn: 'Database icon.'
        },
        softSkill: {
            light: require('../assets/system/icon/soft-skill-light.svg').default,
            dark: require('../assets/system/icon/soft-skill-dark.svg').default,
            altPt: 'Ícone habilidades interpessoais.',
            altEn: 'Soft skill icon.'
        },
        hardSkill: {
            light: require('../assets/system/icon/hard-skill-light.svg').default,
            dark: require('../assets/system/icon/hard-skill-dark.svg').default,
            altPt: 'Ícone habilidades técnicas.',
            altEn: 'Hard skill icon.'
        },
        certificate: {
            light: require('../assets/system/icon/certificate-light.svg').default,
            dark: require('../assets/system/icon/certificate-dark.svg').default,
            altPt: 'Ícone certificado.',
            altEn: 'Certificate icon.'
        },
        myInterests: {
            light: require('../assets/system/icon/my-interest-light.svg').default,
            dark: require('../assets/system/icon/my-interest-dark.svg').default,
            altPt: 'Ícone meus interesses.',
            altEn: 'My interests icon.'
        },
        work: {
            light: require('../assets/system/icon/work-light.svg').default,
            dark: require('../assets/system/icon/work-dark.svg').default,
            altPt: 'Ícone trabalho.',
            altEn: 'Work icon.'
        },
        education: {
            light: require('../assets/system/icon/education-light.svg').default,
            dark: require('../assets/system/icon/education-dark.svg').default,
            altPt: 'Ícone educação.',
            altEn: 'Education icon.'
        },
        course: {
            light: require('../assets/system/icon/course-light.svg').default,
            dark: require('../assets/system/icon/course-dark.svg').default,
            altPt: 'Ícone curso.',
            altEn: 'Course icon.'
        },
        backEnd: {
            light: require('../assets/system/icon/backend-light.svg').default,
            dark: require('../assets/system/icon/backend-dark.svg').default,
            altPt: 'Ícone back-end.',
            altEn: 'Back-end icon.'
        },
        frontEnd: {
            light: require('../assets/system/icon/frontend-light.svg').default,
            dark: require('../assets/system/icon/frontend-dark.svg').default,
            altPt: 'Ícone front-end.',
            altEn: 'Front-end icon.'
        },
        tool: {
            light: require('../assets/system/icon/tool-light.svg').default,
            dark: require('../assets/system/icon/tool-dark.svg').default,
            altPt: 'Ícone ferramentas.',
            altEn: 'Tool icon.'
        },
        loading: {
            light: require('../assets/system/icon/loading-light.svg').default,
            dark: require('../assets/system/icon/loading-dark.svg').default,
            altPt: 'Ícone carregamento.',
            altEn: 'Loading icon.'
        },
        mapPin: {
            light: require('../assets/system/icon/map-pin-light.svg').default,
            dark: require('../assets/system/icon/map-pin-dark.svg').default,
            altPt: 'Ícone ponto no mapa.',
            altEn: 'Map pin icon.'
        },
        home: {
            light: require('../assets/system/icon/home-light.svg').default,
            dark: require('../assets/system/icon/home-dark.svg').default,
            altPt: 'Ícone início.',
            altEn: 'Home icon.'
        },
        send: {
            light: require('../assets/system/icon/send-light.svg').default,
            dark: require('../assets/system/icon/send-dark.svg').default,
            altPt: 'Ícone enviar.',
            altEn: 'Send icon.'
        },
        chevronDown: {
            light: require('../assets/system/icon/chevron-down-light.svg').default,
            dark: require('../assets/system/icon/chevron-down-dark.svg').default,
            altPt: 'Ícone seta para baixo.',
            altEn: 'Chevron down icon.'
        },
        chevronUp: {
            light: require('../assets/system/icon/chevron-up-light.svg').default,
            dark: require('../assets/system/icon/chevron-up-dark.svg').default,
            altPt: 'Ícone seta para cima.',
            altEn: 'Chevron up icon.'
        },
        chevronLeft: {
            light: require('../assets/system/icon/chevron-left-light.svg').default,
            dark: require('../assets/system/icon/chevron-left-dark.svg').default,
            altPt: 'Ícone seta para esquerda.',
            altEn: 'Chevron left icon.'
        },
        chevronRight: {
            light: require('../assets/system/icon/chevron-right-light.svg').default,
            dark: require('../assets/system/icon/chevron-right-dark.svg').default,
            altPt: 'Ícone seta para direita.',
            altEn: 'Chevron right icon.'
        },
        about: {
            light: require('../assets/system/icon/about-light.svg').default,
            dark: require('../assets/system/icon/about-dark.svg').default,
            altPt: 'Ícone Sobre.',
            altEn: 'About icon.'
        },
        phone: {
            light: require('../assets/system/icon/phone-light.svg').default,
            dark: require('../assets/system/icon/phone-dark.svg').default,
            altPt: 'Ícone telefone.',
            altEn: 'Phone icon.'
        },
        magnifyingGlass: {
            light: require('../assets/system/icon/magnifying-glass-light.svg').default,
            dark: require('../assets/system/icon/magnifying-glass-dark.svg').default,
            altPt: 'Ícone lupa.',
            altEn: 'Magnifying glass icon.'
        },
        book: {
            light: require('../assets/system/icon/book-light.svg').default,
            dark: require('../assets/system/icon/book-dark.svg').default,
            altPt: 'Ícone livro.',
            altEn: 'Book icon.'
        },
        mail: {
            light: require('../assets/system/icon/mail-light.svg').default,
            dark: require('../assets/system/icon/mail-dark.svg').default,
            altPt: 'Ícone e-mail.',
            altEn: 'E-mail icon.'
        },
        login: {
            light: require('../assets/system/icon/login-light.svg').default,
            dark: require('../assets/system/icon/login-dark.svg').default,
            altPt: 'Ícone logar.',
            altEn: 'Login icon.'
        },
        logout: {
            light: require('../assets/system/icon/logout-light.svg').default,
            dark: require('../assets/system/icon/logout-dark.svg').default,
            altPt: 'Ícone deslogar.',
            altEn: 'Logout icon.'
        },
        pencil: {
            light: require('../assets/system/icon/pencil-light.svg').default,
            dark: require('../assets/system/icon/pencil-dark.svg').default,
            altPt: 'Ícone caneta.',
            altEn: 'Pencil icon.'
        },
        download: {
            light: require('../assets/system/icon/download-light.svg').default,
            dark: require('../assets/system/icon/download-dark.svg').default,
            altPt: 'Ícone baixar.',
            altEn: 'Download icon.'
        },
        dotsVertical: {
            light: require('../assets/system/icon/dots-vertical-light.svg').default,
            dark: require('../assets/system/icon/dots-vertical-dark.svg').default,
            altPt: 'Ícone opções.',
            altEn: 'Dots vertical icon.'
        },
        delete: {
            red: require('../assets/system/icon/delete-light-red.svg').default,
            darkRed: require('../assets/system/icon/delete-dark-red.svg').default,
            dark: require('../assets/system/icon/delete-dark.svg').default,
            altPt: 'Ícone deletar.',
            altEn: 'Delete icon.'
        },
        edit: {
            light: require('../assets/system/icon/edit-light.svg').default,
            dark: require('../assets/system/icon/edit-dark.svg').default,
            altPt: 'Ícone editar.',
            altEn: 'Edit icon.'
        },
        save: {
            light: require('../assets/system/icon/save-light.svg').default,
            dark: require('../assets/system/icon/save-dark.svg').default,
            altPt: 'Ícone salvar.',
            altEn: 'Save icon.'
        },
        slideMode: {
            light: require('../assets/system/icon/slide-mode-light.svg').default,
            dark: require('../assets/system/icon/slide-mode-dark.svg').default,
            altPt: 'Ícone modo deslizar.',
            altEn: 'Slide icon.'
        },
        gridMode: {
            light: require('../assets/system/icon/grid-mode-light.svg').default,
            dark: require('../assets/system/icon/grid-mode-dark.svg').default,
            altPt: 'Ícone modo lista.',
            altEn: 'List mode icon.'
        },
        link: {
            light: require('../assets/system/icon/link-light.svg').default,
            dark: require('../assets/system/icon/link-dark.svg').default,
            altPt: 'Ícone link.',
            altEn: 'Link icon.'
        },
        close: {
            light: require('../assets/system/icon/close-light.svg').default,
            dark: require('../assets/system/icon/close-dark.svg').default,
            altPt: 'Ícone fechar.',
            altEn: 'Close icon.'
        },
        alertTriangle: {
            light: require('../assets/system/icon/alert-triangle-light-red.svg').default,
            dark: require('../assets/system/icon/alert-triangle-dark-red.svg').default,
            altPt: 'Ícone triângulo de alerta.',
            altEn: 'Alert triangle icon.'
        },
        plus: {
            light: require('../assets/system/icon/plus-light.svg').default,
            dark: require('../assets/system/icon/plus-dark.svg').default,
            altPt: 'Ícone mais.',
            altEn: 'Plus icon.'
        },
        folder: {
            light: require('../assets/system/icon/folder-light.svg').default,
            dark: require('../assets/system/icon/folder-dark.svg').default,
            altPt: 'Ícone pasta.',
            altEn: 'Folder icon.'
        },
        article: {
            light: require('../assets/system/icon/article-light.svg').default,
            dark: require('../assets/system/icon/article-dark.svg').default,
            altPt: 'Ícone artigo.',
            altEn: 'Article icon.'
        },
        youtube: {
            light: require('../assets/system/icon/youtube-light.svg').default,
            dark: require('../assets/system/icon/youtube-dark.svg').default,
            altPt: 'Ícone Youtube.',
            altEn: 'Youtube icon.'
        },
        linkedin: {
            light: require('../assets/system/icon/linkedin-light.svg').default,
            dark: require('../assets/system/icon/linkedin-dark.svg').default,
            altPt: 'Ícone Linkedin.',
            altEn: 'Linkedin icon.'
        },
        github: {
            light: require('../assets/system/icon/github-light.svg').default,
            dark: require('../assets/system/icon/github-dark.svg').default,
            altPt: 'Ícone Github.',
            altEn: 'Github icon.'
        },
        change: {
            light: require('../assets/system/icon/change-light.svg').default,
            dark: require('../assets/system/icon/change-dark.svg').default,
            altPt: 'Ícone trocar.',
            altEn: 'Change icon.'
        },
        technology: {
            light: require('../assets/system/icon/technology-light.svg').default,
            dark: require('../assets/system/icon/technology-dark.svg').default,
            altPt: 'Ícone tecnologia.',
            altEn: 'Technology icon.'
        }
    },
    socialIcon: {
        whatsapp: {
            primary: require('../assets/social/whatsapp-primary.svg').default,
            light: require('../assets/social/whatsapp-light.svg').default,
            dark: require('../assets/social/whatsapp-dark.svg').default,
            altPt: 'Botão WhatsApp.',
            altEn: 'Button WhatsApp.'
        },
        linkedin: {
            primary: require('../assets/social/linkedin-primary.svg').default,
            light: require('../assets/social/linkedin-light.svg').default,
            dark: require('../assets/social/linkedin-dark.svg').default,
            altPt: 'Botão Linkedin.',
            altEn: 'Button Linkedin.'
        },
        youtube: {
            primary: require('../assets/social/youtube-primary.svg').default,
            light: require('../assets/social/youtube-light.svg').default,
            dark: require('../assets/social/youtube-dark.svg').default,
            altPt: 'Botão Youtube.',
            altEn: 'Button Youtube.'
        },
        github: {
            primary: require('../assets/social/github-primary.svg').default,
            light: require('../assets/social/github-light.svg').default,
            dark: require('../assets/social/github-dark.svg').default,
            altPt: 'Botão GitHub.',
            altEn: 'Button GitHub.'
        }
    },
    technologies
};