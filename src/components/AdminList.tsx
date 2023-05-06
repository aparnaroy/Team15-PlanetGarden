import React, { useState } from "react";
import {
    benchStructure,
    bushGreenery,
    cedarTree,
    chrysanthemumFlower,
    gazeboStructure,
    grassGreenery,
    irisFlower,
    larchTree,
    lilyPondStructure,
    oakTree,
    pansyFlower,
    sequoiaTree,
    simplePondStructure,
    fountainStructure,
    archStructure,
    spruceTree,
    stonePondStructure,
    birdBathStructure,
    sunflowerFlower,
    tulipFlower,
    ivyGreenery,
    fernGreenery,
    caladiumGreenery
} from "../assets/instances";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { ItemView } from "./ItemView";
import { Item } from "../interfaces/Item";
import { Button, Col, Row } from "react-bootstrap";
import { AddItem } from "./AddItem";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function DisplayAdminList(): JSX.Element {
    let TEST = oakTree;
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "item",
        drop: (item: Item) => (TEST = item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }));
    const [list, setList] = useState<Item[]>([oakTree]);
    function displayedList(newItem: Item) {
        const newList = [...list, newItem];
        setList(newList);
        //TEST = "dropped";
    }
    if (
        sessionStorage.getItem("Role") === "Super" ||
        sessionStorage.getItem("Role") === "Admin"
    ) {
        return (
            <>
                <div
                    className="flex-container-admin"
                    ref={drop}
                    role={"Admin"}
                    style={{ backgroundColor: "#f1f1f1" }}
                >
                    <header>Admin List</header>
                    {isOver ? "Release to drop" : "Drag a box here"}
                    {list.map((item: Item) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                    {TEST.name}
                </div>

                <br></br>
            </>
        );
    }
    return <div></div>;
}
