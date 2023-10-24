import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #1C1C1E;
  
  margin-top: 10%;
  display: flex;
`

export const RecoverFormTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  padding-left: 4%;
  padding-bottom: 2%;

  color: #C8C8C8;
`

export const RecoverFormInput = styled.TextInput`
  box-sizing: border-box;

  display: flex;
  padding: 12px;
  gap: 4px;

  border-radius: 8px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24.2px;

  letter-spacing: -0.02px;

  color: #A8A8A8;

  width: 92%;
  align-self: center;
  margin-bottom: 95%;

  background-color: #2F2F2F;

  border: ${props => (props.completed ? "1px solid #A8A8A8" : "transparent")};
`

export const RecoverCheckContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: 4%;

  margin-bottom: 55%;
`;

export const ForgetPassword = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: right;

  color: #909090; 

  padding-right: 4%;
`;