// Old code

import React from "react";
import landscapeItems from "./Items.json";
import { LandscapeItem } from "./components/LandscapeItem";
import { Col, Row } from "react-bootstrap";

export function PlanetGarden() {
    return (
        <div>
            <h1>Planet Garden</h1>
            <Row>
                {landscapeItems.map((item) => (
                    <Col key={item.name}>
                        <LandscapeItem {...item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
