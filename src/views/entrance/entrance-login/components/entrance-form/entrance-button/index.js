import React, { useState } from "react";

import { 
    EntranceButton,
    EntranceButtonText,
} from "./styles"

export default function EntranceButtonComponent({ completed }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    return <>
        <EntranceButton 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            isPressed={isPressed}
            completed={completed}
        >
            <EntranceButtonText completed={completed}>Entrar</EntranceButtonText>
        </EntranceButton>
    </>
}