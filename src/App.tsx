import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Provider } from "react";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import './App.css'; 
import Mock from './Mock';


export const V2exContext = React.createContext(Mock)

export const App = () => {
  return (
    <V2exContext.Provider value={Mock}>
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
export default App;