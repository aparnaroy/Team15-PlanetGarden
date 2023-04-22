import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
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

interface Item {
    name: string;
    image: string;
    price: number;
    description: string;
    quantity: number;
    maintenanceLevel: number;
    rating: number;
}

interface NewItemProps {
    onSave: (item: Item) => void;
}

function NewItem({ onSave }: NewItemProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [maintenanceLevel, setMaintenance] = useState("");
    const [rating, setRating] = useState("");

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave({
            name,
            price: parseInt(price),
            image,
            description,
            quantity: parseInt(quantity),
            maintenanceLevel: parseInt(maintenanceLevel),
            rating: parseInt(rating)
        });
        setName("");
        setPrice("");
        setImage("");
        setDescription("");
        setQuantity("");
        setMaintenance("");
        setRating("");
    }

    return (
        <form onSubmit={handleSave}>
            <input
                placeholder="Name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                placeholder="Price"
                type="text"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <input
                placeholder="Image URL"
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <input
                placeholder="Description"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                placeholder="Quantity"
                type="text"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />
            <input
                placeholder="Maintenance Level"
                type="text"
                value={maintenanceLevel}
                onChange={(event) => setMaintenance(event.target.value)}
            />
            <input
                placeholder="Rating"
                type="text"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            <br></br>
            <br></br>
            <Button type="submit">Save</Button>
            <br></br>
            <br></br>
        </form>
    );
}

export function LandscapeItems(): JSX.Element {
    const [items, setItems] = useState<Item[]>([
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
    ]);
    const [newItemForm, setShowItemForm] = useState(false);

    function addItem(item: Item) {
        setItems([...items, item]);
        setShowItemForm(false);
    }

    function showItemForm() {
        setShowItemForm(!newItemForm);
    }

    return (
        <div>
            <Button onClick={showItemForm} className="d-flex">
                Add New Item
            </Button>
            <br></br>
            {newItemForm && <NewItem onSave={addItem} />}
            <Row s={2} md={3} lg={4}>
                {items.map((anItem) => {
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
                                        <span className="fs-2">
                                            {anItem.name}
                                        </span>
                                        <span className="ms-2 text-muted">
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
        </div>
    );
}
