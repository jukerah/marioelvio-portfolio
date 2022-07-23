import * as C from './styles';

import GlobalStyle from './globalStyles';
import { Header } from "./components/Header";
import { RouteList } from './routes/RouteList';
import { MenuDesktop } from './components/MenuDesktop';

function App() {
  return (
    <div>
        <GlobalStyle />
        
        <C.ContainerWeb>

          <MenuDesktop />

          <div>
            <Header />        
            <RouteList />
          </div>

        </C.ContainerWeb>   
    </div>
  );
}

export default App;
