import styled from "styled-components";

export const Container = styled.div`  
    background-color: #a1e1ffff;
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
    }

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
`

export const Services = styled.div`

    div{
        display: flex;
        gap: 10px;
        cursor: pointer;
        color: gray;
        padding: 10px;
        transition: 0.5s;

        i{
            font-size: 20px;
        }

        li{
            font-weight: 300;
        }
    }

    div:hover{
        background-color: #3ba2daff;
        color: white;
    }
`

export const Main = styled.main`
    img{
        width: 400px;
    }

    grid-area: main;
    margin: 10px;

`

export const Banner = styled.div`
    grid-area: banner;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    img{
        margin: 5px;
        border-radius: 10px;
        box-shadow: 3px 3px 4px #626262ff;
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
        width: 210px;
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
`