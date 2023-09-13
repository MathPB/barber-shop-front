import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';

import { 
    CreateAccountButton,
    CreateAccountButtonText,
} from "./styles"

export default function CreateAccountButtonComponent() {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    return <>
        <CreateAccountButton 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            isPressed={isPressed}
            onPress={() => navigation.navigate('CreateAccount')}
        >
            <CreateAccountButtonText>Criar Conta</CreateAccountButtonText>
        </CreateAccountButton>
    </>
}