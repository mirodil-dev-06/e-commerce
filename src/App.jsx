import Footer from './components/Footer';
import Header from './components/Header'
import AllRoutes from './routes/index'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <Header/>
    <AllRoutes/>
          <ToastContainer position="top-right" autoClose={3000} />
          <Footer/>

    </>
  )
}

export default App