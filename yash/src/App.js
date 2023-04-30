import './App.css';
import AddStudent from './components/AddStudent';
import Viewreport from './components/Viewreport';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path = "/" element = {<AddStudent/>} />
        <Route exact path = "/viewreport" element = {<Viewreport/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
