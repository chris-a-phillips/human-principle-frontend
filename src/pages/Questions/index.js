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
				<QuestionForm
					user={user}
					token={token}
					{...mentalTemplate}
					formType={formType}
				/>
				) : null}
			{formType === 'Physical' ? (
				<QuestionForm
					user={user}
					token={token}
					{...physicalTemplate}
					formType={formType}
				/>
				) : null}
			{formType === 'Emotional' ? (
				<QuestionForm
					user={user}
					token={token}
					{...emotionalTemplate}
					formType={formType}
				/>
			) : null}
		</QuestionsWrapper>
	);
};

export default Questions;
