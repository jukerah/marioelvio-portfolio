import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageData";
import { EducationType } from "../../../../types/EducationType";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const Education = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();
  const [countEducation] = useState<number>(pageInfo.about.education.educationList.length);
  const [showEducation, setShowEducation] = useState<number>(2);

  return (
    <C.ContainerEducation isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageInfo.about.education.title[ i18n.language as keyof typeof pageInfo.about.education.title ]} />

      <C.Education>
        <>
          {pageInfo.about.education.educationList.map((education: EducationType, index) => index <= showEducation && (
            <Card
              key={education.id}
              content={<>
                <ContainerLine />

                <ContainerInfo content={
                  <C.EducationInfo mode={theme.mode.status}>
                    <h3 className="course color-hover">
                      {education.course[ i18n.language as keyof typeof education.course ]}
                    </h3>
                    <p>
                      {education.start}
                      <> - </>
                      {education.theEnd}
                      <> | </>
                      <span className="college color-hover">
                        {education.college}
                      </span>
                    </p>
                  </C.EducationInfo>
                }/>
              </>}
            />
          ))}

          {showEducation === 2 && countEducation > 3 && (
            <ViewMoreButton showAll={() => setShowEducation(countEducation)} />
          )}
        </>
      </C.Education>
    </C.ContainerEducation>
  );
};
