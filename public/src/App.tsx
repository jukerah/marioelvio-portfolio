import GlobalStyle from './globalStyles';
import { Header } from "./components/Header";
import { RouteList } from './routes/RouteList';

function App() {
  return (
    <div>
        <GlobalStyle />
        
        <Header />
        
        <RouteList />
   
    </div>
  );
}

export default App;
