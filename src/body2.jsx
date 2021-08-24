import React, { Component } from 'react';
import {Body2, Apitito, Pic, Cont, Text, Text2, Text3, ButtonWrapper, Text4, Menu, Menutext, Desc } from './body2Style';
import { Button } from './navbarStyle';
import apitito2 from './img/apitito.png';
export default class body2 extends Component {
    render() {
        return (
            <Body2>
                <Apitito>
                    <Pic src={apitito2}/>
                    <Cont>
                        <Text>ABOUT US</Text>
                        <Text2>Food Stalls with Persons but  to  Product marketing plane
                        catlogues etc to. </Text2>
                        <Text3>
                        There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                        equipment  make your marketing plane Effective.
                        </Text3>
                        <ButtonWrapper>
            <Button book bgcolor='#DC780B;'>Read More</Button>
            
                </ButtonWrapper>
                    </Cont>
                </Apitito>
                <Text4>
                    <Menu>MENU</Menu>
                    <Menutext>Food Full of treaty Love</Menutext>
                    <Desc>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </Desc>
                </Text4>


            </Body2>
        )
    }
}
