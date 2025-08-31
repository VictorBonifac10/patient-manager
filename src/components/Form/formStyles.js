import styled from "styled-components";

export const FormContainer = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px auto;

`;

export const Title = styled.h2`
  font-weight: 300;
  color: gray;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-weight: 300;
  color: gray;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-weight: 200;
  color: gray;
`;

export const Button = styled.button`
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #3ba2daff;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #125a82ff;
  }
`