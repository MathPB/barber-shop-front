import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';

import { 
    EntranceButton, 
    EntranceButtonText
} from "./styles"

export default function EntranceButtonComponent() {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

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
          onPress={() => navigation.navigate('EntranceLogin')}
        >
          <EntranceButtonText>Entrar</EntranceButtonText>
        </EntranceButton>
    </>
}