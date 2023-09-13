import React, { useState } from "react";

import CreateAccountButtonComponent from "./create-account-button";
import CreateAccountGoogleButtonComponent from "./create-account-google-button";

import { Container, CreateAccountFormInput, CreateAccountFormTitle, CreateAccountCheckContainer, ForgetPassword } from "./styles"

export default function CreateAccountForm() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [completed, setCompleted] = useState(false);

    const completedForm = () => {
        if (nome !== '' && email !== '' && password !== '') {
          setCompleted(true);
        }
    };

    return <>
        <Container>
            <CreateAccountFormTitle>Nome</CreateAccountFormTitle>
            <CreateAccountFormInput
                value={nome}
                onChangeText={setNome}
                onChange={completedForm}
                placeholder="Digite seu nome completo"
                completed={completed}
            />
            <CreateAccountFormTitle>E-mail</CreateAccountFormTitle>
            <CreateAccountFormInput
                value={email}
                onChangeText={setEmail}
                onChange={completedForm}
                placeholder="Digite seu endereço de e-mail"
                keyboardType="email-address"
                completed={completed}
            />
            <CreateAccountFormTitle>Senha</CreateAccountFormTitle>
            <CreateAccountFormInput
                value={password}
                onChangeText={setPassword}
                onChange={completedForm}
                placeholder="Crie uma senha"
                secureTextEntry={true}
                completed={completed}
            />
            <CreateAccountButtonComponent completed={completed} />
            <CreateAccountGoogleButtonComponent />
        </Container>
    </>
}