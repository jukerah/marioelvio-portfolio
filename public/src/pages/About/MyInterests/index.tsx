import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../contexts/Contexts';
import { pageInfo } from '../../../data/PageData';
import { SubTitle } from '../../../components/SubTitle';
import { CardTech } from '../../../components/CardTech';

export const MyInterests = () => {
    const { theme } = useContext(Context);

    return (        
        <C.MyInterests isMenuOpen={theme.isMenuOpen.status}>
            <SubTitle subTitle={pageInfo.about.myInterests.title}/>
            
            <div className='grid'>
                {pageInfo.about.myInterests.tech.map((tech:any) => (
                    <CardTech
                        key={tech.id}
                        src={(theme.mode.status === 'dark')
                            ? tech.img.light
                            : tech.img.dark
                        }
                        srcHover={tech.img.primary}
                        alt={tech.img.alt}
                        tech={tech.name}
                    />
                ))}
            </div>
        </C.MyInterests>        
    );
};