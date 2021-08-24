import React, { Component } from 'react';
import { Wrapper} from './style';
import Navbar from './Navbar.jsx';
import Body from './body.jsx';
import Features from './features.jsx';
import Body2 from './body2.jsx';
import Body3 from './body3.jsx';
import MainMenu from './body31.jsx';
import Footer from './footer.jsx'
import Comment from './comment.jsx'
import Contact  from './contact.jsx';
import FooterNav from './footerNav.jsx';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Body />
        <Features />
        <Body2 />
        <Body3 />
        <MainMenu />
        <Footer />
        <Comment />
        <Contact />
        <FooterNav />
      </Wrapper>
    );
  }
}





