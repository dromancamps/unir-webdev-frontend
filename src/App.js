import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { MovieRouter } from './router/MovieRouter';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
          <div className="content">
            < MovieRouter />
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
