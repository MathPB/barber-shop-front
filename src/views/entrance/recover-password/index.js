import React from "react";

import { Container, EntranceSubTitle, InformationText } from "./styles"
import EntranceTitle from "../components/title";
import RecoverForm from "./components/recover-form";

export default function RecoverPassword() {
    return <>
        <Container>
            <EntranceTitle />
            <EntranceSubTitle>Redefinir Senha</EntranceSubTitle>
            <InformationText>Informe seu e-mail para enviarmos um código de recuperação de senha</InformationText>
            <RecoverForm />
        </Container>
    </>
}