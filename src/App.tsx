import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Provider } from "react";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import './App.css'; 
// import mock from './Mock';
import { mock, V2exContext } from './V2exContextProvider';

export const App = () => {
  return ( 
    <V2exContext.Provider value={mock}>
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Footer />
        </div>
        </Router>
    </V2exContext.Provider>
  );
}
