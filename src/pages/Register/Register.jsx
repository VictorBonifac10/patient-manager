import { Container, Main } from "../Home/styles"
import HeaderBase from "../../components/HeaderBase/HeaderBase"
import Form from "../../components/Form/Form"
import api from '../../services/api';

function Register() {

    return (
        <Container>
            <HeaderBase />
            <Main>
                <Form onSubmit={async (userData) => {
                    await api.post('/usuarios', userData)
                    console.log("Usuário cadastrado!", userData)
                }} />
            </Main>
        </Container>
    )
}

export default Register
