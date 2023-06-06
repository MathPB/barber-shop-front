import styled from "styled-components/native";

export const CreateAccountButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding: 16px;
    gap: 10px;

    width: 328px;
    height: 51px;

    border-radius: 8px;
    
    background-color: ${({ isPressed }) => (isPressed ? '#3F9EFE' : '#007FFF')};

    margin-bottom: 2%;
`;

export const CreateAccountButtonText = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.02px;

    color: #FFFFFF;
`