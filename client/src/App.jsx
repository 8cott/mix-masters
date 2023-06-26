import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage';
import CreateDrink from './components/CreateDrink';
import ShowDrinkList from './components/ShowDrinkList';
import ShowDrinkDetails from './components/ShowDrinkDetails';
import UpdateDrinkInfo from './components/UpdateDrinkInfo';
import AppBarMUI from './components/AppBarMUI';
import Signup from '../../client/src/components/Signup';
import Login from '../../client/src/components/Login';
import AboutUs from './components/AboutUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StickyFooter from './components/FooterNav';

const App = () => {
  return (
    <Router>
      <AppBarMUI/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/show-drink-list" element={<ShowDrinkList />} />
        <Route path="/create-drink" element={<CreateDrink />} />
        <Route path="/edit-drink/:id" element={<UpdateDrinkInfo />} />
        <Route path="/show-drink/:id" element={<ShowDrinkDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <StickyFooter/>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;
