import React, { useState } from "react";
import { Item } from "../interfaces/Item";
import { Button } from "react-bootstrap";

interface EditItemProps {
    item: Item;
    onSave: (name: string, editedItem: Item) => void;
}

export function EditItem({ item, onSave }: EditItemProps) {
    const [id, setId] = useState<number>(item.id);
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
    const [boughtWith, setBoughtWith] = useState<string[]>(item.boughtWith);

    function handleSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSave(item.name, {
            id: id,
            name: name,
            price: price,
            image: image,
            description: description,
            quantity: quantity,
            maintenanceLevel: maintenanceLevel,
            rating: rating,
            type: type,
            boughtWith: boughtWith
        });
        setId(id);
        setName(name);
        setPrice(price);
        setImage(image);
        setDescription(description);
        setQuantity(quantity);
        setMaintenance(maintenanceLevel);
        setRating(rating);
        setType(type);
        setBoughtWith(boughtWith);
    }

    return (
        <form onSubmit={handleSave}>
            <div className="edit-item">
                <span className="edit-item-label">Name:</span>
                <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <span className="edit-item-label">Price:</span>
                <input
                    placeholder="Price"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(parseInt(event.target.value))}
                />
                <span className="edit-item-label">Image URL:</span>
                <input
                    placeholder="Image URL"
                    type="text"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                />
                <span className="edit-item-label">Description:</span>
                <textarea
                    placeholder="Description"
                    value={description}
                    rows={3}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <span className="edit-item-label">Quantity:</span>
                <input
                    placeholder="Quantity"
                    type="number"
                    value={quantity}
                    onChange={(event) =>
                        setQuantity(parseInt(event.target.value))
                    }
                />
                <span className="edit-item-label">Maintenance Level:</span>
                <input
                    placeholder="Maintenance Level"
                    type="number"
                    value={maintenanceLevel}
                    onChange={(event) =>
                        setMaintenance(parseInt(event.target.value))
                    }
                />
                <span className="edit-item-label">Rating:</span>
                <input
                    placeholder="Rating"
                    type="number"
                    value={rating}
                    onChange={(event) =>
                        setRating(parseInt(event.target.value))
                    }
                />
                <span className="edit-item-label">Type:</span>
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
                <span className="edit-item-label">Frequently Bought With:</span>
                <input
                    placeholder="Frequently Bought With"
                    type="text"
                    value={boughtWith}
                    onChange={(event) =>
                        setBoughtWith(event.target.value.split(","))
                    }
                />

                <br></br>
                <br></br>
                <Button type="submit" variant="success">
                    Save
                </Button>
            </div>
        </form>
    );
}
