import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 20px;

  .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    button {
      padding: 10px 12px;
      border: none;
      border-radius: 50px;
      background-color: #3ba2daff;
      transition: background 0.3s;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #125a82ff;
    }
  }

  .search-container input {
    width: 300px;
    padding: 8px 12px;
    border-radius: 20px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1rem;
    color: gray;
    font-weight: 300;
  }
  .search-container input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  /* === Wrapper da tabela com scroll === */
  .table-wrapper {
    max-height: 290px; /* altura suficiente p/ ~5 linhas */
    overflow-y: auto;  /* scroll vertical */
    overflow-x: auto;  /* scroll horizontal */
    border-radius: 10px;
    box-shadow: 3px 3px 4px #626262ff;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    min-width: 800px; /* força scroll horizontal se ficar pequeno */
  }

  th, td {
    padding: 12px;
    text-align: center;
    color: gray;
    font-weight: 300;
    background-color: white;
    white-space: nowrap; /* evita quebra de linha dentro da célula */
    text-overflow: ellipsis;
  }

  th {
    background-color: #3ba2daff;
    color: white;
    position: sticky;
    top: 0; /* cabeçalho fixo no scroll */
    z-index: 1;
  }

  td.actions {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  td.actions i {
    cursor: pointer;
    font-size: 1.2rem;
    color: gray;
    transition: color 0.2s;
  }
  td.actions i.edit:hover {
    color: #4caf50;
  }
  td.actions i.delete:hover {
    color: #f44336;
  }
`;
