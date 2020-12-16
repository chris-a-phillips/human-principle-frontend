import styled from 'styled-components';
import { Link as Link } from 'react-router-dom'

export const PageWrapper = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
	color: #7a0c3e;
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
	color: #7a0c3e;
	text-decoration: none;
	cursor: pointer;
	margin: 0 10px;
	display: inline-block;
`

export const FooterLink = styled.a`
	text-decoration-line: none;
	color: #7a0c3e;
`;

export const FooterText = styled.h1`
	font-size: 1.5rem;
`

export const Main = styled.main`
`;

export const LogoutButton = styled.button`
	position: absolute;
	cursor: pointer;
	right: 15%;
`;