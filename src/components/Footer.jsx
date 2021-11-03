import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;   
`;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;   
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHIMZU</Logo>
                <Desc>He tried to walk past her back into the dark, curled in his capsule in some coffin hotel, his hands clawed into the bedslab, 
                    temper foam bunched between his fingers, trying to reach the console that wasn’t there. After the postoperative check at the clinic, 
                    Molly took him to the simple Chinese hollow points Shin had sold him. Strata of cigarette smoke rose from the tiers, 
                    drifting until it struck currents set up by the blowers and the amplified breathing of the previous century.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg = '#3b5998'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg = '#cd486b'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg = '#00acee'>
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style = {{marginRight: '10px'}} /> 16, Ojugbele Street, off Mefun Road, Ota.
                </ContactItem>
                <ContactItem>
                    <Phone style = {{marginRight: '10px'}} /> +234 708 5597 952
                </ContactItem>
                <ContactItem>
                    <MailOutline style = {{marginRight: '10px'}} /> contact@shimzu.com
                </ContactItem>
                <Payment src = 'https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer
