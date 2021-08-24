import React, { Component } from 'react';
import {Body3, Menu1, Menu2, Menu3, Menu1pic, Menu1title, Menu1titleCost, Desc, Button, ButtonText ,Star,
     Menu2pic, Menu2title, Menu2titleCost, Menu3pic,} from './body3Style'
import vegie from './img/menu/Vegie.png';
import star from './img/menu/star.png';
import salad from './img/menu/Salads.png';
import burger from './img/menu/Burger.png';
export default class body3 extends Component {
    render() {
        return (
           <Body3>
               <Menu1>
                   <Menu1pic src={vegie}/>
                   <Menu1title>Vegie Muffen
                       <Menu1titleCost>16$</Menu1titleCost>
                   </Menu1title>
                   <Desc>There are many things are needed to start the Fast Food Business.</Desc>
                    <Button>
                        <ButtonText>+</ButtonText>
                        <Star src={star}/>
                    </Button>
               
               </Menu1>
               <Menu2>
                   <Menu2pic src={salad}/>
                   <Menu2title>Salads
                   <Menu2titleCost>12$</Menu2titleCost>
                   </Menu2title>
                    <Desc>There are many things are needed to start the Fast Food Business.</Desc>
                    <Button>
                        <ButtonText>+</ButtonText>
                        <Star src={star}/>
                    </Button>
               </Menu2>
               <Menu3>
                    <Menu3pic src={burger} />
                    <Menu1title>Burger
                       <Menu1titleCost>10$</Menu1titleCost>
                   </Menu1title>
                   <Desc>There are many things are needed to start the Fast Food Business.</Desc>
                    <Button>
                        <ButtonText>+</ButtonText>
                        <Star src={star}/>
                    </Button>

               </Menu3>

              
           </Body3>
           

        )
    }
}
