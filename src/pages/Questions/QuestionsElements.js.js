import styled from 'styled-components';

export const QuestionsWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: auto 1fr;
	background-color: #f1d6b8;
`;

export const FormHeader = styled.h1`
	text-align: center;
	padding: 5px;
	`;

export const FormSubmit = styled.button``;

export const FormSwitchButton = styled.button``;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 10px;
	/* width: 100%; */
`;

export const FormQuestionList = styled.ol``;

export const FormQuestion = styled.li`
	margin: 10px;
`;

export const FormContainer = styled.form`
	background-color: #28afb0;
	height: 80%;
	width: 80%;
	align-self: stretch;
	margin: auto;
	border-radius: 10px;
	box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.74);
`;

// export const QuestionChoices = styled. idk

export const mentalTemplate = {
	header: 'Mental',
	description: 'Questions about how you feel mentally',
	q1: 'I feel that I am in control of my life',
	q2: 'I fell fully mentally alert',
	q3: 'I am able to make everyday decisions without stress',
	q4: 'I feel like I have adequate free time',
	q5: 'I am able to unwind outside of work',
	q6: 'I am mentally stimulated by what I do on a regular basis',
	q7: 'I am able to focus on the task at hand',
};

export const physicalTemplate = {
	header: 'Physical',
	description: 'Questions about how you feel physically',
	q1: 'I wake up feeling rested',
	q2: 'I am happy with the shape I’m in and my current physical condition',
	q3: 'I usually have energy and don’t suffer from sudden loss of breath',
	q4: 'I exercise on a regular basis',
	q5: 'My usual exercise or recreational activities make me feel happy',
	q6: 'I do not feel uncomfortable physical strain on a regular basis',
	q7: 'I go outside on a regular basis',
};

export const emotionalTemplate = {
	header: 'Emotional',
	description: 'Questions about how you feel emotionally',
	q1: 'I have good conversations regularly',
	q2: 'I laugh a lot',
	q3: 'I have a cheerful effect on others',
	q4: 'I do things I enjoy on a regular basis',
	q5: 'I have fun with other people',
	q6: 'I share my feelings with others',
	q7: 'Overall I feel happy',
};

export const FormLabel = styled.label`
`;

export const InputSet = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const InputOption = styled.div``

export const FormInput = styled.input`
	margin: auto;
`;

export const SubmitButton = styled.button`
	display: block;
	margin: 10 auto;
`;
