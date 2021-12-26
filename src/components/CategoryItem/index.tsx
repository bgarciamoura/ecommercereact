import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../Globals/ResponsiveStyle';

interface ICategoryItemProps {
    item: {
        id: number;
        title: string;
        img: string;
        cat: string;
    };
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    flex: 1;

    position: relative;

    margin: 3px;

    height: 70vh;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;

    ${mobile({
        style: {
            height: '30vh',
        },
    })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background: #fff;
    color: #6f6f6f;
    cursor: pointer;

    font-weight: 500;

    letter-spacing: 2px;
`;

export default CategoryItem;
