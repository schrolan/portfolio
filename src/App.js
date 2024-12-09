import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Container from './components/container'
import Footer from './components/footer'
import Screen from './components/screen'

const httpLink = createHttpLink({
  uri: '/graphql'
})

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Screen>
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
        </Screen>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
