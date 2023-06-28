import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './components/Home'
import Register from './components/Register';
import LoginForm from './components/Login';
import FootprintCalculator from './components/FootprintCalculator';
import Discussionforum from './components/Discussionforum';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Register" component={Register} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/FootprintCalculator" component={FootprintCalculator} />
        <Route path="/Discussionforum" component={Discussionforum} />
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
