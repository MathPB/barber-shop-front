import React, { useState } from "react";

import CreateAccountCheckBox from "./create-account-checkbox";
import CreateAccountButtonComponent from "./create-account-button";
import CreateAccountGoogleButtonComponent from "./create-account-google-button";

import { Container, CreateAccountFormInput, CreateAccountFormTitle, CreateAccountCheckContainer, ForgetPassword } from "./styles"

export default function CreateAccountForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <>
        <Container>
            <CreateAccountFormTitle>E-mail</CreateAccountFormTitle>
            <CreateAccountFormInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            />
            <CreateAccountFormTitle>Senha</CreateAccountFormTitle>
            <CreateAccountFormInput
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />
            <CreateAccountCheckContainer>
                <CreateAccountCheckBox />
                <ForgetPassword>Esqueci a senha</ForgetPassword>
            </CreateAccountCheckContainer>
            <CreateAccountButtonComponent />
            <CreateAccountGoogleButtonComponent />
        </Container>
    </>
}