import styled from 'styled-components'

export const GoalSectionWrapper = styled.div`
`

export const GoalWrapper = styled.div`
	background-color: rgba(0,0,0, 0.25);
	margin: 15px;
`;

export const GoalsModal = styled.div`
	position: absolute;
	top: 30vh;
	left: 30vw;
	height: 50vh;
	width: 50vh;
	background-color: #28afb0;
	color: #7a0c3e;
	align-self: stretch;
	margin: auto;
	border-radius: 10px;
	box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.74);
	z-index: ${({ showModal }) => (showModal ? 2 : -1)};
`;

export const ModalForm = styled.form`
	text-align: center;
`

export const ModalHeader = styled.h1``

export const ModalInput = styled.input`
	margin-top: 30px;
`

export const ModalSelect = styled.select`
	margin-top: 30px;
`

export const ModalLabel = styled.label`
	display: block;
`

export const ModalSubmit = styled.button`
	margin: 15px;
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

export const GoalButton = styled.button`
	display: block;
	position: relative;
	margin: 10px 15px;
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

export const GoalP = styled.p`
	padding: 5px 10px;
`