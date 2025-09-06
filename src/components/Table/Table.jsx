import { TableContainer } from "./tableStyles"
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"

const Table = () => {

  const inputCpf = useRef()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  //------------------------------------------------------------------
  // CARREGA OS DADOS DO BD E TRAZ PARA A TABELA
  //------------------------------------------------------------------

  async function searchUser() {

    let cpf = inputCpf.current.value.replace(/[.\-]/g, "");

    setLoading(true);

    if (!cpf) {
      const { data } = await api.get('/usuarios');
      setUsers(data);
    } else {
      try {
        const { data } = await api.get(`/buscar/usuario/${cpf}`);
        if (!data) {
          alert("Usuário não encontrado!");
          setUsers([]);
        } else {
          setUsers([data]);
        }
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        alert("Erro ao buscar usuário!");
        setUsers([]);
      }
    }

    setLoading(false);

  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const { data } = await api.get('/usuarios');
      setUsers(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  //------------------------------------------------------------------
  // DELETA USUÁRIOS APARTIR DO CPF(ID) DE CADA UM
  //------------------------------------------------------------------

  async function deleteUsers(cpf) {
    const confirmDelete = window.confirm("Você tem certeza que deseja deletar este usuário?")

    if (!confirmDelete) return

    await api.delete(`/usuarios/${cpf}`)

    const updatedUsers = users.filter(user => user.cpf !== cpf)
    setUsers(updatedUsers)
  }

  //------------------------------------------------------------------
  // NAVEGA PARA A PAGINA DE EDITAR USUÁRIOS
  //------------------------------------------------------------------
  
  const editUser = (cpf) => {
    navigate(`/editar-usuario/${cpf}`);
  }

  return (
    <TableContainer>
      <div className="search-container">
        <input type="text" placeholder="Pesquisar usuário" ref={inputCpf} />
        <button type="button" onClick={searchUser}>
          <i className="ri-search-2-line"></i>
        </button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>CPF</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Plano de Saúde</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  Carregando dados do usuário. Aguarde!
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  Nenhum usuário encontrado
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td><i className="ri-user-fill"></i></td>
                  <td>{user.cpf && user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</td>
                  <td>{user.name}</td>
                  <td>{new Date(user.dataNascimento).toLocaleDateString("pt-BR")}</td>
                  <td>{user.telefone}</td>
                  <td>{user.email}</td>
                  <td>{user.planoSaude}</td>
                  <td className="actions">
                    <i className="ri-pencil-fill edit" title="Editar" onClick={() => editUser(user.cpf)}></i>
                    <i className="ri-delete-bin-7-fill delete" title="Excluir" onClick={() => deleteUsers(user.cpf)}></i>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </TableContainer>
  );
};

export default Table;
