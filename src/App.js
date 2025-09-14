import { BrowserRouter } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/header';
import Container from './components/container';
import Screen from './components/screen';
import Carousel from './components/carousel';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const sliderRef = useRef(null);

  return (
    <BrowserRouter>
      <Header sliderRef={sliderRef} />
      <Container>
        <Screen>
          <Carousel sliderRef={sliderRef} />
        </Screen>
      </Container>
    </BrowserRouter>
  );
}

export default App;
