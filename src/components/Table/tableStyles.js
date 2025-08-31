import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 20px;

  .search-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    button{
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

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    font-family: Arial, sans-serif;
  }

  th, td{
    padding: 12px;
    text-align: center;
    color: gray;
    font-weight: 300;
    background-color: white;
  }

  th{
    background-color: #3ba2daff;
    color: white;
  }


  td.actions {
    display: flex;
    gap: 10px;
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
`
