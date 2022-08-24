import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageData";
import { CourseType } from "../../../../types/CourseType";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const Courses = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();
  const [ countCourses ] = useState<number>(pageInfo.about.courses.courseList.length);
  const [ showCourses, setShowCourses ] = useState<number>(2);

  return (
    <C.ContainerCourses isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageInfo.about.courses.title[ i18n.language as keyof typeof pageInfo.about.courses.title ]} />

      <C.Courses><>
        {pageInfo.about.courses.courseList.map((course: CourseType, index) => index <= showCourses && (
          <Card
            key={course.id}
            content={<>
              <ContainerLine />

              <ContainerInfo content={
                <C.CoursesInfo mode={theme.mode.status}>
                  <h3>
                    {course.start !== course.theEnd
                      ? `${course.start} - ${course.theEnd} | `
                      : `${course.theEnd} | `
                    }
                    <span className="college color-hover">
                      {course.college}
                    </span>
                  </h3>
                  <p>{course.course[ i18n.language as keyof typeof course.course ]}</p>
                </C.CoursesInfo>
              }/>
            </>}
          />
        ))}

        {showCourses === 2 && countCourses > 3 && (
          <ViewMoreButton showAll={() => setShowCourses(countCourses)} />
        )}
      </></C.Courses>
    </C.ContainerCourses>
  );
};
