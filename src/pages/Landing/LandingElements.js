import styled from 'styled-components'
import background from '../../images/landing-background.jpg';


export const LandingWrapper = styled.div`
    background-image: url(${background}) ;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    line-height: 3.5rem;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
`

export const LandingingTextBox = styled.div`
    background-color: rgba(0,0,0,0.30);
    border-radius: 10px;
    color: #af125a;
`

export const LandingHeading = styled.h1``

export const LandingCaption = styled.h3``

export const LandingSubcaption = styled.p`   
`

export const StartButton = styled.button``