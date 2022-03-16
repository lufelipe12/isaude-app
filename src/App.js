import { GlobalStyle } from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
