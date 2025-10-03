import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './globalStyles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
