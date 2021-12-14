import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data';
import Product from '../Product';

const Products: React.FC = () => {
    return (
        <Container>
            {popularProducts.map((product, index) => (
                <Product key={product.id} product={product} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;

    padding: 20px;

    flex-wrap: wrap;
    justify-content: space-between;
`;

export default Products;
