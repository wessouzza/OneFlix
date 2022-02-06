import 'swiper/swiper.min.css';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Rotas from './config/Rotas';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
      
  );
}

export default App;
