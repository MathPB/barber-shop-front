import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';

import { 
  GuestEntranceButton, 
  GuestEntranceButtonText
} from "./styles"

export default function GuestEntranceButtonComponent() {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

    const handlePressIn = () => {
      setIsPressed(true);
    };
  
    const handlePressOut = () => {
      setIsPressed(false);
    };

    return <>
        <GuestEntranceButton
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          isPressed={isPressed}
          onPress={() => navigation.navigate('EntranceLogin')}
        >
          <GuestEntranceButtonText>Entrar como Convidado</GuestEntranceButtonText>
        </GuestEntranceButton>
    </>
}