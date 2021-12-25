import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Newsletter: React.FC = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updatges from your favorite products.</Description>
            <InputContainer>
                <Input placeholder='Email' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 60vh;

    background-color: #fcf5f5;
`;

const Title = styled.h2`
    font-size: 70px;

    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;

    border: 1px solid #e6e6e6;

    width: 50%;
    height: 40px;

    background-color: #fff;
`;

const Input = styled.input`
    border: none;

    flex: 8;

    padding-left: 20px;

    z-index: 2;
`;

const Button = styled.button`
    flex: 1;

    border: none;
    background-color: #008080;
    color: #fff;
`;

export default Newsletter;
