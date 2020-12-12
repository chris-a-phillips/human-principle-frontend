import { React, useState } from 'react';
import QuestionForm from './QuestionForm.js';
import { ButtonWrapper, FormSwitchButton, QuestionsWrapper } from './QuestionsElements.js.js';
import {
	mentalTemplate,
	physicalTemplate,
	emotionalTemplate,
} from './QuestionsElements.js';


const Questions = ({ user, token }) => {
	const [formType, setFormType] = useState(null)

	const changeMental = () => {
		setFormType('mental')
	}

	const changePhysical = () => {
		setFormType('physical')
	}

	const changeEmotional = () => {
		setFormType('emotional')
	}

	return (
		<QuestionsWrapper>
			Questions
			{formType}
			<ButtonWrapper>
			<FormSwitchButton onClick={changeMental}>Mental</FormSwitchButton>
			<FormSwitchButton onClick={changePhysical}>Physical</FormSwitchButton>
			<FormSwitchButton onClick={changeEmotional}>Emotional</FormSwitchButton>
			</ButtonWrapper>
			{formType === 'mental' ? <QuestionForm {...mentalTemplate}/> : null}
			{formType === 'physical' ? <QuestionForm {...physicalTemplate}/> : null}
			{formType === 'emotional' ? <QuestionForm {...emotionalTemplate}/> : null}
		</QuestionsWrapper>
	);
};

export default Questions;
