import React, { Component } from 'react';
import {Contact, MiniContact,Text1, Text2, Search, Button, SearchText,ButtonText} from './contactStyle';

export default class contact extends Component {
    render() {
        return (
           <Contact>
               <MiniContact>
               <Text1>Contact</Text1>
                <Text2>Food Stalls with Persons but 
                    also specialized equipment, Skills to manage.</Text2>
                <Search>
                    <SearchText>Enter your message</SearchText>
                    </Search>
                <Button><ButtonText>Send</ButtonText></Button>
                </MiniContact>
           </Contact>
        )
    }
}
