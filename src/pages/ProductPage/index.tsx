import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../../components/Anouncement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import { mobile } from '../../Globals/ResponsiveStyle';

interface IFilterColorProps {
    color: string;
}

const ProductPage: React.FC = () => {
    const [amount, setAmount] = useState(1);

    const handleRemoveClick = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    const handleAddClick = () => {
        setAmount(amount + 1);
    };

    return (
        <Container>
            <Announcement />
            <Navbar />
            <ProductContainer>
                <ProductImageContainer>
                    <ProductImage src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
                </ProductImageContainer>
                <ProductInfoContainer>
                    <ProductTitle>Denin Jumpsuit</ProductTitle>
                    <ProductDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit sequi, voluptate
                        ipsam officia vel blanditiis itaque aliquam natus fugiat consequatur aliquid
                        voluptates voluptatibus ullam debitis nesciunt minima dolorem iure.
                    </ProductDescription>
                    <ProductPrice>R$ 20,00</ProductPrice>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='blue' />
                            <FilterColor color='red' />
                            <FilterColor color='yellow' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeItem>XS</FilterSizeItem>
                                <FilterSizeItem>S</FilterSizeItem>
                                <FilterSizeItem>M</FilterSizeItem>
                                <FilterSizeItem>L</FilterSizeItem>
                                <FilterSizeItem>XL</FilterSizeItem>
                                <FilterSizeItem>XXL</FilterSizeItem>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={handleRemoveClick} />
                            <ProductQuantity>{amount}</ProductQuantity>
                            <Add onClick={handleAddClick} />
                        </AmountContainer>
                        <PurchaseButton>ADD TO CART</PurchaseButton>
                    </AddContainer>
                </ProductInfoContainer>
            </ProductContainer>

            <Newsletter />
            <Footer />
        </Container>
    );
};

const Container = styled.div``;

const ProductContainer = styled.div`
    display: flex;

    padding: 50px;

    ${mobile({
        style: {
            padding: '10px',
            flexDirection: 'column',
        },
    })}
`;

const ProductImageContainer = styled.div`
    flex: 1;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 90vh;

    object-fit: cover;

    ${mobile({
        style: {
            height: '40vh',
        },
    })}
`;

const ProductInfoContainer = styled.div`
    flex: 1;

    padding: 0 50px;

    ${mobile({
        style: {
            padding: '0 10px',
        },
    })}
`;

const ProductTitle = styled.h2`
    font-weight: 200;
`;

const ProductDescription = styled.p`
    margin: 20px 0;
`;

const ProductPrice = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;

    margin: 30px 0;

    display: flex;
    justify-content: space-between;

    ${mobile({
        style: {
            width: '100%',
        },
    })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div<IFilterColorProps>`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-color: ${(props) => props.color};

    margin: 0 5px;

    cursor: pointer;
`;

const FilterSize = styled.select`
    padding: 10px;
    margin-left: 20px;

    background-color: #fafafa;

    outline: none;

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #cfcfcf;
`;

const FilterSizeItem = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 50%;

    ${mobile({
        style: {
            width: '100%',
        },
    })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;

    svg {
        cursor: pointer;
    }
`;

const ProductQuantity = styled.span`
    width: 30px;
    height: 30px;

    border-radius: 10px;

    border: 1px solid #cfcfcf;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 5px;
`;

const PurchaseButton = styled.button`
    padding: 15px;
    border: 2px solid teal;

    background-color: #fff;

    cursor: pointer;

    font-weight: 500;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: teal;
        color: #fff;
    }
`;

export default ProductPage;
