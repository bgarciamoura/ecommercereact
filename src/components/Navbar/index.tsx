import styled from 'styled-components';
import { mobile } from '../../Globals/ResponsiveStyle';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
                    <Link to='/'>
                        <Logo>2CODE</Logo>
                    </Link>
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

    ${mobile({
        style: {
            height: '50px',
        },
    })}

    a {
        text-decoration: none;
        color: #000;
    }
`;

const Wrapper = styled.div`
    padding: 10px 20px;

    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({
        style: {
            padding: '10px 0px',
        },
    })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({
        style: {
            display: 'none',
        },
    })}
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

    ${mobile({
        style: {
            width: '50px',
        },
    })}
`;

const Center = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight: bold;

    ${mobile({
        style: {
            fontSize: '24px',
        },
    })}
`;

const Right = styled.div`
    flex: 1;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${mobile({
        style: {
            flex: '2',
            justifyContent: 'center',
        },
    })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;

    margin-left: 20px;

    ${mobile({
        style: {
            fontSize: '12px',
            marginLeft: '10px',
        },
    })}
`;

export default Navbar;
