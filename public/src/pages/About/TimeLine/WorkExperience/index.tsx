import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';
import { SubTitle } from '../../../../components/SubTitle';
import { Card } from '../Card';
import { ContainerLine } from '../ContainerLine';
import { ContainerInfo } from '../ContainerInfo';

export const WorkExperience = () => {
    const { theme } = useContext(Context);

    return (
        <C.ContainerWorkExperience isMenuOpen={theme.isMenuOpen.status}>
            <SubTitle subTitle={'Work experience'} />

            <C.WorkExperience>
                <Card content={
                    <>
                        <ContainerInfo content={
                            <C.Work mode={theme.mode.status}>
                                <h3>Systems Analyst | DXC Technology</h3>
                                <p>10 / 2021 - Current | Intern</p>
                                <p>Activities: Support for mission-critical processes in the client Claro Brasil (NET), carrying out treatments and monitoring incidents until their closure to ensure the availability of applications and data integrity services.</p>
                            </C.Work>
                        }/>
                        <ContainerLine />
                    </>
                }/>
                <Card content={
                    <>
                        <ContainerInfo content={
                            <C.Work mode={theme.mode.status}>
                                <h3>Systems Analyst | DXC Technology</h3>
                                <p>10 / 2021 - Current | Intern</p>
                                <p>Activities: Support for mission-critical processes in the client Claro Brasil (NET), carrying out treatments and monitoring incidents until their closure to ensure the availability of applications and data integrity services.</p>
                            </C.Work>
                        }/>
                        <ContainerLine />
                    </>
                }/>
            </C.WorkExperience>
        </C.ContainerWorkExperience>
    );
};