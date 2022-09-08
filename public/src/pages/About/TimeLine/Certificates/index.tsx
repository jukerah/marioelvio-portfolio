import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageInfo";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";
import { CertificateType } from "../../../../types/CertificateType";

export const Certificates = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [countCertificates] = useState<number>(pageInfo.about.certificates.certificateList.length);
  const [showCertificates, setShowCertificates] = useState<number>(2);

  const certificates = {
    title: pageInfo.about.certificates.title[ lang as keyof typeof pageInfo.about.certificates.title ],
    list: pageInfo.about.certificates.certificateList
  }

  return (
    <C.ContainerCertificates isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={certificates.title} />

      <C.Certificates><>
        {certificates.list.map((certificate: CertificateType, index: number) => index <= showCertificates && (
          <Card
            key={certificate.id}
            content={<>
              <ContainerLine />

              <ContainerInfo content={
                <C.CertificatesInfo mode={theme.mode.status}>
                  <h3>
                    {certificate.year}
                    <> | </>
                    <span className="certificate-issuer">
                      {certificate.certificateIssuer}
                    </span>
                  </h3>
                  <p>{certificate.certificate[ lang as keyof typeof certificate.certificate ]}</p>
                </C.CertificatesInfo>
              }/>
            </>}
          />
        ))}

        {showCertificates === 2 && countCertificates > 3 && (
          <ViewMoreButton
            showAll={() => setShowCertificates(countCertificates)}
          />
        )}
      </></C.Certificates>
    </C.ContainerCertificates>
  );
};
