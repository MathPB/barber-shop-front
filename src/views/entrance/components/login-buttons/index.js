import React from "react";

import CreateAccountButtonComponent from "./components/create-account-button";
import EntranceButtonComponent from "./components/entrance-button";

import { 
    ContainerEntrance,
    ContainerGuest
} from "./styles"
import GuestEntranceButtonComponent from "./components/guest-entrance-label";

export default function LoginButton() {
    return <>
        <ContainerEntrance>
            <CreateAccountButtonComponent />
            <EntranceButtonComponent />
        </ContainerEntrance>
        <ContainerGuest>
            <GuestEntranceButtonComponent />
        </ContainerGuest>
    </>
}