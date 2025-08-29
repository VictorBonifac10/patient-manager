import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 20px;

  .search-container {
    margin-bottom: 15px;
  }
  .search-container input {
    width: 300px;
    padding: 8px 12px;
    border-radius: 20px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1rem;
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
    color: #555;
    transition: color 0.2s;
  }
  td.actions i.edit:hover {
    color: #4caf50;
  }
  td.actions i.delete:hover {
    color: #f44336;
  }
`
