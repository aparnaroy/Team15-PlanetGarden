import React from "react";
import { Container } from "react-bootstrap";
import { ExpandableSectionAbout } from "../components/Expandable";

export function About() {
    return (
        <Container className="App">
            <h1 className="App-header">About Us</h1>
            <br></br>
            <h2>A Letter From Our Team</h2>
            <ExpandableSectionAbout>
                <br></br>
                <p>Dear Valued Customers,</p>
                <p>
                    We are thrilled to introduce you to Planet Garden, a team of
                    dedicated, motivated, and passionate landscapers who are
                    excited to bring your landscaping vision to life! Our team
                    is comprised of Emilie Barniak, Jillian Camp, Emma Frampton,
                    Mikaylla Haskins, and Aparna Roy, who collectively bring a
                    diverse set of skills and expertise to our projects.
                </p>
                <p>
                    At Planet Garden, we understand that your outdoor space is
                    an extension of your home or business. That&apos;s why we
                    are committed to creating beautiful and functional
                    landscapes that exceed your expectations. We work closely
                    with our clients to understand their unique needs and
                    preferences, and we use our creativity and knowledge to
                    design and implement landscaping solutions that meet those
                    needs.
                </p>
                <p>
                    Our services include flowerbed design and installation, tree
                    planting and removal, lawn maintenance, hardscaping, water
                    feature installation, and more. We offer a wide range of
                    services to residential and commercial properties alike, and
                    we are confident that we can help you create the outdoor
                    space of your dreams!
                </p>
                <p>
                    At Planet Garden, we take pride in using environmentally
                    friendly products and techniques whenever possible, to
                    minimize our impact on the environment. We believe that
                    landscaping is not just about making your property look
                    good, it&apos;s about creating a sustainable and healthy
                    outdoor environment.
                </p>
                <p>
                    We are available to serve you 24/7, and we always strive to
                    exceed our clients&apos; expectations. Our team takes pride
                    in our work, and we are confident that you will be delighted
                    with the results. Whether you&apos;re looking to spruce up
                    your residential property or add some curb appeal to your
                    commercial space, we&apos;ve got you covered.
                </p>
                <p>
                    Thank you for considering Planet Garden for your landscaping
                    needs. We look forward to working with you and helping you
                    build your dream landscape!{" "}
                </p>
                <p>Sincerely, </p>
                <p>The Planet Garden Team</p>
            </ExpandableSectionAbout>
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
            <br></br>
            <br></br>
            <br></br>
        </Container>
    );
}
