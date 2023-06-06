import styled from "styled-components/native";

export const EntranceButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;

    width: 361px;
    height: 56px;

    ${({ isPressed }) => (isPressed && 
        'background-color: #FFF'    
    )};

    border: 1px solid #666666;
    border-radius: 100px;

    margin-top: 2%;
`

export const EntranceButtonText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.02px;

    color: #666666;
`