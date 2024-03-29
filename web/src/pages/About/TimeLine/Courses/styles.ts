import styled from "styled-components";

interface ContainerCoursesProps {
    isMenuOpen: boolean;
}

export const ContainerCourses = styled.div<ContainerCoursesProps>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 768px) { gap: 24px; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        margin-bottom: ${(props) => props.isMenuOpen && '32px'};
    }
`;

export const Courses = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

interface CoursesInfoProps {
    mode: string;
}

export const CoursesInfo = styled.div<CoursesInfoProps>`
    display: flex;
    flex-direction: column;
    
    gap: 16px;

    .college {
        color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

        font-weight: 700;
        text-transform: uppercase;
    }
`;