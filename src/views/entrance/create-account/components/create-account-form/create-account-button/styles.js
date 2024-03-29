import styled from "styled-components/native";

export const CreateButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding: 16px;
    gap: 10px;

    width: 92%;
    height: 51px;

    border: 1px solid #007FFF;
    border-radius: 8px;

    margin-bottom: 2%;
    margin-top: 13%;

    background-color: ${props => (props.completed ? "#007FFF" : "transparent")};
`;

export const CreateButtonText = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.02px;

    color: ${props => (props.completed ? "#FFF" : "#007FFF")}
`