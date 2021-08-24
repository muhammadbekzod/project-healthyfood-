import React, { Component } from 'react'
import {Body31 , MainMenu, Button1, ButtonText1} from './body31Style';
import { Menu1, Menu1pic, Menu1title, Menu1titleCost, Desc, Button, ButtonText, Star, Menu2, Menu3 } from './body3Style';



import delmonico from './img/menu/Delmonico.png';
import egg from './img/menu/Egg.png';
import peach from './img/menu/Peach.png';
import star from './img/menu/star.png';
export default class body31 extends Component {
    render() {
        return (
            <MainMenu>
        <Body31>
            <Menu1>
            <Menu1pic src={delmonico}/>
            <Menu1title>Delmonico Steak dish
                <Menu1titleCost>14$</Menu1titleCost>
            </Menu1title>
            <Desc>There are many things are needed to start the Fast Food Business.</Desc>
             <Button>
                 <ButtonText>+</ButtonText>
                 <Star src={star}/>
             </Button>
              </Menu1>
            <Menu2>
            <Menu1pic src={egg}/>
            <Menu1title>Egg Masala
                <Menu1titleCost>9$</Menu1titleCost>
            </Menu1title>
            <Desc>There are many things are needed to start the Fast Food Business.</Desc>
             <Button>
                 <ButtonText>+</ButtonText>
                 <Star src={star}/>
             </Button>
            </Menu2>
            <Menu3>
            <Menu1pic src={peach}/>
            <Menu1title>Egg Masala
                <Menu1titleCost>15$</Menu1titleCost>
            </Menu1title>
            <Desc>There are many things are needed to start the Fast Food Business.</Desc>
             <Button>
                 <ButtonText>+</ButtonText>
                 <Star src={star}/>
             </Button>
            </Menu3>
            </Body31>
         
            <Button1 >
               <ButtonText1>Learn More</ButtonText1> 
            </Button1>
                
       
        </MainMenu>
        )
    }
}
