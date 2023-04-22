import React from "react";
import { Container } from "react-bootstrap";

export function Home() {
    return (
        <Container
            style={{
                backgroundImage:
                    "https://img.freepik.com/premium-vector/garden-flowering-plant-ornamental-plant-background_281368-410.jpg",
                minWidth: "100px"
            }}
        >
            <div className="App">
                <header className="App-header">Planet Garden 🪴</header>
                <br></br>
                <br></br>
                <h1>We Bring the View to You</h1>
                <br></br>
                <h5>
                    Here at Planet Garden, we help you build your dream
                    landscape! Whether it be for your backyard, estate property,
                    or even a wedding venue, we have it all!
                </h5>
            </div>
        </Container>
    );
}
