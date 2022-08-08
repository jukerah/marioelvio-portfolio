import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';
import { SubTitle } from '../../../../components/SubTitle';
import { Card } from '../Card';
import { ContainerLine } from '../ContainerLine';
import { ContainerInfo } from '../ContainerInfo';

export const Courses = () => {
    const { theme } = useContext(Context);

    return (
        <>
            <SubTitle subTitle={'Courses'} />

            <C.Courses>
                <Card
                    content={
                        <>
                            <ContainerLine />
                            <ContainerInfo 
                                content={
                                    <>
                                        <h3>asdasd</h3>
                                        <p>dffgd</p>
                                    </>
                                }
                            />
                        </>
                    }
                />

                <Card
                    content={
                        <>
                            <ContainerLine />
                            <ContainerInfo 
                                content={
                                    <>
                                        <h3>asdasd</h3>
                                        <p>dffgd</p>
                                    </>
                                }
                            />
                        </>
                    }
                />
            </C.Courses>
        </>
    );
};