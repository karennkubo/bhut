import './App.css';
import Router from './router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className='App'>
      <Router />
      <ToastContainer />
    </div>

  );
}

export default App;
