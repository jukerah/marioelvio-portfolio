import { useContext, useEffect } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

import { TitlePage } from '../../components/TitlePage';
import { pageInfo } from '../../data/PageInfo';
import { Form } from './Form';
import { Footer } from '../../components/Footer';

export interface Props {
  page: string;
}

export const ContactPage = (props: Props) => {
  const { theme, dispatch } = useContext(Context);

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
        <TitlePage title={'Contact'} />
        
        <C.ContainerInfoForm isMenuOpen={theme.isMenuOpen.status}>
          <C.Info
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
          >
            <p className='description'>Get in touch through the form or through one of our contacts. I will reply as soon as possible.</p>
            <ul>
              <li>
                {svgs.systemIcon.phone}
                <a href={`tel:${pageInfo.about.personalDetails.phone}`} target='_blank' rel='noopener noreferrer'>
                  {pageInfo.about.personalDetails.phone}
                </a>
              </li>
              <li>
                {svgs.systemIcon.mail}
                <a href={`mailto:${pageInfo.about.personalDetails.email}`} target='_blank' rel='noopener noreferrer'>
                  {pageInfo.about.personalDetails.email}
                </a>
              </li>
              <li>
                {svgs.systemIcon.linkedin}
                <a href={pageInfo.about.personalDetails.linkedin.url} target='_blank' rel='noopener noreferrer'>
                  {pageInfo.about.personalDetails.linkedin.text}
                </a>
              </li>
              <li>
                {svgs.systemIcon.github}
                <a href={pageInfo.about.personalDetails.github.url} target='_blank' rel='noopener noreferrer'>
                  {pageInfo.about.personalDetails.github.text}
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
