import React from "react";

import { Container, CreateAccountSubTitle, InformationText } from "./styles"

import CreateAccountTitle from "./components/title";
import CreateAccountForm from "./components/create-account-form";

export default function CreateAccount() {
    return <>
        <Container>
            <CreateAccountTitle />
            <CreateAccountSubTitle>Criar Conta</CreateAccountSubTitle>
            <InformationText>Preencha seus dados abaixo para criar sua conta no app</InformationText>
            <CreateAccountForm />
        </Container>
    </>
}