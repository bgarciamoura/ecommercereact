import React from 'react';
import styled from 'styled-components';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem';

const Categories: React.FC = () => {
    return (
        <Container>
            {categories.map((category, index) => (
                <CategoryItem key={category.id} item={category} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 20px;
`;

export default Categories;
