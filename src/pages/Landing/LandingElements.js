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

export const LandingHeading = styled.h1`
    font-size: 3rem;
    padding: 1rem;
`

export const LandingCaption = styled.h3`
    font-size: 1.75rem;
    margin: 0 
`

export const LandingSubcaption = styled.p`
    font-size: 1.25rem;
`

export const StartButton = styled.button`
	box-shadow: inset 0px 0px 15px 3px #23395e;
	background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);
	background-color: #2e466e;
	border-radius: 17px;
	border: 1px solid #1f2f47;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 15px;
	padding: 6px 13px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #263666;
	:hover {
		background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
		background-color: #415989;
	}
	:active {
		position: relative;
		top: 1px;
	}
`;