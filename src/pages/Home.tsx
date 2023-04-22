import React from "react";
import PlanetGarden from "../assets/Planet-Garden.png";

export function Home() {
    return (
        <div className="App">
            <header className="App-header">Planet Garden 🪴</header>
            <br></br>
            <br></br>
            <h1>We Bring the View to You</h1>
            <br></br>
            <h4>
                Here at Planet Garden, we help you build your dream landscape!
            </h4>
            <h4>
                Whether it be for your backyard, estate property, or even a
                wedding venue, we have it all!
            </h4>
            <div>
                <img src={PlanetGarden} alt="PlanetGarden" height="500px" />
            </div>
            <br></br>
        </div>
    );
}
