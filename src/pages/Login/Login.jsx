import { Container, LoginBox, Title, Input, Button, Credentials } from "./styles";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

function Login() {
    const inputUsername = useRef();
    const inputPassword = useRef();
    const navigate = useNavigate();

    const Logar = (e) => {
        e.preventDefault(); // evita que a página recarregue ao clicar no botão

        const username = inputUsername.current.value;
        const password = inputPassword.current.value;

        // Usuário e senha fixos do card
        if (username === 'obsmain12' && password === 'obsmain12') {
            // Login correto → redireciona para a tela principal
            navigate('/'); // substitua '/' pelo caminho da tela principal
        } else {
            alert('Usuário ou senha incorretos!');
        }
    }

    return (
        <Container>
            <img src={Logo} alt="logo" />
            <LoginBox>
                <Title>Login</Title>
                <form onSubmit={Logar}>
                    <Input id="name" type="text" placeholder="Username" ref={inputUsername} />
                    <Input id="password" type="password" placeholder="Password" ref={inputPassword} />
                    <Button type="submit">Entrar</Button>
                </form>
            </LoginBox>
            <Credentials>
                <p>
                    Username: obsmain12 <br />
                    Password: obsmain12
                </p>
            </Credentials>
        </Container>
    );
}

export default Login;
