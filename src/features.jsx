import React, { Component } from 'react';
import { Features,  Parag, Parag1, Sticker, Sticker2, Sticker3, Parag2,Icon, Icon2,Icon3} from './featuresStyle';
import home from './img/Group1.png';
import home1 from './img/home.png';
import delivery from './img/Group2.png';
import delivery2 from './img/delivery.png'
import smile from './img/Group3.png';
import smile2 from './img/smile.png'

export default class features extends Component {
    render() {
        return (
        <Features>
            <Parag>
            Features
            </Parag>
            <Parag2>
            Food with a New Passion

            </Parag2>
            <Parag1>
             <Sticker src={home}>
             </Sticker>
                <Icon src={home1}></Icon>
             <Sticker2 src={delivery}>
             </Sticker2>
                <Icon2 src={delivery2}></Icon2>
             <Sticker3 src={smile}></Sticker3> 
             <Icon3 src={smile2}></Icon3>
            </Parag1>
        </Features>
        )
    }
}
