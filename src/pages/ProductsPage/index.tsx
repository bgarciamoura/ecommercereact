import React from 'react';
import styled from 'styled-components';
import Announcement from '../../components/Anouncement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import Products from '../../components/Products';
import { mobile } from '../../Globals/ResponsiveStyle';

const ProductsPage: React.FC = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;

    ${mobile({
        style: {
            margin: '0 20px',
            display: 'flex',
            flexDirection: 'column',
        },
    })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

    background-color: #fafafa;

    outline: none;

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #cfcfcf;

    ${mobile({
        style: {
            margin: '4px 0',
        },
    })}
`;

const Option = styled.option``;

export default ProductsPage;
