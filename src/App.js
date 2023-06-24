import './assets/sass/app.scss';
import { BrowserRouter } from 'react-router-dom';
import RoutePage from './pages/RoutePage';

function App() {
  return (  
    <BrowserRouter>
      <RoutePage/>
    </BrowserRouter>
  );
}

export default App;

