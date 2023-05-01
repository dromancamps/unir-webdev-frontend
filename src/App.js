import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MovieContext } from './contexts/MovieContext';
import { MovieRouter } from './router/MovieRouter';

function App() {
  return (
    <div className="all">
    <BrowserRouter>
        <Header />
        <MovieRouter />
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
