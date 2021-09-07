import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useContext, Provider } from "react";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import './App.css'; 

function App() {
  return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Footer />
        </div>
      </Router>
  );
}
 export default App;
