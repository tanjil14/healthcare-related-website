
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import  NotFound  from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <header className="Ap">
      {/* <AuthProvider>  */}
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="/home">
             <Home/>
          </Route>
          <Route path="/services">
             <Services/>
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      {/* </AuthProvider> */}
    </header>
  );
}

export default App;
