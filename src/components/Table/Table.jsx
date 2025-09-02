import { TableContainer } from "./tableStyles"
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Importa o navigate
import api from "../../services/api"

const Table = () => {

  const inputCpf = useRef()
  const navigate = useNavigate(); // <-- Cria o navigate

  async function searchUser() {
    let cpf = inputCpf.current.value

    // Remove pontos e traços
    cpf = cpf.replace(/[.\-]/g, "")

    if (!cpf) {
      const { data } = await api.get('/usuarios')
      setUsers(data)
      return
    }

    try {
      const { data } = await api.get(`/buscar/usuario/${cpf}`)

      if (!data) {
        alert("Usuário não encontrado!")
        setUsers([])
        return
      }

      setUsers([data])
    } catch (error) {
      console.error("Erro ao buscar usuário:", error)
      alert("Erro ao buscar usuário!")
      setUsers([])
    }
  }

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios')
      setUsers(data)
    }
    getUsers()

  }, [])

  async function deleteUsers(cpf) {
    const confirmDelete = window.confirm("Você tem certeza que deseja deletar este usuário?")

    if (!confirmDelete) return // se clicar em "Cancelar", não faz nada

    await api.delete(`/usuarios/${cpf}`)

    const updatedUsers = users.filter(user => user.cpf !== cpf)
    setUsers(updatedUsers)
  }

  // Função para navegar para a página de edição
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
            {users.length === 0 ? (
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
