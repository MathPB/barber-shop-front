import React, { useState } from "react";

import EntranceCheckBox from "./entrance-checkbox";
import EntranceButtonComponent from "./entrance-button";
import EntranceGoogleButtonComponent from "./entrance-google-button";

import { Container, EntranceFormInput, EntranceFormTitle, EntranceCheckContainer, ForgetPassword } from "./styles"

export default function EntranceForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Container>
            <EntranceFormTitle>E-mail</EntranceFormTitle>
            <EntranceFormInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            />
            <EntranceFormTitle>Senha</EntranceFormTitle>
            <EntranceFormInput
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />
            <EntranceCheckContainer>
                <EntranceCheckBox />
                <ForgetPassword>Esqueci a senha</ForgetPassword>
            </EntranceCheckContainer>
            <EntranceButtonComponent />
            <EntranceGoogleButtonComponent />
        </Container>
    </>
}