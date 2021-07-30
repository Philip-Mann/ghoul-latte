import React from 'react';
import Greeting from '../../components/greeting'
import CatImg from '../../components/catImg'
import Lorem from '../../components/lorem'
import Container from 'react-bootstrap/Container'

export default function About() {

    return (
        <Container>
            <div className="about-text">
                <div className="gl landing-container text-align-center d-flex mt-3 justify-content-center">
                    <Greeting />
                    <CatImg />
                    <div className="name-input">
                    </div>
                    <Lorem />
                </div>
            </div>
        </Container>
    );
}