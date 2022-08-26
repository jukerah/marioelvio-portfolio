import { useContext, useEffect } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

import { TitlePage } from '../../components/TitlePage';
import { Form } from './Form';
import { Footer } from '../../components/Footer';
import { pageData } from '../../data/PageData';

export interface Props {
  page: string;
}

export const ContactPage = (props: Props) => {
  const { theme, dispatch } = useContext(Context);
  const lang: string = theme.lang.status;

  useEffect(() => {
    if (props.page === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      dispatch({
        type: 'CHANGE_ACTIVE_PAGE',
        payload: {
          status: props.page,
        },
      });
    }
  },[props.page, dispatch, theme.activePage.status]);

  return (
    <C.ContactSection
      mode={theme.mode.status}
      background={(theme.mode.status === 'dark')
        ? svgs.background.contact.dark
        : svgs.background.contact.light
      }
    >      
      <C.Container>
        <TitlePage title={pageData.contact.pageTitle[lang]} />
        
        <C.ContainerInfoForm isMenuOpen={theme.isMenuOpen.status}>
          <C.Info
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
          >
            <p className='description'>{pageData.contact.info[lang]}</p>
            <ul>
              <li>
                {svgs.systemIcon.phone}
                <a href={`tel:${pageData.about.personalDetails.phone}`} target='_blank' rel='noopener noreferrer'>
                  {pageData.about.personalDetails.phone}
                </a>
              </li>
              <li>
                {svgs.systemIcon.mail}
                <a href={`mailto:${pageData.about.personalDetails.email}`} target='_blank' rel='noopener noreferrer'>
                  {pageData.about.personalDetails.email}
                </a>
              </li>
              <li>
                {svgs.systemIcon.linkedin}
                <a href={pageData.about.personalDetails.linkedin.url} target='_blank' rel='noopener noreferrer'>
                  {pageData.about.personalDetails.linkedin.text}
                </a>
              </li>
              <li>
                {svgs.systemIcon.github}
                <a href={pageData.about.personalDetails.github.url} target='_blank' rel='noopener noreferrer'>
                  {pageData.about.personalDetails.github.text}
                </a>
              </li>
            </ul>
          </C.Info>

          <Form />
        </C.ContainerInfoForm>
      </C.Container>

      <Footer />
    </C.ContactSection>
  );
};
