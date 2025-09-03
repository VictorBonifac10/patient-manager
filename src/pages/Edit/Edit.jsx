import { Container, Main } from "../Home/styles"
import HeaderBase from "../../components/HeaderBase/HeaderBase"
import Form from "../../components/Form/Form"
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    const { cpf } = useParams(); // pega o CPF da URL
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const { data } = await api.get(`/buscar/usuario/${cpf}`);
                setUserData(data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        }
        fetchUser();
    }, [cpf]);

    const handleUpdate = async (updatedData) => {
        try {
            await api.put(`/usuarios/${cpf}`, updatedData);
            console.log("Usuário atualizado!", updatedData);
            navigate("/home"); // redireciona depois de atualizar
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
        }
    };

    return (
        <Container>
            <HeaderBase />
            <Main>
                {userData ? (
                    <Form initialData={userData} onSubmit={handleUpdate} />
                ) : (
                    <p>Carregando dados do usuário...</p>
                )}
            </Main>
        </Container>
    )
}

export default Edit;
