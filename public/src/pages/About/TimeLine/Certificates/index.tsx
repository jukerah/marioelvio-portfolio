import { useContext, useState } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';
import { pageInfo } from '../../../../data/PageData';
import { SubTitle } from '../../../../components/SubTitle';
import { Card } from '../Card';
import { ContainerLine } from '../ContainerLine';
import { ContainerInfo } from '../ContainerInfo';
import { ViewMoreButton } from '../ViewMoreButton';

export const Certificates = () => {
    const { theme } = useContext(Context);
    const [ countCertificates ] = useState<number>(pageInfo.about.certificates.length);
    const [ showCertificates, setShowCertificates ] = useState<number>(2);

    return (
        <C.ContainerCertificates isMenuOpen={theme.isMenuOpen.status}>
            <SubTitle subTitle={'Certificates'} />

            <C.Certificates>
                <>
                    {pageInfo.about.certificates.map((certificate:any, index) => (
                        (index <= showCertificates &&
                            <Card
                                key={certificate.id}
                                content={
                                    <>
                                        <ContainerLine />

                                        <ContainerInfo content={
                                            <C.CertificatesInfo mode={theme.mode.status}>
                                                <h3>
                                                    {certificate.year}
                                                    <> | </>
                                                    <span className='certificate-issuer color-hover'>
                                                        {certificate.certificateIssuer}
                                                    </span>
                                                </h3>
                                                <p>
                                                    {certificate.certificate}
                                                </p>
                                            </C.CertificatesInfo>
                                        }/>
                                    </>
                                }
                            />
                        )
                    ))}

                    {(showCertificates === 2 && countCertificates > 3) &&
                        <ViewMoreButton
                            showAll={() => setShowCertificates(countCertificates)}
                        />
                    }
                </>
            </C.Certificates>
        </C.ContainerCertificates>
    );
};