import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const SegregationLine = styled.Text`
    width: 35%;
    height: 0px;

    border: 1px solid #383838;

    margin: 10px 20px 10px;
`

export const SegregationText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.02px;

    color: #383838;
`
