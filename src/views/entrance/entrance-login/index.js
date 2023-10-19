import React from "react";

import { Container, EntranceSubTitle, InformationText } from "./styles"

import EntranceTitle from "./components/title";
import EntranceForm from "./components/entrance-form";

export default function EntranceLogin() {
    return <>
        <Container>
            <EntranceTitle />
            <EntranceSubTitle>Entrar</EntranceSubTitle>
            <InformationText>Insira suas credenciais de acesso para iniciar a navegação no app</InformationText>
            <EntranceForm />
        </Container>
    </>
}