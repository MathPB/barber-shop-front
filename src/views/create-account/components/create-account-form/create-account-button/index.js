import React, { useState } from "react";

import { 
    EntranceButton,
    EntranceButtonText,
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
        <EntranceButton 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            isPressed={isPressed}
        >
            <EntranceButtonText>Entrar</EntranceButtonText>
        </EntranceButton>
    </>
}