import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10%
  background-color: #2A2A2A;

  display: flex;
`

export const EntranceFormTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  padding-left: 4%;

  color: #A8A8A8;
`

export const EntranceFormInput = styled.TextInput`
  box-sizing: border-box;

  display: flex;
  padding: 12px;
  gap: 4px;

  border: 1px solid #757575;
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: -0.02px;

  color: #A8A8A8;

  width: 92%;
  align-self: center;
  margin-bottom: 6%;
`

export const EntranceCheckContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 4%;
`;

export const ForgetPassword = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: right;

  color: #757575; 

  padding-right: 4%;
`;