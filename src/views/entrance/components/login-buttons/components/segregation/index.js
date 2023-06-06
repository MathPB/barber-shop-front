import React from "react";

import { 
    Container, 
    SegregationLine,
    SegregationText
} from "./styles"

export default function Segregation() {
    return <>
        <Container>
            <SegregationLine />
            <SegregationText>ou</SegregationText>
            <SegregationLine />
        </Container>
    </>
}