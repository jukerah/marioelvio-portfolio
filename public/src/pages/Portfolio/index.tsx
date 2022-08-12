import { useContext, useEffect, useState } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';

import imgTest from '../../assets/banner/1.jpg'

export const PortfolioPage = (props:any) => {
    const { theme } = useContext(Context);
    const [ showMode, setShowMode ] = useState<'slider' | 'grid'>('slider');

    useEffect(() => {
        if (props.page === 'portfolio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);

    return (        
        <C.PortfolioSection mode={theme.mode.status}>

            <C.Container>
                <TitlePage title={'Portfolio'}/>

                <C.ContainerButtons>
                    <C.SelectButton>
                        <option value="All" selected>All</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Full-stack">Full-stack</option>
                        <option value="UI Design">UI Design</option>
                    </C.SelectButton>

                    <C.Button
                        mode={theme.mode.status}
                        isActive={(showMode === 'slider') ? true : false}
                        aria-label='Slider mode'
                        onClick={() => setShowMode('slider')}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3H9C7.89543 3 7 4.15127 7 5.57143V18.4286C7 19.8487 7.89543 21 9 21H15C16.1046 21 17 19.8487 17 18.4286V5.57143C17 4.15127 16.1046 3 15 3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.2 7H3.8C3.35817 7 3 7.63959 3 8.42857V15.5714C3 16.3604 3.35817 17 3.8 17H6.2C6.64183 17 7 16.3604 7 15.5714V8.42857C7 7.63959 6.64183 7 6.2 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.2 7H17.8C17.3582 7 17 7.63959 17 8.42857V15.5714C17 16.3604 17.3582 17 17.8 17H20.2C20.6418 17 21 16.3604 21 15.5714V8.42857C21 7.63959 20.6418 7 20.2 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </C.Button>
                    <C.Button
                        mode={theme.mode.status}
                        isActive={(showMode === 'grid') ? true : false}
                        aria-label='Grid mode'
                        onClick={() => setShowMode('grid')}                 
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </C.Button>
                </C.ContainerButtons>

                <C.ContainerPortfolio>
                    <C.SliderMode showMode={showMode}>
                        <C.Project>
                            <img src={imgTest} alt="" />
                            <div className='project-info'>
                                <h3>Project Name</h3>
                                <a href="/">View more</a>
                            </div>
                        </C.Project>

                        <C.Project>
                            <img src={imgTest} alt="" />
                            <div className='project-info'>
                                <h3>Project Name</h3>
                                <a href="/">View more</a>
                            </div>
                        </C.Project>

                        <C.Project>
                            <img src={imgTest} alt="" />
                            <div className='project-info'>
                                <h3>Project Name</h3>
                                <a href="/">View more</a>
                            </div>
                        </C.Project>
                    </C.SliderMode>

                    <C.GridMode showMode={showMode}>
                        <C.Project>
                            <img src={imgTest} alt="" />
                            <div className='project-info'>
                                <h3>Project Name</h3>
                                <a href="/">View more</a>
                            </div>
                        </C.Project>

                        <C.Project>
                            <img src={imgTest} alt="" />
                            <div className='project-info'>
                                <h3>Project Name</h3>
                                <a href="/">View more</a>
                            </div>
                        </C.Project>

                        <C.Project>
                            <img src={imgTest} alt="" />
                            <div className='project-info'>
                                <h3>Project Name</h3>
                                <a href="/">View more</a>
                            </div>
                        </C.Project>
                    </C.GridMode>
                </C.ContainerPortfolio>
            </C.Container>
        </C.PortfolioSection>
    );
};