import React from 'react';
import {
	FormContainer,
	FormQuestion,
	FormQuestionList,
	FormSubmit,
} from './QuestionsElements.js';

const QuestionForm = ({
	formType,
	header,
	description,
	q1,
	q2,
	q3,
	q4,
	q5,
	q6,
	q7,
	questions,
}) => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<FormContainer>
			{header}
			{description}
			<FormQuestionList>
				<FormQuestion>{q1}</FormQuestion>
                    <input type='radio' id='id' name='q1' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q1' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q1' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q1' value='value' />
                    <label for='value'>Strongly Agree</label>
				<FormQuestion>{q2}</FormQuestion>
                    <input type='radio' id='id' name='q2' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q2' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q2' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q2' value='value' />
                    <label for='value'>Strongly Agree</label>
				<FormQuestion>{q3}</FormQuestion>
                    <input type='radio' id='id' name='q3' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q3' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q3' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q3' value='value' />
                    <label for='value'>Strongly Agree</label>
				<FormQuestion>{q4}</FormQuestion>
                    <input type='radio' id='id' name='q4' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q4' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q4' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q4' value='value' />
                    <label for='value'>Strongly Agree</label>
				<FormQuestion>{q5}</FormQuestion>
                    <input type='radio' id='id' name='q5' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q5' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q5' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q5' value='value' />
                    <label for='value'>Strongly Agree</label>
				<FormQuestion>{q6}</FormQuestion>
                    <input type='radio' id='id' name='q6' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q6' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q6' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q6' value='value' />
                    <label for='value'>Strongly Agree</label>
				<FormQuestion>{q7}</FormQuestion>
                    <input type='radio' id='id' name='q7' value='value' />
                    <label for='value'>Strongly Disagree</label>
                    <input type='radio' id='id' name='q7' value='value' />
                    <label for='value'>Disagree</label>
                    <input type='radio' id='id' name='q7' value='value' />
                    <label for='value'>Agree</label>
                    <input type='radio' id='id' name='q7' value='value' />
                    <label for='value'>Strongly Agree</label>
				{/* example */}
				{/* <input type="radio" id="id" name="name" value="value"/>
                <label for="value">Value</label> */}
			</FormQuestionList>
			<FormSubmit onClick={handleSubmit}>Submit</FormSubmit>
		</FormContainer>
	);
};

export default QuestionForm;
