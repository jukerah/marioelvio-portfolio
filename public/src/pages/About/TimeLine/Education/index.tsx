import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageData } from "../../../../data/PageData";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const Education = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [countEducation] = useState<number>(pageData.about.education.educationList.length);
  const [showEducation, setShowEducation] = useState<number>(2);

  return (
    <C.ContainerEducation isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageData.about.education.title[lang]} />

      <C.Education>
        <>
          {pageData.about.education.educationList.map((education: any, index: number) => index <= showEducation && (
            <Card
              key={education.id}
              content={<>
                <ContainerLine />

                <ContainerInfo content={
                  <C.EducationInfo mode={theme.mode.status}>
                    <h3 className="course color-hover">
                      {education.course[lang]}
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
