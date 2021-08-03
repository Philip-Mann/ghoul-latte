import React from 'react';
import Container from 'react-bootstrap/Container';
import DiscountCard from '../../components/landing/discountCard';
// import Featured from '../../components/landing/featured';

export default function Landing() {

    return (
        <Container>
            <DiscountCard />
            {/* <Featured /> */}
        </Container>
    );
}