import styled from "styled-components";

export const InputField = styled.input`
  font-family: "Cascadia Code";
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: "Cascadia Code";
  font-size: 15px;
  background-color: #2b09ff;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 300ms backcground-color ease;
  &:hover {
    cursor: pointer;
    background-color: #4427fe;
  }
  &:active {
    background-color: #3a15ff;
  }
`;

export const Page = styled.div`
  background-color: #1a1a1a;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
