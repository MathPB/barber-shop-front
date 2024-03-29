import styled from "styled-components/native";

export const EntranceButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;

    width: 158px;
    height: 51px;

    ${({ isPressed }) => (isPressed && 
        'background-color: #FFF'    
    )};

    border: 1px solid #909090;
    border-radius: 8px;

    margin-left: 5%;
`

export const EntranceButtonText = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 19.2px;
    text-align: center;
    letter-spacing: -0.02px;

    color: #909090;
`