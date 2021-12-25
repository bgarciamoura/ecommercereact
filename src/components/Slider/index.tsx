import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../../data';
import { mobile } from '../../Globals/ResponsiveStyle';

interface IArrowProps {
    direction: 'left' | 'right';
}

interface ISlideProps {
    backgroundColor: string;
}

interface IWrapperProps {
    slideIndex: number;
}

const Slider: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction: 'left' | 'right') => {
        if (direction === 'right') {
            setSlideIndex(slideIndex >= 2 ? 0 : slideIndex + 1);
        } else {
            setSlideIndex(slideIndex <= 0 ? 2 : slideIndex - 1);
        }
        console.log('slideIndex', slideIndex);
    };

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (
                    <Slide backgroundColor={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

const Container = styled.div`
    position: relative;

    display: flex;

    width: 100%;
    height: 100vh;

    overflow: hidden;

    ${mobile({
        style: {
            display: 'none',
        },
    })}
`;

const Arrow = styled.div<IArrowProps>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};

    z-index: 5;

    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    background-color: #ffefef;
    opacity: 0.5;

    border-radius: 50%;

    cursor: pointer;
`;

const Wrapper = styled.div<IWrapperProps>`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div<ISlideProps>`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.backgroundColor};
`;

const ImageContainer = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

const Image = styled.img`
    flex: 1;
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;

    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;

    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    letter-spacing: 3px;
    background-color: transparent;

    cursor: pointer;
`;

export default Slider;
