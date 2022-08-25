import { useContext, useState } from "react";
import * as C from "./styles";

import { Context } from "../../../../contexts/Contexts";
import { pageData } from "../../../../data/PageData";

import { SubTitle } from "../../../../components/SubTitle";
import { Card } from "../Card";
import { ContainerLine } from "../ContainerLine";
import { ContainerInfo } from "../ContainerInfo";
import { ViewMoreButton } from "../ViewMoreButton";

export const Certificates = () => {
  const { theme } = useContext(Context);
  const lang: string = theme.lang.status;
  const [countCertificates] = useState<number>(pageData.about.certificates.certificateList.length);
  const [showCertificates, setShowCertificates] = useState<number>(2);

  return (
    <C.ContainerCertificates isMenuOpen={theme.isMenuOpen.status}>
      <SubTitle subTitle={pageData.about.certificates.title[lang]} />

      <C.Certificates><>
        {pageData.about.certificates.certificateList.map((certificate: any, index: number) => index <= showCertificates && (
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
                  <p>{certificate.certificate[lang]}</p>
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
