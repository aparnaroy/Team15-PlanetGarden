import React from "react";
import { Tree } from "../interfaces";
//import { Button, Container, Row } from "react-bootstrap";
import Oaktree from "../assets/oaktree.png";

// make this a display function, display all trees of a list of them
export function DisplayTrees(): JSX.Element {
    const oakTree: Tree = {
        name: "Oak Tree",
        description: "Tall and brown, perfect for parks!",
        quantity: 1,
        maintenance: 1,
        price: 20.0,
        rating: 4
    };
    const spruceTree: Tree = {
        name: "Spruce Tree",
        description: "A darker bark, beautiful for landscapes!",
        quantity: 1,
        maintenance: 1,
        price: 30.0,
        rating: 5
    };
    const mapleTree: Tree = {
        name: "Maple Tree",
        description: "Produces maple syrum (myth)",
        quantity: 1,
        maintenance: 3,
        price: 50,
        rating: 3
    };
    const allTrees: Tree[] = [oakTree, spruceTree, mapleTree];
    return (
        <div>
            {allTrees.map((aTree: Tree) => {
                return (
                    <div key={aTree.name}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src={Oaktree}
                                alt="Oak tree"
                                width="270"
                                height="270"
                            ></img>
                            <br></br>
                            <h3>{aTree.name}</h3>
                            <span>{aTree.description}</span>
                            <br></br>
                            <span>Quantity: {aTree.quantity}</span>
                            <br></br>
                            <span>
                                Maintenance level: {aTree.maintenance} out of 5
                            </span>
                            <br></br>
                            <span>Price: ${aTree.price}</span>
                            <br></br>
                            <span>Rating: {aTree.rating} out of 5</span>
                            <br></br>
                        </div>
                        <div style={{ color: "5px solid light green" }}></div>
                    </div>
                );
            })}
        </div>
    );
}
