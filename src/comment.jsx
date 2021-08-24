import React, { Component } from 'react'
import {Comment, Text1, Text2, Text3, Text4, Text5, Text6, Text7, Text8} from './commentStyle';
import icon from './img/icon.png';
import star from './img/menu/star.png';
export default class comment extends Component {
    render() {
        return (
            <Comment>
                <Text1>Testimonial</Text1> 
                <Text2>Making Food great again and again</Text2>
                <Text3>You need not only Just Food Stalls with Persons 
                    but also specialized equipment, Skills to manage Customers,
                     Effective Product catlogues etc to make your.</Text3>
                <Text4 src={icon}/>
                <Text5>You need not only Just Food Stalls with Persons but also
                     specialized equipment, Skills to manage Customers,
                      Effective Product catlogues etc very successful to make your.</Text5>
                <Text6 src={star}/>
                <Text7>Augusta W. Reynoso</Text7>
                <Text8>UI{'&'}UX DeSIGNER</Text8>

            </Comment>
        )
    }
}
