import styled from "styled-components/native";

export const EntranceGoogleButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding: 16px;
    gap: 10px;

    width: 92%;
    height: 51px;

    border: 1px solid #909090;
    border-radius: 8px;

    margin-bottom: 2%;
`;

export const EntranceGoogleButtonText = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.02px;

    color: #909090;
`