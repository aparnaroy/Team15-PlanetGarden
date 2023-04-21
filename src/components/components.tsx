import React from "react";
import { Tree, Flower, Greenery, Structure } from "../interfaces";
import { Button, Card, Row, Col } from "react-bootstrap";
import {
    oakTree,
    spruceTree,
    larchTree,
    cedarTree,
    sequoiaTree,
    sunflowerFlower,
    irisFlower,
    tulipFlower,
    chrysanthememFlower,
    pansyFlower,
    grassGreenery,
    pondStructure,
    benchStructure
} from "../assets/instances";

// displayAll is sorted alphabetically by default
/*
export function DisplayAll(): JSX.Element {
    const allItems: (Flower | Tree | Greenery | Structure)[] = [
        benchStructure,
        cedarTree,
        chrysanthememFlower,
        grassGreenery,
        irisFlower,
        larchTree,
        oakTree,
        pansyFlower,
        pondStructure,
        sequoiaTree,
        spruceTree,
        sunflowerFlower,
        tulipFlower
    ];
    return (
        <div className="parent-container">
            <div className="flex-container">
                {allItems.map((anItem: Flower | Tree) => {
                    return (
                        <div key={anItem.name}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={anItem.image}
                                    alt="Oak tree"
                                    width="270"
                                    height="270"
                                ></img>
                                <br></br>
                                <h3>{anItem.name}</h3>
                                <span>•{anItem.description}</span>
                                <br></br>
                                <span>•Quantity: {anItem.quantity}</span>
                                <br></br>
                                <span>
                                    •Maintenance level:{" "}
                                    {anItem.maintenanceLevel} out of 5
                                </span>
                                <br></br>
                                <span>•Price: ${anItem.price}</span>
                                <br></br>
                                <span>•Rating: {anItem.rating} out of 5</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}*/

export function DisplayAll(): JSX.Element {
    const allItems: (Flower | Tree | Greenery | Structure)[] = [
        benchStructure,
        cedarTree,
        chrysanthememFlower,
        grassGreenery,
        irisFlower,
        larchTree,
        oakTree,
        pansyFlower,
        pondStructure,
        sequoiaTree,
        spruceTree,
        sunflowerFlower,
        tulipFlower
    ];
    return (
        <Row s={2} md={3} lg={5}>
            {allItems.map((anItem: Flower | Tree) => {
                return (
                    <Col key={anItem.name}>
                        <Card key={anItem.name}>
                            <Card.Img
                                variant="top"
                                src={anItem.image}
                                style={{ objectFit: "cover" }}
                            />
                            <Card.Body className="flex-column">
                                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                                    <span className="fs-2">{anItem.name}</span>
                                    <span className="m-2 text-muted">
                                        ${anItem.price}
                                    </span>
                                </Card.Title>
                                <span className="card-subtitle ms-2 text-muted">
                                    {anItem.description}
                                </span>
                                <br></br>
                                <br></br>
                                <span className="fs-8">
                                    •Quantity: {anItem.quantity}
                                </span>
                                <br></br>
                                <span className="fs-8">
                                    •Maintenance Level:{" "}
                                    {anItem.maintenanceLevel} out of 5
                                </span>
                                <br></br>
                                <span className="fs-8">
                                    •Rating: {anItem.rating} out of 5
                                </span>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
}

export function DisplayTrees(): JSX.Element {
    const allTrees: Tree[] = [
        oakTree,
        spruceTree,
        larchTree,
        cedarTree,
        sequoiaTree
    ];
    return (
        <div className="parent-container">
            <div className="flex-container">
                {allTrees.map((aTree: Tree) => {
                    return (
                        <div key={aTree.name}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={aTree.image}
                                    alt="Oak tree"
                                    width="270"
                                    height="270"
                                ></img>
                                <br></br>
                                <h3>{aTree.name}</h3>
                                <span>•{aTree.description}</span>
                                <br></br>
                                <span>•Quantity: {aTree.quantity}</span>
                                <br></br>
                                <span>
                                    •Maintenance level: {aTree.maintenanceLevel}{" "}
                                    out of 5
                                </span>
                                <br></br>
                                <span>•Price: ${aTree.price}</span>
                                <br></br>
                                <span>•Rating: {aTree.rating} out of 5</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function DisplayFlowers(): JSX.Element {
    const allFlowers: Flower[] = [
        sunflowerFlower,
        tulipFlower,
        chrysanthememFlower,
        pansyFlower,
        irisFlower
    ];
    return (
        <div className="parent-container">
            <div className="flex-container">
                {allFlowers.map((aFlower: Flower) => {
                    return (
                        <div key={aFlower.name}>
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={aFlower.image}
                                    alt="Oak tree"
                                    width="270"
                                    height="270"
                                ></img>
                                <br></br>
                                <h3>{aFlower.name}</h3>
                                <span>•{aFlower.description}</span>
                                <br></br>
                                <span>•Quantity: {aFlower.quantity}</span>
                                <br></br>
                                <span>
                                    •Maintenance level:{" "}
                                    {aFlower.maintenanceLevel} out of 5
                                </span>
                                <br></br>
                                <span>•Price: ${aFlower.price}</span>
                                <br></br>
                                <span>•Rating: {aFlower.rating} out of 5</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
