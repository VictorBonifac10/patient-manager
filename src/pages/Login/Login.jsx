import { Container, LoginBox, Title, Input, Button, Credentials } from "./styles"

import Logo from '../../assets/logo.svg'

function Login() {

    function Logar(){
        const name = document.querySelector('#name')
        const password = document.querySelector('#password')

        console.log(name)
        console.log(password)
    }

    return (
        <Container>
            <img src={Logo} alt="logo" />
            <LoginBox>
                <Title>Login</Title>
                <form>
                    <Input id="name" type="text" placeholder="Username" />
                    <Input id="password" type="password" placeholder="Password" />
                    <Button type="submit" onClick={Logar()}>Entrar</Button>
                </form>
            </LoginBox>
            <Credentials>
                <p>
                    Username: obsmain12 <br />
                    Password: obsmain12
                </p>
            </Credentials>
        </Container>
    )
}

export default Login