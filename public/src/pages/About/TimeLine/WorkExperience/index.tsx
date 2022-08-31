import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageInfo";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";
import { WorkExperienceType } from "../../../../types/WorkExperienceType";

export const WorkExperience = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [countWork] = useState<number>(pageInfo.about.workExperience.workList.length);
  const [showWork, setShowWork] = useState<number>(2);

  const workExperience = {
    title: pageInfo.about.workExperience.title[ lang as keyof typeof pageInfo.about.workExperience.title ],
    list: pageInfo.about.workExperience.workList
  }

  return (
    <C.ContainerWorkExperience isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={workExperience.title} />

      <C.WorkExperience>
        <>
          {workExperience.list.map((work: WorkExperienceType, index: number) => index <= showWork && (
            <Card
              key={work.id}
              content={<>
                <ContainerInfo content={
                  <C.WorkInfo mode={theme.mode.status}>
                    <h3>
                      <span className="job-role color-hover">
                        {work.jobRole[ lang as keyof typeof work.jobRole ]}
                      </span>
                      <> | </>
                      {work.company}
                    </h3>
                    <p className="period-seniority">
                      {work.start}
                      <> - </>
                      {work.currentStatus
                        ? (<>{work.current[ lang as keyof typeof work.current ]}</>)
                        : (<>{work.theEnd}</>)
                      }
                      {work.seniority[ lang as keyof typeof work.seniority ] !== "" && (
                        <>
                          <> | </>
                          <span className="seniority color-hover">
                            {work.seniority[ lang as keyof typeof work.seniority ]}
                          </span>
                        </>
                      )}
                    </p>
                    <p>
                      <span className="activities color-hover">
                      {pageInfo.about.workExperience.activities[ lang as keyof typeof pageInfo.about.workExperience.activities ]}
                      </span>
                      <> {work.activities[ lang as keyof typeof work.activities ]}</>
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
