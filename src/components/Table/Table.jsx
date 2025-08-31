import { TableContainer } from "./tableStyles"

const Table = () => {
  // Dados de exemplo
  const pacientes = [
    {
      id: 1,
      cpf: "123.456.789-00",
      nome: "João Silva",
      idade: 35,
      nascimento: "01/01/1988",
      telefone: "(11) 91234-5678",
      email: "joao@email.com",
      plano: "Unimed"
    },
    {
      id: 2,
      cpf: "987.654.321-00",
      nome: "Maria Souza",
      idade: 28,
      nascimento: "15/07/1995",
      telefone: "(21) 99876-5432",
      email: "maria@email.com",
      plano: "Bradesco Saúde"
    }
  ];

  return (
    <TableContainer>
      <div className="search-container">
        <input type="text" placeholder="Pesquisar usuário" />
        <button type="button">
          <i class="ri-search-2-line"></i>
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Plano de Saúde</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map(paciente => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.cpf}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.idade}</td>
              <td>{paciente.nascimento}</td>
              <td>{paciente.telefone}</td>
              <td>{paciente.email}</td>
              <td>{paciente.plano}</td>
              <td className="actions">
                <i class="ri-pencil-fill edit" title="Editar"></i>
                <i class="ri-delete-bin-7-fill delete" title="Excluir"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
