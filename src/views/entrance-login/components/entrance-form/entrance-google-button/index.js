import React, { useState } from "react";

import { Image } from "react-native"

import googleLogo from "../../../../../../assets/images/google-login.png"

import { 
    EntranceGoogleButton,
    EntranceGoogleButtonText,
} from "./styles"

export default function EntranceGoogleButtonComponent() {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    return <>
        <EntranceGoogleButton 
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            isPressed={isPressed}
        >
            <Image source={googleLogo} />
            <EntranceGoogleButtonText>Continuar com Google</EntranceGoogleButtonText>
        </EntranceGoogleButton>
    </>
}