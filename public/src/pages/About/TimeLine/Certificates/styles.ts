import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
}

export const ContainerCertificates = styled.div<Props>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 768px) { gap: 24px; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        margin-bottom: ${(props) => props.isMenuOpen && '32px'};
    }
`;

export const Certificates = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const CertificatesInfo = styled.div<Props>`
    display: flex;
    flex-direction: column;
    
    gap: 16px;

    .certificate-issuer {
        color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

        font-weight: 700;
        text-transform: uppercase;
    }
`;