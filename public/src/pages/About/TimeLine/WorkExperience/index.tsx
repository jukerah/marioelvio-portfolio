import { useContext, useState } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';
import { pageInfo } from '../../../../data/PageData';
import { SubTitle } from '../../../../components/SubTitle';
import { Card } from '../Card';
import { ContainerLine } from '../ContainerLine';
import { ContainerInfo } from '../ContainerInfo';
import { ViewMoreButton } from '../ViewMoreButton';

export const WorkExperience = () => {
    const { theme } = useContext(Context);
    const [ countWork ] = useState<number>(pageInfo.about.workExperience.length);
    const [ showWork, setShowWork ] = useState<number>(2);

    return (
        <C.ContainerWorkExperience isMenuOpen={theme.isMenuOpen.status}>
            <SubTitle subTitle={'Work experience'} />

            <C.WorkExperience>
                <>
                    {pageInfo.about.workExperience.map((workExperience:any, index) => (
                        (index <= showWork &&
                            <Card
                                key={workExperience.id}
                                content={
                                    <>
                                        <ContainerInfo content={
                                            <C.WorkInfo mode={theme.mode.status}>
                                                <h3>
                                                    <span className='job-role color-hover'>
                                                        {workExperience.jobRole}
                                                    </span>
                                                    <> | </>
                                                    {workExperience.company}
                                                </h3>
                                                <p className='period-seniority'>
                                                    {workExperience.start}
                                                    <> - </>
                                                    {(workExperience.current)
                                                        ? <>Current</>
                                                        : <>{workExperience.theEnd}</>
                                                    }
                                                    {(workExperience.seniority !== '') &&
                                                        <>
                                                            <> | </>
                                                            <span className='seniority color-hover'>
                                                                {workExperience.seniority}
                                                            </span>
                                                        </>
                                                    }
                                                </p>
                                                <p>
                                                    <span className='activities color-hover'>Activities</span>: {workExperience.activities}
                                                </p>
                                            </C.WorkInfo>
                                        }/>
            
                                        <ContainerLine />
                                    </>
                                }
                            />
                        )
                    ))}
                    
                    {(showWork === 2 && countWork > 3) &&
                        <ViewMoreButton
                            showAll={() => setShowWork(countWork)}
                        />
                    }
                </>
            </C.WorkExperience>
        </C.ContainerWorkExperience>
    );
};