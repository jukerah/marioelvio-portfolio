import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../../contexts/Contexts";
import { pageInfo } from "../../../data/PageData";

import { SubTitle } from "../../../components/SubTitle";
import { ContainerSkill } from "./ContainerSkill";

export const HardSkills = () => {
  const { theme } = useContext(Context);
  const countFrontEnd: number = pageInfo.about.hardSkills.frontEnd.skill.length;
  const countBackEnd: number = pageInfo.about.hardSkills.backEnd.skill.length;
  const countMobile: number = pageInfo.about.hardSkills.mobile.skill.length;
  const countTools: number = pageInfo.about.hardSkills.tools.skill.length;
  const countDatabase: number = pageInfo.about.hardSkills.database.skill.length;

  return (
    <C.ContainerHardSkills mode={theme.mode.status}>
      <SubTitle subTitle={"Hard skills"} />

      <p className="description-skills">
        {pageInfo.about.hardSkills.description}
      </p>

      <C.HardSkills>
        {countFrontEnd > 0 && (
          <ContainerSkill
            stack={"Front-end"}
            skillList={pageInfo.about.hardSkills.frontEnd.skill}
            svg={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-color" fillRule="evenodd" clipRule="evenodd"d="M2.00001 3.99931C2.00001 2.89474 2.89544 2.00001 4.00001 2.00001L20 2.00001C21.1045 2.00001 22 2.89423 22 3.9988C22 9.23338 22 16.5298 22 20.0057C22 21.1103 21.1044 22 19.9999 22C14.3078 22 9.69213 22 4.00006 22C2.8955 22 1.99998 21.1046 1.99998 20V20C1.99998 20 1.99999 10.9296 2.00001 3.99931ZM20 9.00001C20 7.89544 19.1045 7.00001 18 7.00001H5.99998C4.89541 7.00001 3.99998 7.89544 3.99998 9.00001V18C3.99998 19.1046 4.89541 20 5.99998 20H18C19.1045 20 20 19.1046 20 18V9.00001ZM11 4.00001C11.5523 4.00001 12 4.44772 12 5.00001V5.00001C12 5.55229 11.5523 6.00001 11 6.00001V6.00001C10.4477 6.00001 9.99998 5.55229 9.99998 5.00001V5.00001C9.99998 4.44772 10.4477 4.00001 11 4.00001V4.00001ZM7.99998 4.00001C8.55226 4.00001 8.99998 4.44772 8.99998 5.00001V5.00001C8.99998 5.55229 8.55226 6.00001 7.99998 6.00001V6.00001C7.44769 6.00001 6.99998 5.55229 6.99998 5.00001V5.00001C6.99998 4.44772 7.44769 4.00001 7.99998 4.00001V4.00001ZM4.99998 4.00001C5.55226 4.00001 5.99998 4.44772 5.99998 5.00001V5.00001C5.99998 5.55229 5.55226 6.00001 4.99998 6.00001V6.00001C4.44769 6.00001 3.99998 5.55229 3.99998 5.00001V5.00001C3.99998 4.44772 4.44769 4.00001 4.99998 4.00001V4.00001Z"/>
                <rect className="fill-color" x="5.99997" y="13" width="5" height="2" rx="1"/>
                <rect className="fill-color" x="5.99997" y="16" width="5" height="2" rx="1"/>
                <rect className="fill-color" x="13" y="16" width="5" height="2" rx="1"/>
                <rect className="fill-color" x="13" y="13" width="5" height="2" rx="1"/>
                <rect className="fill-color" x="5.99997" y="9.00001" width="12" height="3" rx="1.5"/>
              </svg>
            }
          />
        )}

        {countBackEnd > 0 && (
          <ContainerSkill
            stack={"Back-end"}
            skillList={pageInfo.about.hardSkills.backEnd.skill}
            svg={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-color" d="M9.33401 10.8621C9.74464 10.4749 10.227 10.1814 10.7506 10C10.9003 10.1974 11.0904 10.3568 11.3067 10.4663C11.523 10.5757 11.76 10.6325 12 10.6323C12.24 10.6325 12.477 10.5757 12.6933 10.4663C12.9096 10.3568 13.0997 10.1974 13.2494 10C13.7731 10.1814 14.2554 10.4749 14.666 10.8621C14.5786 11.0972 14.5427 11.3499 14.5608 11.6016C14.579 11.8533 14.6507 12.0975 14.7708 12.316C14.8906 12.535 15.0558 12.7226 15.2541 12.8651C15.4523 13.0076 15.6785 13.1012 15.9158 13.139C16.0281 13.7068 16.0281 14.2928 15.9158 14.8606C15.4519 14.9355 15.024 15.2226 14.7708 15.6836C14.6507 15.9021 14.5789 16.1464 14.5607 16.3981C14.5426 16.6499 14.5786 16.9028 14.666 17.1379C14.2554 17.5249 13.7731 17.8183 13.2494 17.9996C13.0997 17.8022 12.9096 17.6429 12.6933 17.5335C12.477 17.4242 12.24 17.3675 12 17.3677C11.76 17.3675 11.523 17.4243 11.3067 17.5337C11.0904 17.6432 10.9003 17.8026 10.7506 18C10.227 17.8187 9.74468 17.5253 9.33401 17.1383C9.42146 16.9032 9.45745 16.6504 9.43931 16.3986C9.42117 16.1468 9.34936 15.9025 9.22923 15.684C9.10936 15.4651 8.94417 15.2775 8.74593 15.1351C8.54769 14.9927 8.32151 14.8992 8.08419 14.8615C7.97194 14.2935 7.97194 13.7073 8.08419 13.1394C8.32154 13.1016 8.54775 13.008 8.74599 12.8655C8.94423 12.7231 9.1094 12.5354 9.22923 12.3164C9.3493 12.0979 9.42107 11.8538 9.43921 11.6021C9.45735 11.3504 9.4214 11.0976 9.33401 10.8625V10.8621ZM12.5999 15.0934C12.7375 15.0111 12.8582 14.9009 12.9552 14.7693C13.0521 14.6377 13.1234 14.4872 13.1648 14.3265C13.2063 14.1657 13.2171 13.998 13.1967 13.8328C13.1763 13.6677 13.1251 13.5084 13.046 13.3642C12.9669 13.2199 12.8614 13.0936 12.7357 12.9925C12.61 12.8913 12.4666 12.8173 12.3136 12.7747C12.1606 12.7322 12.0011 12.7219 11.8444 12.7444C11.6876 12.767 11.5366 12.822 11.4001 12.9062C11.1268 13.0748 10.9279 13.3504 10.8469 13.6728C10.766 13.9952 10.8094 14.3382 10.9678 14.627C11.1263 14.9158 11.3868 15.1269 11.6925 15.2143C11.9983 15.3017 12.3245 15.2582 12.5999 15.0934V15.0934Z"/>
                <path className="fill-color" fillRule="evenodd" clipRule="evenodd" d="M2.00004 3.9993C2.00004 2.89473 2.89547 2 4.00004 2L20 2C21.1046 2 22 2.89422 22 3.99879C22 9.23337 22 16.5298 22 20.0057C22 21.1103 21.1045 22 19.9999 22C14.3078 22 9.69216 22 4.00009 22C2.89553 22 2.00001 21.1046 2.00001 20V20C2.00001 20 2.00003 10.9296 2.00004 3.9993ZM20 9C20 7.89543 19.1046 7 18 7H6.00001C4.89544 7 4.00001 7.89543 4.00001 9V18C4.00001 19.1046 4.89544 20 6.00001 20H18C19.1046 20 20 19.1046 20 18V9ZM11 4C11.5523 4 12 4.44771 12 5V5C12 5.55228 11.5523 6 11 6V6C10.4477 6 10 5.55228 10 5V5C10 4.44771 10.4477 4 11 4V4ZM8.00001 4C8.55229 4 9.00001 4.44771 9.00001 5V5C9.00001 5.55228 8.55229 6 8.00001 6V6C7.44772 6 7.00001 5.55228 7.00001 5V5C7.00001 4.44771 7.44772 4 8.00001 4V4ZM5.00001 4C5.55229 4 6.00001 4.44771 6.00001 5V5C6.00001 5.55228 5.55229 6 5.00001 6V6C4.44772 6 4.00001 5.55228 4.00001 5V5C4.00001 4.44771 4.44772 4 5.00001 4V4Z"/>
              </svg>
            }
          />
        )}

        {countMobile > 0 && (
          <ContainerSkill
            stack={"Mobile"}
            skillList={pageInfo.about.hardSkills.mobile.skill}
            svg={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-color" d="M16.8 3H7.2C6.53726 3 6 3.50368 6 4.125V19.875C6 20.4963 6.53726 21 7.2 21H16.8C17.4627 21 18 20.4963 18 19.875V4.125C18 3.50368 17.4627 3 16.8 3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="stroke-color" d="M11 4H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="stroke-color" d="M12 18V18.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        )}

        {countTools > 0 && (
          <ContainerSkill
            stack={"Tools"}
            skillList={pageInfo.about.hardSkills.tools.skill}
            svg={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-color" d="M21.0056 16.3239C20.5755 15.8917 20.034 15.5874 19.4413 15.4451C19.2499 15.3991 19.0557 15.3706 18.8609 15.3595C18.108 15.3164 17.3127 15.1814 16.7796 14.648L9.36456 7.22774C8.82354 6.68634 8.69801 5.87398 8.6439 5.11051C8.51063 3.2301 6.67767 1.64206 4.69293 2.07049C4.60967 2.08793 4.53581 2.1356 4.48558 2.20431C4.43536 2.27302 4.41233 2.3579 4.42094 2.44259C4.43127 2.52074 4.46486 2.59397 4.51735 2.65276L5.35392 3.48992C5.68794 3.82417 5.81605 4.31242 5.68916 4.7676V4.7676C5.56466 5.2142 5.20919 5.56284 4.76127 5.68251V5.68251C4.30403 5.80467 3.81207 5.67486 3.47752 5.34008L2.64095 4.50291C2.56623 4.44276 2.47148 4.41321 2.37584 4.42023C2.30298 4.42746 2.23432 4.45775 2.17984 4.5067C2.12535 4.55564 2.08788 4.6207 2.07286 4.69241C1.63527 6.67003 3.23488 8.51097 5.10059 8.65184C5.87293 8.71015 6.69827 8.83208 7.24555 9.38015L14.6257 16.771C15.167 17.3131 15.2918 18.1264 15.3458 18.8906C15.4786 20.7705 17.3136 22.3579 19.2979 21.9295C19.3812 21.9121 19.455 21.8644 19.5052 21.7957C19.5555 21.727 19.5785 21.6421 19.5699 21.5574C19.5596 21.4793 19.526 21.406 19.4735 21.3472L18.6369 20.5101C18.3029 20.1758 18.1748 19.6876 18.3017 19.2324V19.2324C18.4262 18.7858 18.7816 18.4372 19.2296 18.3175V18.3175C19.6868 18.1953 20.1788 18.3251 20.5133 18.6599L21.3499 19.4971C21.4189 19.5557 21.5042 19.5917 21.5943 19.6004C21.6754 19.6019 21.7543 19.5747 21.8173 19.5237C21.8803 19.4726 21.9232 19.401 21.9386 19.3214C22.0437 18.7835 22.0135 18.2279 21.8506 17.7047C21.6877 17.1814 21.3973 16.7069 21.0056 16.3239Z"/>
                <path className="fill-color" d="M13.7417 8.173C13.1892 8.75649 13.2045 9.67458 13.7761 10.2394V10.2394C14.3457 10.8022 15.2601 10.8086 15.8376 10.2538L16.6548 9.46879C17.2007 8.94435 18.0044 8.83096 18.7602 8.78797C20.688 8.67831 22.3418 6.78895 21.8939 4.76473C21.8789 4.69302 21.8414 4.62797 21.7869 4.57902C21.7324 4.53008 21.6638 4.49979 21.5909 4.49255C21.5403 4.48914 21.4896 4.49592 21.4417 4.51249C21.3938 4.52906 21.3497 4.55509 21.312 4.58902L20.4882 5.41344C20.1458 5.75604 19.6423 5.88861 19.1746 5.763V5.763C18.7179 5.64037 18.3556 5.28486 18.2281 4.8295V4.8295C18.0978 4.36381 18.2286 3.86401 18.5705 3.52194L19.3943 2.69752C19.4283 2.66 19.4541 2.61581 19.4701 2.56777C19.4861 2.51972 19.492 2.46887 19.4873 2.41845C19.485 2.34329 19.4581 2.27095 19.4109 2.21248C19.3636 2.154 19.2986 2.1126 19.2256 2.09459C17.1834 1.65381 15.3147 3.31258 15.2124 5.24178C15.1728 5.98818 15.0606 6.77997 14.5467 7.32273L13.7417 8.173Z"/>
                <path className="fill-color" d="M10.234 13.7669C9.67034 13.2028 8.75952 13.1915 8.18207 13.7416L7.1017 14.7706C6.58104 15.2665 5.82878 15.3906 5.11071 15.428C2.51649 15.563 0.907956 18.877 2.99902 21.0027C5.08989 23.1282 8.43666 21.4941 8.57448 18.8917C8.6126 18.172 8.73584 17.4172 9.23291 16.8953L10.2588 15.818C10.8084 15.2408 10.7974 14.3306 10.234 13.7669V13.7669ZM5.25 17C6.2165 17 7 17.7835 7 18.75V18.75C7 19.7165 6.2165 20.5 5.25 20.5V20.5C4.2835 20.5 3.5 19.7165 3.5 18.75V18.75C3.5 17.7835 4.2835 17 5.25 17V17Z"/>
              </svg>
            }
          />
        )}

        {countDatabase > 0 && (
          <ContainerSkill
            stack={"Database"}
            skillList={pageInfo.about.hardSkills.database.skill}
            svg={
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-color" d="M12 9C16.4183 9 20 7.65685 20 6C20 4.34315 16.4183 3 12 3C7.58172 3 4 4.34315 4 6C4 7.65685 7.58172 9 12 9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="stroke-color" d="M4 6V12C4 12.7956 4.84285 13.5587 6.34315 14.1213C7.84344 14.6839 9.87827 15 12 15C14.1217 15 16.1566 14.6839 17.6569 14.1213C19.1571 13.5587 20 12.7956 20 12V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="stroke-color" d="M4 12V18C4 18.7956 4.84285 19.5587 6.34315 20.1213C7.84344 20.6839 9.87827 21 12 21C14.1217 21 16.1566 20.6839 17.6569 20.1213C19.1571 19.5587 20 18.7956 20 18V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        )}
      </C.HardSkills>
    </C.ContainerHardSkills>
  );
};
