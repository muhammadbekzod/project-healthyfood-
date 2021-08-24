import styled from 'styled-components';

export const Container = styled.div`
display:flex;
padding: 150px 31px;


`

Container.Left = styled.div`
display: flex;
flex-direction: column;
flex:1;
margin-top: 100px;
margin-left:150px;
`;


Container.Right = styled.img`
display: flex;
flex: 1;
width: 801px;
height: 670px;
margin-left:  50px;
margin-top: -200px;
mix-blend-mode: darken;
`;


export const Content =styled.div`
width: 555px;
height: 161px;
font-family: Philosopher;
font-style: normal;
font-weight: bold;
font-size: 48.83px;
line-height: 58px;
color: #150C01;


`

export const Description = styled.div`
width: 555px;
height: 43px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #150C01;
opacity: 0.7;
margin: 42px 0 50px 0;

`

export const ButtonWrapper = styled.div`
display:flex;
margin-right: 250px;
`

