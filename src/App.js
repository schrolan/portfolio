import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';
import Screen from './components/screen';
import Carousel from './components/carousel';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Screen>
          <Carousel />
        </Screen>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;