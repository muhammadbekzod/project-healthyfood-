import React, { Component } from 'react'
import { Container, Logo, NavItem, Button} from './navbarStyle'
import logo from './img/logo.png'

export default class Navbar extends Component {
    state={
        isActive: 'home',
    }
    render() {
        return (
           <Container>
               <Logo src={logo} alt='logo'/>
               <NavItem onClick={()=> this.setState({isActive:'home'})} isActive={this.state.isActive==='home'}>Home</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'about'})} isActive={this.state.isActive==='about'}>About us</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'menu'})} isActive={this.state.isActive==='menu'}>Menu</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'features'})} isActive={this.state.isActive==='features'}>Features</NavItem>
               <NavItem onClick={()=> this.setState({isActive:'contact'})} isActive={this.state.isActive==='contact'}>Contact us</NavItem>

               <Button book bgcolor='#DC780B;'>
                   Booking Now
               </Button>

           </Container>
        )
    }
}
