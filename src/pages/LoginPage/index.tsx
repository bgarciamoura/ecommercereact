import React from 'react';
import styled from 'styled-components';
import { mobile } from '../../Globals/ResponsiveStyle';

const LoginPage: React.FC = () => {
    return (
        <Container>
            <LoginContainer>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username' />
                    <Input placeholder='password' />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </LoginContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginContainer = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({
        style: {
            width: '100%',
            margin: '0 6px',
        },
    })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

    ${mobile({
        style: {
            width: '100%',
        },
    })}
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

    ${mobile({
        style: {
            textAlign: 'center',
        },
    })}
`;

export default LoginPage;
