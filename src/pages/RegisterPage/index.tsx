import styled from 'styled-components';

const RegisterPage: React.FC = () => {
    return (
        <Container>
            <RegisterContainer>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type='text' placeholder='Name' />
                    <Input type='text' placeholder='Lastname' />
                    <Input type='text' placeholder='Username' />
                    <Input type='text' placeholder='Email' />
                    <Input type='text' placeholder='Password' />
                    <Input type='text' placeholder='Confirm your password' />
                    <Agreement>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nostrum corrupti sit
                        accusantium. Dicta nobis, fuga officiis rem, esse placeat molestias labore tempore
                        numquam magni vel illum nostrum magnam dolor?
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </RegisterContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
        url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RegisterContainer = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

export default RegisterPage;
