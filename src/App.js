import { GlobalStyle } from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "./components/Input";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
      <Input />
    </>
  );
}

export default App;
