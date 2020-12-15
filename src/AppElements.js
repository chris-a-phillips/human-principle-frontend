import styled from 'styled-components';

export const PageWrapper = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100vh;
	background-color: orange;
`;

export const Header = styled.header`
	background-color: teal;
	padding: 2rem;
`;

export const NavLink = styled.h2`
	text-decoration: none;
	cursor: pointer;
	margin: 0 10px;
	display: inline-block;
`

export const Main = styled.main`
	background-color: peachpuff;
`;

export const Footer = styled.footer`
	background-color: lavender;
	padding: 2rem;
`;

export const LogoutButton = styled.button`
	
`