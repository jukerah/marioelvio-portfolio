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

export const Courses = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [ countCourses ] = useState<number>(pageInfo.about.courses.courseList.length);
  const [ showCourses, setShowCourses ] = useState<number>(2);

  const courses = {
    title: pageInfo.about.courses.title[ lang as keyof typeof pageInfo.about.courses.title ],
    list: pageInfo.about.courses.courseList
  }

  return (
    <C.ContainerCourses isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={courses.title} />

      <C.Courses><>
        {courses.list.map((course: EducationType, index: number) => index <= showCourses && (
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
                  <p>{course.course[ lang as keyof typeof course.course ]}</p>
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
