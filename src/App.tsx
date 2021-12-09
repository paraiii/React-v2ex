import { BrowserRouter as Router, Route } from "react-router-dom";
import React  from "react";
import './App.css'; 
import styled from "styled-components";
import { Header, Login, Footer, Home, SignUp } from "./Component";
import { LocalizationContextProvider } from "./LocalizationContextProvider";
import { V2exContextProvider } from './V2exContextProvider';
import { MemberPart } from "./Component/Member/MemberPart";
import { TopicPage } from "./Component/Topic/TopicPage";

export const App = () => {
  return ( 
    <V2exContextProvider>
      <LocalizationContextProvider>
        <Router>
          <div>
              <Header />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/topic/:id" element={<TopicPage />} />
              <Route path="/member/:id" element={<MemberPart />} />
              <Route path="/nodes/:id" element={<Home />} />
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