import { BrowserRouter as Router, Route } from "react-router-dom";
import React  from "react";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import './App.css'; 
import { mock, V2exContext } from './V2exContextProvider';
import { translations, LocalizationContext } from "./LocalizationContextProvider";

export const App = () => {
  return ( 
    <V2exContext.Provider value={mock}>
      <LocalizationContext.Provider value={translations}>
        <Router>
          <div className="App">
              <Header />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />
              <Footer />
          </div>
          </Router>
        </LocalizationContext.Provider>
    </V2exContext.Provider>
  );
}
