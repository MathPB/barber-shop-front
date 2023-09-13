import React, { useState } from "react";

import { 
    CreateButton,
    CreateButtonText,
} from "./styles"

export default function CreateAccountButtonComponent({ completed }) {

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
        >
            <CreateButtonText completed={completed}>Avançar</CreateButtonText>
        </CreateButton>
    </>
}