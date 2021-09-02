import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import './App.css'; 

export const App = () => {
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

