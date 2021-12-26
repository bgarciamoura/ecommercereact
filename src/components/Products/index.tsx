import React, { useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data';
import Product from '../Product';

interface IProductsProps {
    category?: string;
    filters?: {
        color?: string;
        size?: string;
    };
    sort?: string;
}

const Products: React.FC<IProductsProps> = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

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
