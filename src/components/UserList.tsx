import { useDrop } from "react-dnd";
//import { Item } from "../interfaces/Item";
import React from "react";
//import { ItemView } from "./ItemView";
//import { ItemViewProps } from "./ItemView";

export function Cart(): JSX.Element {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "item",
        //drop: (item: Item) => addToCart(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }));
    return (
        <div
            ref={drop}
            role={"Cart"}
            style={{ backgroundColor: isOver ? "red" : "white" }}
        >
            {canDrop ? "Release to drop" : "Drag a box here"}
        </div>
    );
}
