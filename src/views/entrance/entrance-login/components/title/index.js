import React from "react";

import { Image } from "react-native"

import {Container, BarberTitle} from "./styles"

import logo from "../../../../../../assets/images/logo.png"


export default function EntranceTitle() {
    return <>
        <Container>
            <Image source={logo} />
            <BarberTitle>Fast Barber</BarberTitle>
        </Container>
    </>
}