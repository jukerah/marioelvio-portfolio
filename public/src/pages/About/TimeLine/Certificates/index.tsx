import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';
import { SubTitle } from '../../../../components/SubTitle';
import { Card } from '../Card';
import { ContainerLine } from '../ContainerLine';
import { ContainerInfo } from '../ContainerInfo';

export const Certificates = () => {
    const { theme } = useContext(Context);

    return (
        <>
            <SubTitle subTitle={'Certificates'} />

            <C.Certificates>
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
            </C.Certificates>
        </>
    );
};