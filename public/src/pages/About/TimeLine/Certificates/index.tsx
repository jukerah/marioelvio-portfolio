import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageInfo } from "../../../../data/PageData";
import { CertificateType } from "../../../../types/CertificateType";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const Certificates = () => {
  const { theme } = useContext(Context);
  const { i18n } = useTranslation();
  const [countCertificates] = useState<number>(pageInfo.about.certificates.certificateList.length);
  const [showCertificates, setShowCertificates] = useState<number>(2);

  return (
    <C.ContainerCertificates isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageInfo.about.certificates.title[ i18n.language as keyof typeof pageInfo.about.certificates.title ]} />

      <C.Certificates><>
        {pageInfo.about.certificates.certificateList.map((certificate: CertificateType, index) => index <= showCertificates && (
          <Card
            key={certificate.id}
            content={<>
              <ContainerLine />

              <ContainerInfo content={
                <C.CertificatesInfo mode={theme.mode.status}>
                  <h3>
                    {certificate.year}
                    <> | </>
                    <span className="certificate-issuer color-hover">
                      {certificate.certificateIssuer}
                    </span>
                  </h3>
                  <p>{certificate.certificate[ i18n.language as keyof typeof certificate.certificate ]}</p>
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
