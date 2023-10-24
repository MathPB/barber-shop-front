import React, { useState } from "react";

import RecoverButtonComponent from "./recover-button";

import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import { Container, RecoverFormInput, RecoverFormTitle } from "./styles"

export default function RecoverForm() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    const [completed, setCompleted] = useState(false);

    const completedForm = () => {
        if (email !== '') {
          setCompleted(true);
        }
    };


    return <Container>
        <RecoverFormTitle>E-mail</RecoverFormTitle>
        <RecoverFormInput
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            onChange={completedForm}
            completed={completed}
        />
        <RecoverButtonComponent completed={completed} />
    </Container>
}