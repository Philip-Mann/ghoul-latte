import React from 'react';
import Greeting from '../../components/about/greeting'
import CatImg from '../../components/about/catImg'
import Lorem from '../../components/about/lorem'
import Container from 'react-bootstrap/Container'

export default function About() {

    return (
        <Container>
            <div className="about-text">
                <div className="text-align-center d-flex mt-3 flex-column align-items-center justify-content-center">
                    <Greeting />
                    <CatImg />
                    <Lorem />
                </div>
            </div>
        </Container>
    );
}