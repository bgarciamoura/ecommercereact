import React from 'react';
import styled from 'styled-components';

interface ICategoryItemProps {
    item: {
        id: number;
        title: string;
        img: string;
    };
}

const CategoryItem: React.FC<ICategoryItemProps> = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
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
