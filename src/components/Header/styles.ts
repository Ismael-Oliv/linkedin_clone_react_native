import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 5px;
  background-color: white;
`;

export const Input = styled.TextInput`
  padding: 0 5px;
  width: 100%;
`;

export const InputContainer = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;

  background-color: #f8f8f8;
  border-radius: 5px;
  margin: 0 20px;
  padding: 0 5px;
`;
