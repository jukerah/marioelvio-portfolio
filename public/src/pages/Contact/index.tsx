import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { pageInfo } from '../../data/PageInfo';
import { svgs } from '../../data/SvgList';

import { TitlePage } from '../../components/TitlePage';
import { Form } from './Form';

interface Props {
  page: any;
}

export const ContactPage = (props: Props) => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;

  const contact = {
    title: pageInfo.contact.pageTitle[ lang as keyof typeof pageInfo.contact.pageTitle ],
    info: {
      description: pageInfo.contact.info[ lang as keyof typeof pageInfo.contact.info ],
      phone: pageInfo.about.personalDetails.phone,
      email: pageInfo.about.personalDetails.email,
      linkedin: {
        text: pageInfo.about.personalDetails.linkedin.text,
        url: pageInfo.about.personalDetails.linkedin.url,
      },
      github: {
        text: pageInfo.about.personalDetails.linkedin.text,
        url: pageInfo.about.personalDetails.linkedin.url,
      }
    }
  }

  return (
    <C.ContactSection
      ref={props.page}
      mode={theme.mode.status}
      background={(theme.mode.status === 'dark')
        ? svgs.background.contact.dark
        : svgs.background.contact.light
      }
    >      
      <C.Container>
        <TitlePage title={contact.title} />
        
        <C.ContainerInfoForm isMenuOpen={theme.isMenuOpen.status}>
          <C.Info
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
          >
            <p className='description'>{contact.info.description}</p>
            <ul>
              <li>
                {svgs.systemIcon.phone}
                <a href={`tel:${contact.info.phone}`} target='_blank' rel='noopener noreferrer'>
                  {contact.info.phone}
                </a>
              </li>
              <li>
                {svgs.systemIcon.mail}
                <a href={`mailto:${contact.info.email}`} target='_blank' rel='noopener noreferrer'>
                  {contact.info.email}
                </a>
              </li>
              <li>
                {svgs.systemIcon.linkedin}
                <a href={contact.info.linkedin.url} target='_blank' rel='noopener noreferrer'>
                  {contact.info.linkedin.text}
                </a>
              </li>
              <li>
                {svgs.systemIcon.github}
                <a href={contact.info.github.url} target='_blank' rel='noopener noreferrer'>
                  {contact.info.github.text}
                </a>
              </li>
            </ul>
          </C.Info>

          <Form />
        </C.ContainerInfoForm>
      </C.Container>
    </C.ContactSection>
  );
};
