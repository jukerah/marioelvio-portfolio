import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";

export const PersonalDetails = () => {
  const { theme } = useContext(Context);

  return (
    <C.PersonalDetails>
      <SubTitle subTitle={pageInfo.about.personalDetails.title} />

      <C.ContainerInfo
        mode={theme.mode.status}
        isMenuOpen={theme.isMenuOpen.status}
      >
        <div className="direction">
          <div className="info">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={`tel:${pageInfo.about.personalDetails.phone}`} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.phone}
            </a>
          </div>
          <div className="info">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 7L12 13L21 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={`mailto:${pageInfo.about.personalDetails.email}`} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.email}
            </a>
          </div>
          <div className="info">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.4851 12.0005 21.4851C11.4704 21.4851 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40053 4.60901 7.93874C5.21452 6.47696 6.2399 5.22755 7.55548 4.34852C8.87107 3.46949 10.4178 3.00031 12 3.00031C13.5822 3.00031 15.1289 3.46949 16.4445 4.34852C17.7601 5.22755 18.7855 6.47696 19.391 7.93874C19.9965 9.40053 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657V16.657Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{pageInfo.about.personalDetails.address}</p>
          </div>
        </div>
        <div className="direction">
          <div className="info">
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
          </div>
          <div className="info">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.50001C19.9988 8.30498 19.5325 7.15732 18.7 6.30001C19.0905 5.26198 19.0545 4.11164 18.6 3.10001C18.6 3.10001 17.5 2.80001 15.1 4.40001C13.0672 3.8706 10.9328 3.8706 8.9 4.40001C6.5 2.80001 5.4 3.10001 5.4 3.10001C4.94548 4.11164 4.90953 5.26198 5.3 6.30001C4.46745 7.15732 4.00122 8.30498 4 9.50001C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21M9 19C4.7 20.4 4.7 16.5 3 16L9 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={pageInfo.about.personalDetails.github.url} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.github.text}
            </a>
          </div>
          <div className="info">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 5H7C4.79086 5 3 6.79086 3 9V15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15V9C21 6.79086 19.2091 5 17 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9L15 12L10 15V9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={pageInfo.about.personalDetails.youtube.url} target="_blank" rel="noopener noreferrer">
              {pageInfo.about.personalDetails.youtube.text}
            </a>
          </div>
        </div>
      </C.ContainerInfo>
    </C.PersonalDetails>
  );
};
