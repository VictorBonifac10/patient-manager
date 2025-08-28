import styled from "styled-components";

export const Container = styled.div`   
    height: 100vh;
    width: 100vw;

    display: grid; 

    grid-template-areas:
    "aside header header"
    "aside main main"
    "aside main main";

    grid-template-columns: 250px 1fr 1fr; /* largura aside e colunas */
    grid-template-rows: 80px 1fr 1fr;     /* altura header e linhas */
`

export const Header = styled.header`
    background-color: green;
    grid-area: header;
`

export const Aside = styled.aside`
    background-color: blue;
    grid-area: aside;
    display: flex;
    flex-direction: column;

    img{
        padding: 10px;
    }

    ul{
        list-style: none;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const Services = styled.div`

    div{
        display: flex;
        gap: 10px;
    }
`

export const Main = styled.main`
    display: grid; 
    
    background-color: red;
    grid-area: main;

    grid-template-areas:
    "banner banner"
    "table table";

    grid-template-columns: 1fr; /* largura aside e colunas */
    grid-template-rows: 180px 1fr;     /* altura header e linhas */

    grid-gap: 10px;

    padding: 10px;
`

export const Banner = styled.div`
    background-color: purple;
    grid-area: banner;

    display: flex;
`
export const Table = styled.div`
    background-color: yellow;
    grid-area: table;
`