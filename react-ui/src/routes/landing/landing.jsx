import React from 'react';
import NameForm from '../../components/nameForm'
import Greeting from '../../components/greeting'
import Container from 'react-bootstrap/Container'

export default function Landing() {

    return (
        <Container>

            <div className="gl landing-container text-align-center d-flex mt-3 justify-content-center">
                <Greeting />
                <div className="landing-img mb-3">
                    <img src="https://i.ibb.co/YR6x638/IMG-4656.jpg" alt="cat" />
                </div>
                <div className="name-input">
                </div>
                <div className="landing-text">
                    <p>
                        Sit and stare throwup on your pillow,
                        or chew on cable. Bathe private parts 
                        with tongue then lick owner's face why 
                        must they do that walk on keyboard plop 
                        down in the middle where everybody walks 
                        ask to go outside and ask to come inside 
                        and ask to go outside and ask to come inside, 
                        get suspicious of own shadow then go play with
                        toilette paper. Immediately regret falling into 
                        bathtub claws in the eye of the beholder poop on 
                        floor and watch human clean up. Experiences short
                        bursts of poo-phoria after going to the loo leave
                        hair everywhere sleep good morning sunshine so 
                        climb leg, yet open the door, let me out, let me 
                        out, let me-out, let me-aow, let meaow, meaow!
                        or thinking longingly about tuna brine. Kitty 
                        friends are not food so attack feet.
                    </p>
                </div>
            </div>
            <NameForm />
        </Container>
    );
}