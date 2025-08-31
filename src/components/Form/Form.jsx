import { FormContainer, Title, FormRow, FormGroup, Label, Input, Button } from './formStyles'

function Form() {
    return (
        <FormContainer>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px"}}>
                <i class="ri-user-add-fill" style={{ color: "gray", fontSize: "20px"}}></i>
                <Title>Cadastro de Usuário</Title>
            </div>
            <form>
                <FormRow>
                    <FormGroup>
                        <Label htmlFor="cpf">CPF</Label>
                        <Input type="text" id="cpf" placeholder="ex.: 00011122233" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input type="text" id="nome" placeholder="ex.: Maria de Fátima Souza" />
                    </FormGroup>
                </FormRow>

                <FormRow>
                    <FormGroup>
                        <Label htmlFor="idade">Idade</Label>
                        <Input type="number" id="idade" placeholder="ex.: 43" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="data_nascimento">Data de Nascimento</Label>
                        <Input type="date" id="data_nascimento" />
                    </FormGroup>
                </FormRow>

                <FormRow>
                    <FormGroup>
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input type="tel" id="telefone" placeholder="ex.: 016999999999" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">E-mail</Label>
                        <Input type="email" id="email" placeholder="ex.: mariadefatima@email.com.br" />
                    </FormGroup>
                </FormRow>

                <FormRow>
                    <FormGroup style={{ flex: 1 }}>
                        <Label htmlFor="plano">Plano de Saúde</Label>
                        <Input
                            type="text"
                            id="plano"
                            placeholder="ex.: VidaPlus"
                        />
                    </FormGroup>
                </FormRow>

                <Button type="submit">Salvar Informações</Button>
            </form>
        </FormContainer>
    );
}

export default Form;