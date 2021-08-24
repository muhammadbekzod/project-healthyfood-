import React, { Component } from 'react';
import {FooterNav,Nav, Nav1, Nav2, Nav3, Nav4, Icon,
     Text1, Text2, Text3, Nav2Text1, Nav2Text2, Nav2Text3, Nav2Text4, Nav2Text5, Nav2Text6} from './footerNavStyle'
import icon from './img/logo.png'

export default class footerNav extends Component {
    render() {
        return (
          <FooterNav>
              <Nav>
              <Nav1>
                  <Icon src={icon}/>
                  <Text1>www.company name.com</Text1>
                  <Text2>companyname@gmail.com</Text2>
                  <Text3>Phone: +7 485-118-03-25</Text3>
              </Nav1>
              <Nav2>
                  <Nav2Text1>Home</Nav2Text1>
                  <Nav2Text2>Landingpage</Nav2Text2>
                  <Nav2Text3>Documentation</Nav2Text3>
                  <Nav2Text4>Referral Program</Nav2Text4>
                  <Nav2Text5>UI{'&'} UX Design</Nav2Text5>
                  <Nav2Text6>Web Design</Nav2Text6>

              </Nav2>
              <Nav3>
              <Nav2Text1>Menu</Nav2Text1>
                  <Nav2Text2>Landingpage</Nav2Text2>
                  <Nav2Text3>Documentation</Nav2Text3>
                  <Nav2Text4>Referral Program</Nav2Text4>
                  <Nav2Text5>UI{'&'} UX Design</Nav2Text5>
                  <Nav2Text6>Web Design</Nav2Text6>
              </Nav3>
              <Nav4>
              <Nav2Text1>Company</Nav2Text1>
                  <Nav2Text2>Landingpage</Nav2Text2>
                  <Nav2Text3>Documentation</Nav2Text3>
                  <Nav2Text4>Referral Program</Nav2Text4>
              </Nav4>
              </Nav>
          </FooterNav>
        )
    }
}
