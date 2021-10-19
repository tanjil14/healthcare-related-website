
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import  NotFound  from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/Home/About/About';
import Doctors from './Pages/Doctors/Doctors';
import Book from './Pages/Home/Book/Book';
import Review from './Pages/Home/Review/Review';
import Login from './Pages/Login/Login';
import Register from "./Pages/Login/Register"
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
function App() {
  return (
    <header className="Ap">
      <AuthProvider> 
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
          <PrivateRoute path="/service/:serviceId">
             <ServiceDetail/>
          </PrivateRoute>
          <Route path="/about">
             <About/>
          </Route>
          <Route path="/doctors">
             <Doctors/>
          </Route>
          <Route path="/book">
             <Book/>
          </Route>
          <Route path="/review">
             <Review/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </header>
  );
}

export default App;
