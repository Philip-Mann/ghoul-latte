import React from 'react';
import Container from 'react-bootstrap/Container';
import DiscountCard from '../../components/landing/discountCard';

export default function Landing() {

    return (
        <Container>
            <div className="discount-container">
                <DiscountCard />
            </div>
        </Container>
    );
}