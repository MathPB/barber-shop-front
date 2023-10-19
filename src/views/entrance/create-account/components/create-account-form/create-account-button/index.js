import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';

import { 
    CreateButton,
    CreateButtonText,
} from "./styles"

export default function CreateAccountButtonComponent({ completed, clicked }) {
    const navigation = useNavigation();

    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    return <>
        <CreateButton 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            isPressed={isPressed}
            completed={completed}
            clicked={clicked}
            onPress={() => navigation.navigate('AccountCreated')}
        >
            <CreateButtonText completed={completed} clicked={clicked}>Avançar</CreateButtonText>
        </CreateButton>
    </>
}