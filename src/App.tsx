import { BrowserRouter as Router, Route } from "react-router-dom";
import React  from "react";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import './App.css'; 
import { LocalizationContextProvider } from "./LocalizationContextProvider";
import { V2exContextProvider } from './V2exContextProvider';

export const App = () => {
  return ( 
    <V2exContextProvider>
      <LocalizationContextProvider>
        <Router>
          <div className="App">
              <Header />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />
              <Footer />
          </div>
          </Router>
        </LocalizationContextProvider>
    </V2exContextProvider>
  );
}
