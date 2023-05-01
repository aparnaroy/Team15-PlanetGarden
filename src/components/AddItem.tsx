import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Item } from "../interfaces/Item";

interface AddItemProps {
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

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave({
            name,
            price: parseInt(price),
            image,
            description,
            quantity: parseInt(quantity),
            maintenanceLevel: parseInt(maintenanceLevel),
            rating: parseInt(rating),
            type
        });
        setName("");
        setPrice("");
        setImage("");
        setDescription("");
        setQuantity("");
        setMaintenance("");
        setRating("");
        setType("");
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
            <br></br>
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
            Type:
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
            <br></br>
            <Button type="submit" variant="success">
                Save
            </Button>
            <br></br>
            <br></br>
        </form>
    );
}
