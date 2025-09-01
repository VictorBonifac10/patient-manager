import { TableContainer } from "./tableStyles"
import { useEffect, useState } from "react";
import api from "../../services/api"

const Table = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios')
      setUsers(data)
    }
    getUsers()

  }, [])

  async function deleteUsers(cpf) {
    await api.delete(`/usuarios/${cpf}`)

    const updatedUsers = users.filter(user => user.cpf !== cpf)

    setUsers(updatedUsers)
  }

  return (
    <TableContainer>
      <div className="search-container">
        <input type="text" placeholder="Pesquisar usuário" />
        <button type="button">
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
            {users.map((user) => (
              <tr key={user.id}>
                <td><i className="ri-user-fill"></i></td>
                <td>{user.cpf && user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</td>
                <td>{user.name}</td>
                <td>{new Date(user.dataNascimento).toLocaleDateString("pt-BR")}</td>
                <td>{user.telefone}</td>
                <td>{user.email}</td>
                <td>{user.planoSaude}</td>
                <td className="actions">
                  <i class="ri-pencil-fill edit" title="Editar"></i>
                  <i class="ri-delete-bin-7-fill delete" title="Excluir" onClick={() => deleteUsers(user.cpf)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableContainer>
  );
};

export default Table;
