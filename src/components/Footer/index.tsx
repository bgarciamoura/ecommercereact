import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../Globals/ResponsiveStyle';

interface ISocialIconProps {
    backgroundColor: string;
}

const Footer: React.FC = () => {
    return (
        <Container>
            <Left>
                <Logo>2Code.</Logo>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi officia itaque unde
                    dignissimos reiciendis at eius amet ullam modi minus. Voluptatum inventore aut pariatur
                    id. Voluptatum asperiores placeat assumenda. Sint?
                </Description>
                <SocialContainer>
                    <SocialIcon backgroundColor={'#3b5999'}>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon backgroundColor={'#e4405f'}>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon backgroundColor={'#55acEE'}>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon backgroundColor={'#e60023'}>
                        <Pinterest />
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
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem>
                    <Room className={'icon'} /> Rua Benedito Leme Vieira, 174, Jardim Paulista, São Paulo -
                    SP, 04551-000
                </ContactItem>
                <ContactItem>
                    <Phone className={'icon'} /> +55 11 99999-9999
                </ContactItem>
                <ContactItem>
                    <Mail className={'icon'} /> contact@2code.com
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    );
};

const Container = styled.div`
    display: flex;

    ${mobile({
        style: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    })}
`;

const Left = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h2``;

const Description = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div<ISocialIconProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 20px;

    width: 40px;
    height: 40px;

    border-radius: 50%;

    color: ${(props) => props.backgroundColor};
`;

const Center = styled.div`
    flex: 1;

    padding: 20px;

    ${mobile({
        style: {
            display: 'none',
        },
    })}
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

    ${mobile({
        style: {
            backgroundColor: '#f3f3f3',
        },
    })}
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 20px;

    .icon {
        margin-right: 10px;
    }
`;

const Payment = styled.img`
    width: 50%;
`;

export default Footer;
