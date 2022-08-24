import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageData";
import { WorkExperienceType } from "../../../../types/WorkExperienceType";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const WorkExperience = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();
  const [countWork] = useState<number>(pageInfo.about.workExperience.workList.length);
  const [showWork, setShowWork] = useState<number>(2);

  return (
    <C.ContainerWorkExperience isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageInfo.about.workExperience.title[ i18n.language as keyof typeof pageInfo.about.workExperience.title ]} />

      <C.WorkExperience>
        <>
          {pageInfo.about.workExperience.workList.map((workExperience: WorkExperienceType, index) => index <= showWork && (
            <Card
              key={workExperience.id}
              content={<>
                <ContainerInfo content={
                  <C.WorkInfo mode={theme.mode.status}>
                    <h3>
                      <span className="job-role color-hover">
                        {workExperience.jobRole[ i18n.language as keyof typeof workExperience.jobRole ]}
                      </span>
                      <> | </>
                      {workExperience.company}
                    </h3>
                    <p className="period-seniority">
                      {workExperience.start}
                      <> - </>
                      {workExperience.currentStatus
                        ? (<>{workExperience.current[ i18n.language as keyof typeof workExperience.current ]}</>)
                        : (<>{workExperience.theEnd}</>)
                      }
                      {workExperience.seniority[ i18n.language as keyof typeof workExperience.seniority ] !== "" && (
                        <>
                          <> | </>
                          <span className="seniority color-hover">
                            {workExperience.seniority[ i18n.language as keyof typeof workExperience.seniority ]}
                          </span>
                        </>
                      )}
                    </p>
                    <p>
                      <span className="activities color-hover">
                      {pageInfo.about.workExperience.activities[ i18n.language as keyof typeof pageInfo.about.workExperience.activities ]}
                      </span>
                      <> {workExperience.activities[ i18n.language as keyof typeof workExperience.activities ]}</>
                    </p>
                  </C.WorkInfo>
                }/>

                <ContainerLine />
              </>}
            />
          ))}

          {showWork === 2 && countWork > 3 && (
            <ViewMoreButton showAll={() => setShowWork(countWork)} />
          )}
        </>
      </C.WorkExperience>
    </C.ContainerWorkExperience>
  );
};
