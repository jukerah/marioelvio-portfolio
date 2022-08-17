import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import * as C from './styles';

import GlobalStyle from './globalStyles';
import { Header } from "./components/Header";
import { RouteList } from './routes/RouteList';
import { MenuDesktop } from './components/MenuDesktop';

import { Context } from './contexts/Contexts';

function App() {
  const { t } = useTranslation();
  const { theme } = useContext(Context);

  useEffect(() => {
    document.title = t('docTitle');
  });

  return (
    <div>
        <GlobalStyle />
        
        <C.ContainerWeb>

          <MenuDesktop />

          <C.ContainerMain
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
          >
            <Header />        
            <RouteList />
          </C.ContainerMain>

        </C.ContainerWeb> 
    </div>
  );
}

export default App;
