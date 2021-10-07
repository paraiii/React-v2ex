import { BrowserRouter as Router, Route } from "react-router-dom";
import React  from "react";
import './App.css'; 
import styled from "styled-components";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import { LocalizationContextProvider } from "./LocalizationContextProvider";
import { V2exContextProvider } from './V2exContextProvider';
import { MemberPart } from "./Component/Member/MemberPart";
import { TopicPage } from "./Component/Topic/TopicPage";
import { RightSideNodes } from "./Component/Topic/RightSideNodes";

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
              <Route exact path="/topic/:id" component={TopicPage} />
              <Route exact path="/member/:id" component={MemberPart} />
              <Route exact path="/nodes/:id" component={RightSideNodes} />
              <Line />
              <Footer />
          </div>
          </Router>
        </LocalizationContextProvider>
    </V2exContextProvider>
  );
}


const Line = styled.hr`
  color: #C7C7C7;
  border-bottom: 1px solid;
`