import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

interface IProductProps {
    product: {
        id: number;
        img: string;
    };
}

const Product: React.FC<IProductProps> = ({ product }) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    );
};

const Circle = styled.div`
    width: 200px;
    height: 200px;

    border-radius: 50%;

    background-color: #fff;

    position: absolute;
`;

const Image = styled.img`
    height: 75%;

    z-index: 5;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.2);

    z-index: 10;

    opacity: 0;

    transition: opacity 0.5s ease-in-out;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    width: 40px;
    height: 40px;

    border-radius: 50%;

    background-color: #fff;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #e9f5f5;

        transform: scale(1.1);
    }
`;

const Container = styled.div`
    position: relative;

    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;

    min-width: 280px;
    height: 350px;

    background-color: #f5fbfd;

    &:hover ${Info} {
        opacity: 1;
    }
`;

export default Product;
