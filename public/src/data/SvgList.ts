export const svgs = {
    logo: {
        marioElvio: {
            src: require('../assets/system/logo/marioelvio-logo.svg').default,
            alt: 'Mario Elvio logo, Mario in white, Elvio in green and a dark gray background color.'
        },
        adminPanel: {
            src: require('../assets/system/logo/adminpanel-logo.svg').default,
            alt: 'Admin panel logo, white admin, green panel and a dark gray background color.'
        }
    },
    background : {
        switch: require('../assets/system/background/switch-mode.svg').default,
        home: {
            dark: {
                landscape: {
                    small: require('../assets/system/background/home-landscape-small-dark.svg').default,
                    large: require('../assets/system/background/home-landscape-large-dark.svg').default
                },
                portrait: require('../assets/system/background/home-portrait-dark.svg').default
            },
            light: {
                landscape: {
                    small: require('../assets/system/background/home-landscape-small-light.svg').default,
                    large: require('../assets/system/background/home-landscape-large-light.svg').default,
                },
                portrait: require('../assets/system/background/home-portrait-light.svg').default
            }
        }
    },
    country: {
        brazil: require('../assets/country/br.svg').default,
        unitedStates: require('../assets/country/us.svg').default,
        spain: require('../assets/country/es.svg').default,
    }
};