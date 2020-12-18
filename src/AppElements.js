import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const PageWrapper = styled.div`
	color: #e6e6e6;
`;

export const Header = styled.header`
	padding: 2rem;
	background: rgb(0, 0, 0);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(109, 126, 107, 1) 22%
		);
		`;

export const Footer = styled.footer`
	background: rgb(0, 0, 0);
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(109, 126, 107, 1) 22%
	);
	padding: 2rem;
	display: flex;
	justify-content: space-evenly;
	`;

export const FooterSection = styled.div`
	text-align: center;
`

export const NavLink = styled(Link)`
	color: #d9d9d9;
	text-decoration: none;
	cursor: pointer;
	margin: 0 10px;
	display: inline-block;
	font-weight: bold;
`

export const FooterLink = styled.a`
	text-decoration-line: none;
	color: #d9d9d9;
`;

export const FooterText = styled.h1`
	font-size: 1.5rem;
`

export const Main = styled.main`
	grid-template-rows: auto 1fr auto;
	display: grid;
	height: 100vh;
`;

export const LogoutButton = styled.button`
	position: absolute;
	right: 15%;
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
`;