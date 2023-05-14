import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { MovieContext } from './contexts/MovieContext';
import { MovieRouter } from './router/MovieRouter';
import filmsData from './assets/films.json';
import './App.css'

function App() {

  return (
    <div>
          <BrowserRouter>
            <Header />
              <MovieContext.Provider
              value={{
                filmsData,
              }}>
                <div className="content">
                  < MovieRouter />
                </div>
              </MovieContext.Provider>
          </BrowserRouter>
    </div>
  );
}

export default App;
