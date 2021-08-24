import React, { Component } from 'react'
import {Footer, Bar , Desc, Text1, Text2, Text3, Button, Button1, ButtonImg, Button1Img, ButtonBar, Phone} from './footerStyle';
import applestore from './img/Appstore.png';
import googleplay from './img/Googleplay.png';
import phone from './img/Phone.png';

export default class footer extends Component {
    render() {
        return (
            <Footer>
                <Bar>
            <Desc>
                <Text1>TAKE AWAY</Text1>
                <Text2>Food Stalls with Persons but  to  Product marketing plane. </Text2>
                <Text3>There are many things are needed to start the Fast Food Business. 
                    You need not only Just Food Stalls with Persons but also specialized
                     equipmentwith Persons but also  Just Food Stalls with Persons.</Text3>
            </Desc>
            <ButtonBar>
            <Button >
                <ButtonImg src = {applestore}/>
            </Button>
            <Button1 >
                <Button1Img src = {googleplay}/>
            </Button1>
            </ButtonBar>
            </Bar>
                <Phone src ={phone}/>
            </Footer>
        )
    }
}
