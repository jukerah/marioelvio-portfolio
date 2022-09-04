import { useRef } from "react";
import * as C from "./styles";

import { HomePage } from "../Home";
import { AboutPage } from "../About";
import { PortfolioPage } from "../Portfolio";
import { ContactPage } from "../Contact";
import { Footer } from "../../components/Footer";
import { useEffect } from "react";

interface Props {
  page: any;
  isActivedHomePage?: string;
}

export const Main = (props: Props) => {
  const homePage = useRef(props.page);
  const aboutPage = useRef(props.page);
  const portfolioPage = useRef(props.page);
  const contactPage = useRef(props.page);
  const isActivedHomePage = props.isActivedHomePage === 'home' ? 'home' : ''

  /*useEffect(() => {
    if (props.page === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });*/

  useEffect(() => {
    switch (props.page) {
      case 'home':
        homePage.current.scrollIntoView({ behavior: 'smooth'});
        break;
      case 'about':
        aboutPage.current.scrollIntoView({ behavior: 'smooth'});
        break;
      case 'portfolio':
        portfolioPage.current.scrollIntoView({ behavior: 'smooth'});
        break;
      case 'contact':
        contactPage.current.scrollIntoView({ behavior: 'smooth'});
        break;
    }  
  },[props.page]);
 
  return (
    <C.Main>
      <HomePage page={homePage} isActivedPage={isActivedHomePage} />
      <AboutPage page={aboutPage} />
      <PortfolioPage page={portfolioPage} />
      <ContactPage page={contactPage} />
      <Footer />
    </C.Main>
  );
};
