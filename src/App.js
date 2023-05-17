import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from "./components/Form";

function App() {
  return (
    <>
    <ToastContainer autoClose={2000}/>
      <Form />
    </>
  );
}

export default App;



























