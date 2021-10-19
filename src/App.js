
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
function App() {
  return (
    <header className="Ap">
      <Router>
        <Header/>
        <Switch>
          <Route path="">
           
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </header>
  );
}

export default App;
