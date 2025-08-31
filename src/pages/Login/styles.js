import styled from "styled-components";

export const Container = styled.div`
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;

  img{
    width: 250px;
    margin-bottom: 10px;
  }
`;

export const LoginBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 200;
  color: gray;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 200;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #3ba2daff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #19648cff;
  }
`
export const Credentials = styled.div`
    margin-top: 20px;
    background-color: #1cb83b7d;
    border: 1px solid #118528ff;
    border-radius: 5px;
    color: #095017ff;
    padding: 15px;
    font-weight: 300;
`;