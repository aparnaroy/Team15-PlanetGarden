import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Item } from "../interfaces/Item";

export interface AddItemProps {
    onSave: (item: Item) => void;
}

export function AddItem({ onSave }: AddItemProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [maintenanceLevel, setMaintenance] = useState("");
    const [rating, setRating] = useState("");
    const [type, setType] = useState("");
    const [boughtWith, setBoughtWith] = useState<string[]>([]);

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave({
            id: Date.now(),
            name: name,
            price: parseInt(price),
            image: image,
            description: description,
            quantity: parseInt(quantity),
            maintenanceLevel: parseInt(maintenanceLevel),
            rating: parseInt(rating),
            type: type,
            boughtWith: boughtWith,
            cartId: Date.now()
        });
        setName("");
        setPrice("");
        setImage("");
        setDescription("");
        setQuantity("");
        setMaintenance("");
        setRating("");
        setType("");
        setBoughtWith([]);
    }

    return (
        <form onSubmit={handleSave}>
            <br></br>
            <Row className="add-item">
                <Col>
                    <span className="add-item-label">Name:</span>
                    <br></br>
                    <input
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br></br>
                    <span className="add-item-label">Price:</span>
                    <br></br>
                    <input
                        placeholder="Price"
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <br></br>
                    <span className="add-item-label">Image URL:</span>
                    <br></br>
                    <input
                        placeholder="Image URL"
                        type="text"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </Col>
                <Col>
                    <span className="add-item-label">Description:</span>
                    <br></br>
                    <textarea
                        placeholder="Description"
                        value={description}
                        rows={4}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <br></br>
                    <span className="add-item-label">Quantity:</span>
                    <br></br>
                    <input
                        placeholder="Quantity"
                        type="number"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                    <br></br>
                </Col>
                <Col>
                    <span className="add-item-label">
                        Maintenance Level (1-5):
                    </span>
                    <br></br>
                    <input
                        placeholder="Maintenance Level"
                        type="number"
                        value={maintenanceLevel}
                        onChange={(event) => setMaintenance(event.target.value)}
                    />
                    <br></br>
                    <span className="add-item-label">Type:</span>
                    <br></br>
                    <select
                        value={type}
                        defaultValue={"default"}
                        onChange={(event) => setType(event.target.value)}
                    >
                        <option value={"default"}>Choose a Type</option>
                        <option value="Tree">Tree</option>
                        <option value="Flower">Flower</option>
                        <option value="Structure">Structure</option>
                        <option value="Greenery">Greenery</option>
                    </select>
                    <br></br>
                    <span className="add-item-label">
                        Frequently Bought With:
                    </span>

                    <br></br>
                    <input
                        placeholder="Frequently Bought With"
                        type="text"
                        value={boughtWith}
                        onChange={(event) =>
                            setBoughtWith(event.target.value.split(","))
                        }
                    />
                </Col>
            </Row>
            <Button className="save-button" type="submit" variant="success">
                Save
            </Button>
            <br></br>
            <br></br>
        </form>
    );
}
