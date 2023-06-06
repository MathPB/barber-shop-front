import React from "react";

import Segregation from "./components/segregation";
import CreateAccountButtonComponent from "./components/create-account-button";
import EntranceButtonComponent from "./components/entrance-button";

import { 
    Container
} from "./styles"

export default function LoginButton() {
    return <>
        <Container>
            <CreateAccountButtonComponent />
            <Segregation />
            <EntranceButtonComponent />
        </Container>
    </>
}