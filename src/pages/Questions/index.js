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
		setFormType('Mental')
	}

	const changePhysical = () => {
		setFormType('Physical')
	}

	const changeEmotional = () => {
		setFormType('Emotional')
	}

	return (
		<QuestionsWrapper>
			Questions
			{formType}
			<ButtonWrapper>
				<FormSwitchButton onClick={changeMental}>
					Mental
				</FormSwitchButton>
				<FormSwitchButton onClick={changePhysical}>
					Physical
				</FormSwitchButton>
				<FormSwitchButton onClick={changeEmotional}>
					Emotional
				</FormSwitchButton>
			</ButtonWrapper>
			{formType === 'Mental' ? (
				<QuestionForm token={token} {...mentalTemplate} />
			) : null}
			{formType === 'Physical' ? (
				<QuestionForm token={token} {...physicalTemplate} />
			) : null}
			{formType === 'Emotional' ? (
				<QuestionForm token={token} {...emotionalTemplate} />
			) : null}
		</QuestionsWrapper>
	);
};

export default Questions;
