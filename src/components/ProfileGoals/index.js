import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { GoalButton, GoalP, GoalsModal, GoalWrapper, GoalSectionWrapper, ModalForm, ModalHeader, ModalInput, ModalLabel, ModalSelect, ModalSubmit } from './ProfileGoalElements';
import { APIURL } from '../../config';

const Goals = ({ token }) => {
	const [goalData, setGoalData] = useState([{
        title: '',
        due_date: '',
        priority_level: '',
        set_date: '',
        description: '',
        id: '',
    }]);
	const [newGoal, setNewGoal] = useState([{
        title: '',
        due_date: '',
        priority_level: '',
        set_date: '',
        description: '',
        id: '',
    }]);
    const [showModal, setShowModal] = useState(false)
    const goalsURL = `${APIURL}/goals/`;
    
    // const refreshComponent = () => {
    //     axios({
    //         method: 'get',
    //         url: goalsURL,
    //         headers: {
    //             Authorization: `Token ${token}`,
    //         },
    //     }).then((res) => {
    //         setGoalData(res.data);
    //     });
    // }



	useEffect(() => {
		axios({
			method: 'get',
			url: goalsURL,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setGoalData(res.data);
		});
    }, [goalData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
			method: 'post',
			url: goalsURL,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: newGoal,
		})
		.then(
			setShowModal(!showModal)
		)
    };
    
    const handleDelete = (value) => {
        axios({
            method: 'delete',
            url: `${goalsURL}${value}/`,
            headers: {
                Authorization: `Token ${token}`,
            },
            data: goalData.key,
		})
    };

    const handleChange = (event) => {
        event.preventDefault();
        setNewGoal({
            ...newGoal,
            [event.target.name]: event.target.value,
        });
    };

    const handleModal = () => {
        setShowModal(!showModal)
    }

    
    if (!goalData) {
        return null
    }

    return (
		<GoalSectionWrapper>
			<GoalButton onClick={handleModal}>Add New Goal</GoalButton>
			{goalData.map((goal) => {
				return (
					<GoalWrapper key={goal.id}>
                        <GoalP>Title: {goal.title}</GoalP>
                        <GoalP>Priority Level: {goal.priority_level}</GoalP>
                        <GoalP>Due Date: {goal.due_date}</GoalP>
                        <GoalP>{goal.description}</GoalP>
                        <GoalP>Post Date: {goal.set_date}</GoalP>
						<GoalButton
							onClick={() => handleDelete(goal.id)}>
							Delete
						</GoalButton>
					</GoalWrapper>
				);
			})}
			<GoalsModal showModal={showModal}>
				<ModalForm onSubmit={handleSubmit}>
					<ModalHeader>Goals</ModalHeader>
					<ModalInput
						type='text'
						name='title'
						placeholder='Goal Title'
						value={newGoal.title}
						onChange={handleChange}></ModalInput>
					<ModalLabel htmlFor='title'>Goal Title</ModalLabel>
					<ModalInput
						type='text'
						name='description'
						placeholder='Goal Description'
						value={newGoal.description}
						onChange={handleChange}></ModalInput>
					<ModalLabel htmlFor='description'>
						Goal Description
					</ModalLabel>
					<ModalSelect name='priority_level' onChange={handleChange}>
						<option value={newGoal.priority_level}>Low</option>
						<option value={newGoal.priority_level}>Medium</option>
						<option value={newGoal.priority_level}>High</option>
					</ModalSelect>
					<ModalLabel htmlFor='priority_level'>
						Goal Priority Level
					</ModalLabel>
					<ModalInput
						type='date'
						name='due_date'
						placeholder={Date.now()}
						value={newGoal.date}
						onChange={handleChange}></ModalInput>
					<ModalLabel htmlFor='due_date'>Goal Due Date</ModalLabel>
					<ModalSubmit>Add Goal</ModalSubmit>
				</ModalForm>
			</GoalsModal>
		</GoalSectionWrapper>
	);
};

export default Goals;