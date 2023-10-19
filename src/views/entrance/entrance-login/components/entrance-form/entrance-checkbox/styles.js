import styled from "styled-components/native";

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const CheckboxMark = styled.View`
  width: 20px;
  height: 20px;
  border-width: 2px;
  border: 1px solid #909090;
  /* border-color: ${(props) => (props.checked ? 'green' : 'black')}; */
  border-radius: 4px;
  /* background-color: ${(props) => (props.checked ? 'green' : 'transparent')}; */
  padding-left: 4%;
`;

export const CheckboxText = styled.Text`
  width: 91px;
  height: 19px;

  color: #909090;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
`;