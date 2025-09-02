import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 20px;

  .search-container {
    display: flex;
    flex-wrap: wrap; /* permite quebrar em telas pequenas */
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
      flex-shrink: 0; /* botão não encolhe */
    }

    button:hover {
      background-color: #125a82ff;
    }

    input {
      flex: 1; /* ocupa espaço disponível */
      min-width: 120px; /* largura mínima */
      padding: 8px 12px;
      border-radius: 20px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 1rem;
      color: gray;
      font-weight: 300;
    }

    input:focus {
      border-color: #4caf50;
      box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    }
  }

  /* === Wrapper da tabela com scroll === */
  .table-wrapper {
    width: 100%;
    overflow-x: auto;  /* scroll horizontal se necessário */
    overflow-y: auto;  /* scroll vertical */
    border-radius: 10px;
    box-shadow: 3px 3px 4px #626262ff;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    min-width: 0; /* permite ajustar à tela */
  }

  th, td {
    padding: 12px 8px;
    text-align: center;
    color: gray;
    font-weight: 300;
    background-color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; /* para ellipsis funcionar */
  }

  th {
    background-color: #3ba2daff;
    color: white;
    position: sticky;
    top: 0;
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

  /* === Media Queries para telas pequenas === */
  @media (max-width: 600px) {
    .search-container {
      flex-direction: column;
      align-items: stretch;
    }

    th, td {
      padding: 8px 4px;
      font-size: 0.85rem;
    }

    td.actions {
      gap: 5px;
    }
  }
`;
