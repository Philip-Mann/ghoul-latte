import React from 'react';
import Greeting from '../../components/about/greeting'
import CatImg from '../../components/about/catImg'
import Lorem from '../../components/about/lorem'
import Container from 'react-bootstrap/Container'
import Github from '../../components/about/github';

export default function About() {

    return (
        <Container>
            <div className="about-text d-flex flex-column align-items-center mt-3">
                <Greeting />
                <CatImg />
                <Lorem />
                <Github />
            </div>
        </Container>
    );
}