import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageInfo";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";
import { EducationType } from "../../../../types/EducationType";

export const Education = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [countEducation] = useState<number>(pageInfo.about.education.educationList.length);
  const [showEducation, setShowEducation] = useState<number>(2);

  const education = {
    title: pageInfo.about.education.title[ lang as keyof typeof pageInfo.about.education.title ],
    list: pageInfo.about.education.educationList
  }

  return (
    <C.ContainerEducation isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={education.title} />

      <C.Education>
        <>
          {education.list.map((education: EducationType, index: number) => index <= showEducation && (
            <Card
              key={education.id}
              content={<>
                <ContainerLine />

                <ContainerInfo content={
                  <C.EducationInfo mode={theme.mode.status}>
                    <h3 className="course color-hover">
                      {education.course[ lang as keyof typeof education.course ]}
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
