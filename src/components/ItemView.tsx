import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Item } from "./Item";

export function ItemView({
    anItem
}: // rating,
// setRating
{
    anItem: Item;
    // rating: number;
    // setRating: (newRating: number) => void;
}): JSX.Element {
    const [rating, setRating] = useState(0);

    function changeRating(newRating: number) {
        setRating(newRating);
    }

    return (
        <Col key={anItem.name}>
            <Card key={anItem.name}>
                <Card.Img
                    variant="top"
                    src={anItem.image}
                    style={{ objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-baseline">
                        <span className="fs-4">{anItem.name}</span>
                        <span className="ms-2 text-muted">${anItem.price}</span>
                    </Card.Title>
                    <br></br>
                    <span className="ms-1">
                        •Maintenance Level: {anItem.maintenanceLevel} out of 5
                    </span>
                    <br></br>
                    <span className="fs-8">
                        •Rating:{" "}
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <span
                                    key={index}
                                    style={{
                                        color:
                                            index <= rating ? "orange" : "gray",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => changeRating(index)}
                                >
                                    &#9733;
                                </span>
                            );
                        })}{" "}
                    </span>
                </Card.Body>
            </Card>
        </Col>
    );
}
