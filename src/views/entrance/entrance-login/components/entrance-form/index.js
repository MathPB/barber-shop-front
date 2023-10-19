import React, { useState } from "react";

import EntranceCheckBox from "./entrance-checkbox";
import EntranceButtonComponent from "./entrance-button";
import EntranceGoogleButtonComponent from "./entrance-google-button";

import { Container, EntranceFormInput, EntranceFormTitle, EntranceCheckContainer, ForgetPassword } from "./styles"

export default function EntranceForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [completed, setCompleted] = useState(false);

    const completedForm = () => {
        if (email !== '' && password !== '') {
          setCompleted(true);
        }
    };


    return <Container>
        <EntranceFormTitle>E-mail</EntranceFormTitle>
        <EntranceFormInput
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            onChange={completedForm}
            completed={completed}
        />
        <EntranceFormTitle>Senha</EntranceFormTitle>
        <EntranceFormInput
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChange={completedForm}
            completed={completed}
        />
        <EntranceCheckContainer>
            <EntranceCheckBox />
            <ForgetPassword>Esqueci a senha</ForgetPassword>
        </EntranceCheckContainer>
        <EntranceButtonComponent completed={completed} />
        <EntranceGoogleButtonComponent />
    </Container>
}