import React from "react";
import { Container } from "react-bootstrap";

export function About() {
    return (
        <Container className="App">
            <h1>About Us</h1>
            <br></br>
            <h2>Who We Are</h2>
            <h4>
                Emilie Barniak, Jillian Camp, Emma Frampton, Mikaylla Haskins,
                Aparna Roy
            </h4>
            <br></br>
            <h2>What We Are</h2>
            <h4>
                Dedicated, Motivated, and Passionate Landscapers excited to
                bring the view to you!
            </h4>
            <br></br>
            <p>
                You want flowers? We got you. Trees? We got you. Even a pond? No
                worries, we still got you.
            </p>
            <p>
                Planet Garden is at your service 24/7 to help you build your
                dream landscape!
            </p>
        </Container>
    );
}
