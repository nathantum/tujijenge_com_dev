
import Home from "./Home";
import About from "./About";
import Programs from "./Programs";
import Events from "./Events";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Header title="Tujijenge Community Developers" />
      <Nav />
      <Switch>
        <Route  exact path="/" >
          <Home />
        </Route>
        <Route exact  path="/about" >
          <About />
        </Route>
        <Route  exact path="/programs" >
          <Programs />
        </Route>
        <Route  exact path="/events" >
          <Events />
        </Route>
        <Route  exact path="/contact" >
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App
