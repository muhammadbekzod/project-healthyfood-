import React, { Component } from 'react';
import { Container, Content, Description, ButtonWrapper} from './bodyStyle';

import img from './img/img1.png';
import { Button } from './navbarStyle';



export default class Body extends Component {
    render() {
        return (
   
        <Container>
            <Container.Left >
                <Content>
                    Making time a good time by making food the good food.
                    </Content>
                <Description>
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment.
                </Description>
                <ButtonWrapper>
            <Button book bgcolor='#DC780B;'>Order now</Button>
            <Button color>Food Details</Button>
                </ButtonWrapper>
            
            </Container.Left>
            <Container.Right src={img} >

            </Container.Right>
            
        </Container>

        )
    }
}
