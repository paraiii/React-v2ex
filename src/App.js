import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Home from './Component/Home';



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
