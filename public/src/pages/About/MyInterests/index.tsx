import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../contexts/Contexts';
import { SubTitle } from '../../../components/SubTitle';
import { CardTech } from '../../../components/CardTech';

interface Props {
    title: string;
    interestList: any;
}

export const MyInterests = (props:Props) => {
    const { theme } = useContext(Context);

    return (        
        <C.MyInterests isMenuOpen={theme.isMenuOpen.status}>
            <SubTitle subTitle={props.title}/>
            
            <div className='grid'>
                {props.interestList.tech.map((tech:any) => (
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