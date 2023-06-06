import React, { useState } from "react";

import { 
    CreateAccountButton,
    CreateAccountButtonText,
} from "./styles"

export default function EntranceButtonComponent() {
    const [isPressed, setIsPressed] = useState(false);

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
        >
            <CreateAccountButtonText>Entrar</CreateAccountButtonText>
        </CreateAccountButton>
    </>
}