import { GlobalStyle } from './styles/global'
import Routes from './routes'
import Providers from './providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
      <Providers />
    </>
  )
}

export default App
