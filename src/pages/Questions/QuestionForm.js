import { React, useState } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { FormContainer, FormQuestion, FormQuestionList, FormSubmit, FormLabel, FormInput } from './QuestionsElements.js';

const QuestionForm = ({ token, formType, header, description, q1, q2, q3, q4, q5, q6, q7, }) => {
     const [redirect, setRedirect] = useState(false)
	const [response, setResponse] = useState({
		username: 2,
		questionnaire_type: formType,
		question_one: 0,
		question_two: 0,
		question_three: 0,
		question_four: 0,
		question_five: 0,
		question_six: 0,
		question_seven: 0,
     });
     
     const url = 'http://localhost:8000/principles/';

     const handleChange = (event) => {
          setResponse({ ...response, [event.target.name]: event.target.value });
          console.log(response);
     };

     const handleSubmit = (event) => {
          console.log('Button Clicked');
          event.preventDefault();
          axios({
               method: 'post',
               url: url,
               headers: {
                    Authorization : `Token ${token}`,
               },
               data: response,
          }).then((res) => {
               console.log(res);
               setRedirect(true)
          });
     };

     if (redirect) {
          return <Redirect to='/profile' />;
     }

	return (
		<FormContainer onSubmit={handleSubmit}>
			{header}
			{description}
                         <FormQuestionList>
				<FormQuestion>{q1}</FormQuestion>
                         <FormInput type='radio' name={'question_one'} value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_one'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_one' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_one'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_one' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_one'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_one' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_one'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_one' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_one'>Agree</FormLabel>
                         <FormInput type='radio' name='question_one' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_one'>Strongly Agree</FormLabel>
				<FormQuestion>{q2}</FormQuestion>
                         <FormInput type='radio' name='question_two' value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_two'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_two' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_two'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_two' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_two'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_two' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_two'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_two' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_two'>Agree</FormLabel>
                         <FormInput type='radio' name='question_two' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_two'>Strongly Agree</FormLabel>
				<FormQuestion>{q3}</FormQuestion>
                         <FormInput type='radio' name='question_three' value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_three'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_three' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_three'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_three' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_three'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_three' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_three'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_three' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_three'>Agree</FormLabel>
                         <FormInput type='radio' name='question_three' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_three'>Strongly Agree</FormLabel>
				<FormQuestion>{q4}</FormQuestion>
                         <FormInput type='radio' name='question_four' value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_four'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_four' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_four'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_four' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_four'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_four' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_four'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_four' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_four'>Agree</FormLabel>
                         <FormInput type='radio' name='question_four' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_four'>Strongly Agree</FormLabel>
				<FormQuestion>{q5}</FormQuestion>
                         <FormInput type='radio' name='question_five' value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_five'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_five' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_five'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_five' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_five'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_five' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_five'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_five' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_five'>Agree</FormLabel>
                         <FormInput type='radio' name='question_five' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_five'>Strongly Agree</FormLabel>
				<FormQuestion>{q6}</FormQuestion>
                         <FormInput type='radio' name='question_six' value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_six'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_six' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_six'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_six' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_six'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_six' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_six'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_six' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_six'>Agree</FormLabel>
                         <FormInput type='radio' name='question_six' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_six'>Strongly Agree</FormLabel>
				<FormQuestion>{q7}</FormQuestion>
                         <FormInput type='radio' name='question_seven' value={1} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_seven'>Strongly Disagree</FormLabel>
                         <FormInput type='radio' name='question_seven' value={2} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_seven'>Disagree</FormLabel>
                         <FormInput type='radio' name='question_seven' value={3} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_seven'>Slightly Disagree</FormLabel>
                         <FormInput type='radio' name='question_seven' value={4} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_seven'>Slightly Agree</FormLabel>
                         <FormInput type='radio' name='question_seven' value={5} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_seven'>Agree</FormLabel>
                         <FormInput type='radio' name='question_seven' value={6} onChange={handleChange}></FormInput>
                         <FormLabel htmlFor='question_seven'>Strongly Agree</FormLabel>
			</FormQuestionList>
			<FormSubmit onClick={handleSubmit}>Submit</FormSubmit>
		</FormContainer>
	);
};

export default QuestionForm;
