import React, { useState } from "react";
import { Card } from "react-bootstrap";

interface LandscapeItemProps {
    name: string;
    description: string;
    price: number;
    seasons: string[];
    maintenance: number;
    imgUrl: string;
}

export function LandscapeItem({
    name,
    description,
    price,
    seasons,
    maintenance,
    imgUrl
}: LandscapeItemProps) {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-2">{name}</span>
                    <span className="ms-2">{price}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}
