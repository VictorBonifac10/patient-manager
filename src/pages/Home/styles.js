import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ darkMode }) => darkMode ? "#0e4069ff" : "#c3eaffff"};
  min-height: 100vh;  /* ocupa sempre toda a altura da tela */
  width: 100%;
  display: grid;
  grid-template-areas:
    "aside header header"
    "aside main main"
    "aside main main";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr;
  
  /* Faz o grid ocupar todo o espaço */
  height: 100%;
  align-content: stretch;
  justify-content: stretch;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "aside"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;

  }
`;


export const Header = styled.header`
  background-color: white;
  grid-area: header;

  margin: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 3px 3px 4px #626262ff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  p{
    color: gray;
    font-size: 18px;
    font-weight: 300;
  }

  div{
    display: flex;
    gap: 8px;   
  }

  i{
    font-size: 19px;
    color: gray;
    border: 1px solid gray;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;
  }

  i:hover{
    background-color: #3ba2daff;
    border: 1px solid #3ba2daff;
    color: white;
  }

  /* Centralizar melhor em telas pequenas */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
    max-width: 100%;
  }
`

export const Aside = styled.aside`
  background-color: white;
  grid-area: aside;
  display: flex;
  flex-direction: column;

  margin: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 3px 3px 4px #626262ff;

  img{
    padding: 5px;
    
    @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
    width: 30%;
  }}

  ul{
    list-style: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2{
    color: gray;
    font-size: 18px;
    font-weight: 300;
  }

  /* Em celular ocupar largura total */
  @media (max-width: 768px) {
    width: 96%;
    text-align: center;
  }
`

export const Services = styled.div`
  button{
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: gray;
    background-color: transparent;
    border: none;
    padding: 10px;
    transition: 0.5s;

    i{
      font-size: 20px;
    }

    li{
      font-weight: 300;
      font-size: 15px;
    }
  }

  button:hover{
    background-color: #3ba2daff;
    color: white;
  }

  /* Botões centralizados no mobile */
  @media (max-width: 768px) {
    button {
      justify-content: center;
      width: 100%;
    }
  }
`

export const Main = styled.main`
  grid-area: main;
  margin: 10px;
`

export const Banner = styled.div`
  grid-area: banner;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap; /* permite quebra de linha */

  img{
    margin: 5px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #626262ff;
    max-width: 100%;
  }

  div{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #626262ff;
    width: 200px;
    height: 130px;
    margin: 5px;
    gap: 2px;
    color: gray;
    transition: 0.5s;

    h3{
      font-size: 50px;
    }
    p{
      font-size: 18px;
      font-weight: 300;
    }
  }

  div:hover{
    background-color: #3ba2daff;
    color: white;
    transform: scale(1.1);
  }

  /* Mobile: empilhar */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    div {
      width: 99%;
      height: auto;
    }

    img{
        width: 99%;
        height: auto;
    }
  }
`