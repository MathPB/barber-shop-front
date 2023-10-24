import React, { useState } from "react";

import { 
    RecoverButton,
    RecoverButtonText,
} from "./styles"

export default function RecoverButtonComponent({ completed }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    return <>
        <RecoverButton 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            isPressed={isPressed}
            completed={completed}
        >
            <RecoverButtonText completed={completed}>Avançar</RecoverButtonText>
        </RecoverButton>
    </>
}