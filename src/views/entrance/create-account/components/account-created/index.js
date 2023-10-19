import React from "react";

import { Container, AccountCreatedSubTitle, InformationText } from "./styles"
import { Image } from "react-native"
import CreateAccountTitle from "../title";
import accountCreated from "../../../../../../assets/images/account-created.png"

export default function AccountCreated() {
    return <>
        <Container>
            <CreateAccountTitle />
            <AccountCreatedSubTitle>Sua conta foi criada!</AccountCreatedSubTitle>
            <InformationText>Agora você pode navegar pelo app e aproveitar todos nossos recursos!</InformationText>
            <Image source={accountCreated} />
        </Container>
    </>
}