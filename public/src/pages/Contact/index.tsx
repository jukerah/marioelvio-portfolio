import { useContext, useEffect, useState } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";
import { TitlePage } from "../../components/TitlePage";
import { pageInfo } from "../../data/PageData";
import { svgs } from "../../data/SvgList";
import { Footer } from "../../components/Footer";

export const ContactPage = (props: any) => {
  const { theme, dispatch } = useContext(Context);
  const [ nameAlert/*, setNameAlert*/ ] = useState<string>('Please fill in the name field');
  const [ emailAlert/*, setEmailAlert*/ ] = useState<string>('');
  const [ phoneAlert/*, setPhoneAlert*/ ] = useState<string>('Please fill in the phone field');
const [ messageAlert/*, setMessageAlert*/ ] = useState<string>('');

  useEffect(() => {
    if (props.page === "contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });

      dispatch({
        type: "CHANGE_ACTIVE_PAGE",
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
            <p className="description">Get in touch through the form or through one of our contacts. I will reply as soon as possible.</p>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={`tel:${pageInfo.about.personalDetails.phone}`} target="_blank" rel="noopener noreferrer">
                  {pageInfo.about.personalDetails.phone}
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7L12 13L21 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={`mailto:${pageInfo.about.personalDetails.email}`} target="_blank" rel="noopener noreferrer">
                  {pageInfo.about.personalDetails.email}
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 3H5.25C4.00736 3 3 4.00736 3 5.25V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V5.25C21 4.00736 19.9926 3 18.75 3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8V8.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={pageInfo.about.personalDetails.linkedin.url} target="_blank" rel="noopener noreferrer">
                  {pageInfo.about.personalDetails.linkedin.text}
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.50001C19.9988 8.30498 19.5325 7.15732 18.7 6.30001C19.0905 5.26198 19.0545 4.11164 18.6 3.10001C18.6 3.10001 17.5 2.80001 15.1 4.40001C13.0672 3.8706 10.9328 3.8706 8.9 4.40001C6.5 2.80001 5.4 3.10001 5.4 3.10001C4.94548 4.11164 4.90953 5.26198 5.3 6.30001C4.46745 7.15732 4.00122 8.30498 4 9.50001C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21M9 19C4.7 20.4 4.7 16.5 3 16L9 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={pageInfo.about.personalDetails.github.url} target="_blank" rel="noopener noreferrer">
                  {pageInfo.about.personalDetails.github.text}
                </a>
              </li>
            </ul>
          </C.Info>

          <C.Form
            action=""
            mode={theme.mode.status}
          >
            <div className="container">
              <div>
                <input name="name" type="text" placeholder="Name*" autoComplete="off" />
                <p>{nameAlert}</p>
              </div>
              <div>
                <input name="email" type="email" placeholder="Email*" autoComplete="off" />
                <p>{emailAlert}</p>
              </div>
              <div>
                <input name="phone" type="text" placeholder="Phone*" autoComplete="off" />
                <p>{phoneAlert}</p>
              </div>
              <div>
                <textarea name="message" rows={7} placeholder="Message*" autoComplete="off"></textarea>
                <p>{messageAlert}</p>
              </div>
            </div>
            <button>
              <p>Send Message</p>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14L21 3" stroke="#374047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.9996 3L14.4996 21C14.4557 21.0957 14.3853 21.1769 14.2966 21.2338C14.208 21.2906 14.1049 21.3209 13.9996 21.3209C13.8943 21.3209 13.7912 21.2906 13.7025 21.2338C13.6139 21.1769 13.5435 21.0957 13.4996 21L9.99958 14L2.99958 10.5C2.90384 10.4561 2.82271 10.3857 2.76583 10.2971C2.70895 10.2084 2.67871 10.1053 2.67871 10C2.67871 9.89468 2.70895 9.79158 2.76583 9.70295C2.82271 9.61431 2.90384 9.54387 2.99958 9.5L20.9996 3Z" stroke="#374047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </C.Form>
        </C.ContainerInfoForm>
      </C.Container>

      <Footer />
    </C.ContactSection>
  );
};
