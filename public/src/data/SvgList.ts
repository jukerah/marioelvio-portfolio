export const svgs = {
    background : {
        switch: require('../assets/system/background/switch-mode.svg').default,
        home: {
            landscape: {
                small: require('../assets/system/background/home-landscape-small.svg').default,
                large: require('../assets/system/background/home-landscape-large.svg').default,
            },
            portrait: require('../assets/system/background/home-portrait.svg').default
        },
        contact: {
            light: require('../assets/system/background/contact-light.svg').default,
            dark: require('../assets/system/background/contact-dark.svg').default
        }
    },
    country: {
        brazil: require('../assets/country/br.svg').default,
        unitedStates: require('../assets/country/us.svg').default,
        spain: require('../assets/country/es.svg').default,
    }
};