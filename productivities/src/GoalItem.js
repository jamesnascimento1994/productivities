import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const GoalItem = ({
	singleGoal,
	removeGoal,
	editGoal,
	toggleButton,
	isComplete,
}) => {
	return (
		<div>
			<h1>{singleGoal.goalTitle}</h1>
			<h3>{singleGoal.desc}</h3>
			<button onClick={() => toggleButton(singleGoal.id)}>
				{singleGoal.complete ? 'completed' : 'Mark as complete'}
			</button>
			<div className='btn-container'>
				<button onClick={() => editGoal(singleGoal.id)}>
					<FaEdit />
				</button>
				<button onClick={() => removeGoal(singleGoal.id)}>
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default GoalItem;
