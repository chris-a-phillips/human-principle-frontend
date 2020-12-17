import styled from 'styled-components'

export const LoginPage = styled.div`
	display: grid;
	background-color: #f1d6b8;
	place-items: center;
	height: 100%;
	width: 100%;
`;

export const LoginForm = styled.form`
	background-color: #28afb0;
	padding-top: 25px;
	height: 75%;
	width: 70%;
	text-align: center;
	border-radius: 10px;
    box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.74);
    margin-top: 4rem;
`;

export const LoginH1 = styled.h1`
`

export const FormLabel = styled.label`
    display: block;
`

export const FormInput = styled.input`
	margin-top: 10px;
`

export const SubmitButton = styled.button`
	margin: 20px;
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

export const ErrorMessage = styled.h1`
	color: red;
	text-align: center;
`

export const LoginPageButton = styled.button`
	display: block;
	margin: 0 auto;
	box-shadow: inset 0px 0px 15px 3px #23395e;
	background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);
	background-color: #2e466e;
	border-radius: 17px;
	border: 1px solid #1f2f47;
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