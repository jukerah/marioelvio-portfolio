import styled from "styled-components";
import { svgs } from '../../data/SvgList';

export const ContainerSwitchTheme = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;
    
    p {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: bold;
    }
    //switch
    .switch {
        position: relative;
        display: inline-block;
        width: 64px;
        height: 32px;
    }

    .switch input { display:none; }

    .slider {
        position: absolute;
        cursor: pointer;
        width: 64px;
        height: 32px;
        background-color: #FFFFFF;
        background-image: url(${svgs.background.switch});
        transition: .4s;
        box-shadow: inset 0.5px 0.5px 1px #666666;
    }

    .slider:before {
        width: 32px;
        height: 32px;
        position: absolute;
        content: "";
        transition: .4s;
        background: conic-gradient(from 180deg at 50% 50%, #6CC390 0deg, #5EA076 177.37deg, #6BC38B 348deg, #6CC390 360deg);
        box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.25);
        transform: translateX(32px);
    }

    input:checked + .slider:before { transform: translateX(0); }

    .slider.round { border-radius: 32px; }

    .slider.round:before { border-radius: 50%; }

    @media (min-width: 1024px) {
        p { font-size: 24px; }
    }
`;