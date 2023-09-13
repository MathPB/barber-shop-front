import styled from "styled-components/native";

export const GuestEntranceButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;

    width: 328px;
    height: 51px;

    ${({ isPressed }) => (isPressed && 
        'background-color: #FFF'    
    )};

    border-radius: 8px;
    padding: 16px;
    gap: 8px;
`

export const GuestEntranceButtonText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    text-align: center;
    letter-spacing: -0.02px;

    color: #909090;
`