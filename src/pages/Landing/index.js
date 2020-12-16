import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { LandingCaption, LandingHeading, LandingingTextBox, LandingSubcaption, LandingWrapper, StartButton } from './LandingElements';

const Landing = () => {
    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to='/login' />;
    }

    return (
        <LandingWrapper>
            <LandingingTextBox>
            <LandingHeading>Human Principle</LandingHeading>
            <LandingCaption>Keep Track Of Your Most Human Traits and Work Toward Being Your Best Self</LandingCaption>
            <LandingSubcaption>Quick and Easy</LandingSubcaption>
            <LandingSubcaption>Straightforward Tracking</LandingSubcaption>
            <LandingSubcaption>Safe and Secure</LandingSubcaption>
            <StartButton onClick={handleClick}>Get Started</StartButton>
            </LandingingTextBox>
        </LandingWrapper>
    );
};

export default Landing;