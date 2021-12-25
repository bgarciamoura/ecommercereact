import React from 'react';
import styled from 'styled-components';

const Announcement: React.FC = () => {
    return (
        <Container>
            <p>Super Deal! Free Shipping on Orders over R$ 150</p>
        </Container>
    );
};

const Container = styled.div`
    height: 30px;

    background-color: teal;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
`;

export default Announcement;
