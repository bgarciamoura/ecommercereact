import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>2CODE</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

const Container = styled.nav`
    height: 60px;
    /* background-color: #444444;
    color: #fff; */

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 10px 20px;

    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid #ccc;

    display: flex;
    align-items: center;

    margin-left: 25px;
    padding: 5px;

    .icon {
        color: #888;
        font-size: 16px;
    }
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;

    margin-left: 20px;
`;

export default Navbar;
