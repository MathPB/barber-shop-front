import React from "react";

import { Container } from "./styles"

import EntranceTitle from "./components/title";
import BannerCarousel from "./components/banner-carousel";
import LoginButton from "./components/login-buttons"; 


export default function Entrance() {
    return <>
        <Container>
            <EntranceTitle />
            <BannerCarousel />
            <LoginButton />
        </Container>
    </>
}