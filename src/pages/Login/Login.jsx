import { Container, LoginBox, Title, Input, Button, Credentials } from "./styles";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';


//------------------------------------------------------------------
// SIMULA UMA PAGINA DE LOGIN P/ CONTROLE DE ACESSO
//------------------------------------------------------------------

function Login() {
    const inputUsername = useRef();
    const inputPassword = useRef();
    const navigate = useNavigate();

    const Logar = (e) => {
        e.preventDefault();

        const username = inputUsername.current.value;
        const password = inputPassword.current.value;

        if (username === 'obsmain12' && password === 'obsmain12') {
            navigate('/home');
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
