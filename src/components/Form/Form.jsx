import { FormContainer, Title, FormRow, FormGroup, Label, Input, Button } from './formStyles'
import { useRef } from 'react';
import api from '../../services/api';

function Form() {

    const inputCpf = useRef()
    const inputName = useRef()
    const inputDataNascimento = useRef()
    const inputTelefone = useRef()
    const inputEmail = useRef()
    const inputPlanoSaude = useRef()

    async function registerNewUser(){
        const data = await api.post('/usuarios', {
            cpf: inputCpf.current.value,
            name: inputName.current.value,
            dataNascimento: inputDataNascimento.current.value,
            telefone: inputTelefone.current.value,
            email: inputEmail.current.value,
            planoSaude: inputPlanoSaude.current.value
        })

        console.log(data)
    }

    return (
        <FormContainer>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
                <i class="ri-user-add-fill" style={{ color: "gray", fontSize: "20px" }}></i>
                <Title>Cadastro de Usuário</Title>
            </div>
            <form>
                <FormRow>
                    <FormGroup>
                        <Label htmlFor="cpf">CPF</Label>
                        <Input type="text" id="cpf" placeholder="ex.: 00011122233" ref={inputCpf} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input type="text" id="nome" placeholder="ex.: Maria de Fátima Souza" ref={inputName} />
                    </FormGroup>
                </FormRow>

                <FormRow>
                    <FormGroup>
                        <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                        <Input type="date" id="data_nascimento" ref={inputDataNascimento} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input type="tel" id="telefone" placeholder="ex.: 016999999999" ref={inputTelefone} />
                    </FormGroup>
                </FormRow>

                <FormRow>
                    <FormGroup>
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" id="email" placeholder="ex.: mariadefatima@email.com.br" ref={inputEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="plano">Plano de Saúde</Label>
                        <Input type="text" id="plano" placeholder="ex.: VidaPlus" ref={inputPlanoSaude} />
                    </FormGroup>
                </FormRow>
                <Button type="button" onClick={registerNewUser}>Salvar Informações</Button>
            </form>
        </FormContainer>
    );
}

export default Form;