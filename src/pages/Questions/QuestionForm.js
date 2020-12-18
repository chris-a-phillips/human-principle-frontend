import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
    ButtonWrapper,
	FormContainer,
	FormQuestion,
	FormQuestionList,
	FormSubmit,
	FormLabel,
	FormInput,
	FormHeader
} from './QuestionsElements.js';

const QuestionForm = ({
	token,
	formType,
	q1,
	q2,
	q3,
	q4,
	q5,
	q6,
	q7,
}) => {
	const [redirect, setRedirect] = useState(false);
	const [response, setResponse] = useState({
		questionnaire_type: formType,
		question_one: 0,
		question_two: 0,
		question_three: 0,
		question_four: 0,
		question_five: 0,
		question_six: 0,
		question_seven: 0,
	});

	// const url = 'http://localhost:8000/principles/';
	const url = 'https://human-principle-backend.herokuapp.com/principles/';

	const handleChange = (event) => {
		setResponse({ ...response, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'post',
			url: url,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: response,
		})
        .then(setRedirect(true))
	};

	if (redirect) {
		return <Redirect to='/profile' />;
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<FormHeader>{formType} Questionnaire Form</FormHeader>
			<FormQuestionList>
				<FormQuestion>{q1}</FormQuestion>
					<FormInput
						type='radio'
						name={'question_one'}
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_one'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_one'>10</FormLabel>
				<FormQuestion>{q2}</FormQuestion>
					<FormInput
						type='radio'
						name='question_two'
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_two'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_two'>10</FormLabel>
				<FormQuestion>{q3}</FormQuestion>
					<FormInput
						type='radio'
						name='question_three'
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_three'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_three'>10</FormLabel>
				<FormQuestion>{q4}</FormQuestion>
					<FormInput
						type='radio'
						name='question_four'
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_four'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_four'>10</FormLabel>
				<FormQuestion>{q5}</FormQuestion>
					<FormInput
						type='radio'
						name='question_five'
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_five'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_five'>10</FormLabel>
				<FormQuestion>{q6}</FormQuestion>
					<FormInput
						type='radio'
						name='question_six'
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_six'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_six'>10</FormLabel>
				<FormQuestion>{q7}</FormQuestion>
					<FormInput
						type='radio'
						name='question_seven'
						value={1}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>1</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={2}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>2</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={3}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>3</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={4}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>4</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={5}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>5</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={6}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>6</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={7}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>7</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={8}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>8</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={9}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>9</FormLabel>
					<FormInput
						type='radio'
						name='question_seven'
						value={10}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='question_seven'>10</FormLabel>
			</FormQuestionList>
			<ButtonWrapper>
				<FormSubmit onClick={handleSubmit}>Submit</FormSubmit>
			</ButtonWrapper>
		</FormContainer>
	);
};

export default QuestionForm;
