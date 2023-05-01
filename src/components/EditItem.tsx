import React, { useState } from "react";
import { Item } from "../interfaces/Item";
import { Button } from "react-bootstrap";

interface EditItemProps {
    item: Item;
    onSave: (name: string, editedItem: Item) => void;
}

export function EditItem({ item, onSave }: EditItemProps) {
    const [name, setName] = useState<string>(item.name);
    const [price, setPrice] = useState<number>(item.price);
    const [image, setImage] = useState<string>(item.image);
    const [description, setDescription] = useState<string>(item.description);
    const [quantity, setQuantity] = useState<number>(item.quantity);
    const [maintenanceLevel, setMaintenance] = useState<number>(
        item.maintenanceLevel
    );
    const [rating, setRating] = useState<number>(item.rating);
    const [type, setType] = useState<string>(item.type);

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave(item.name, {
            name: name,
            price: price,
            image: image,
            description: description,
            quantity: quantity,
            maintenanceLevel: maintenanceLevel,
            rating: rating,
            type: type
        });
        setName(name);
        setPrice(price);
        setImage(image);
        setDescription(description);
        setQuantity(quantity);
        setMaintenance(maintenanceLevel);
        setRating(rating);
        setType(type);
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
                onChange={(event) => setPrice(parseInt(event.target.value))}
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
                onChange={(event) => setQuantity(parseInt(event.target.value))}
            />
            <input
                placeholder="Maintenance Level"
                type="text"
                value={maintenanceLevel}
                onChange={(event) =>
                    setMaintenance(parseInt(event.target.value))
                }
            />
            <input
                placeholder="Rating"
                type="text"
                value={rating}
                onChange={(event) => setRating(parseInt(event.target.value))}
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
