import React, { useState } from "react";

import { TouchableOpacity } from 'react-native';

import { CheckboxContainer, CheckboxMark, CheckboxText } from "./styles"

export default function EntranceCheckBox() {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    return <>
        <TouchableOpacity onPress={toggleCheckbox}>
            <CheckboxContainer>
                <CheckboxMark checked={checked} />
                <CheckboxText>Lembrar-me</CheckboxText>
            </CheckboxContainer>
        </TouchableOpacity>
    </>
}