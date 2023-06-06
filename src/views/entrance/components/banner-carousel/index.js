import React from "react";

import { Image } from "react-native"

import { Container, Title, SubTitle } from "./styles"

import entranceBarber from "../../../../../assets/images/entrance-barber.png"

export default function BannerCarousel() {
    return <>
        <Container>
            <Image source={entranceBarber} />
            <Title>Agendamento Simplificado</Title>
            <SubTitle>Priorizamos rapidez e facilidade na hora de agendar um horário especial para seu cuidado.</SubTitle>
        </Container>
    </>
}