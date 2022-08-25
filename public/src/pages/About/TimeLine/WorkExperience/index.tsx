import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageData } from "../../../../data/PageData";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const WorkExperience = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [countWork] = useState<number>(pageData.about.workExperience.workList.length);
  const [showWork, setShowWork] = useState<number>(2);

  return (
    <C.ContainerWorkExperience isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageData.about.workExperience.title[lang]} />

      <C.WorkExperience>
        <>
          {pageData.about.workExperience.workList.map((workExperience: any, index: number) => index <= showWork && (
            <Card
              key={workExperience.id}
              content={<>
                <ContainerInfo content={
                  <C.WorkInfo mode={theme.mode.status}>
                    <h3>
                      <span className="job-role color-hover">
                        {workExperience.jobRole[lang]}
                      </span>
                      <> | </>
                      {workExperience.company}
                    </h3>
                    <p className="period-seniority">
                      {workExperience.start}
                      <> - </>
                      {workExperience.currentStatus
                        ? (<>{workExperience.current[lang]}</>)
                        : (<>{workExperience.theEnd}</>)
                      }
                      {workExperience.seniority[lang] !== "" && (
                        <>
                          <> | </>
                          <span className="seniority color-hover">
                            {workExperience.seniority[lang]}
                          </span>
                        </>
                      )}
                    </p>
                    <p>
                      <span className="activities color-hover">
                      {pageData.about.workExperience.activities[lang]}
                      </span>
                      <> {workExperience.activities[lang]}</>
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
