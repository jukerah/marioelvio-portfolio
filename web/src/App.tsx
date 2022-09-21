import { useContext } from 'react';
import * as C from './styles';

import GlobalStyle from './globalStyles';
import { Header } from "./components/Header";
import { RouteList } from './routes/RouteList';
import { MenuDesktop } from './components/MenuDesktop';

import { Context } from './contexts/Contexts';

function App() {
  const { theme } = useContext(Context);

  return (
    <>
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
    </>
  );
}

export default App;
