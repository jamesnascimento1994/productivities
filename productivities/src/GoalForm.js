import React from 'react';
import Alert from './Alert';

const GoalForm = ({ goalTitle, desc, handleSubmit, showAlert, setGoal }) => {


	return (
		<>
			<section>
				<h2>Set Your Goal!</h2>
				<form onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} />}
					<label htmlFor='goal'>Goal: </label>
					<input type='text' name='goal' id='goal' value={goalTitle} onChange={(e) => setGoal(e.target.value)} />
					<label htmlFor='desc'>Description: </label>
					<textarea name='desc' id='desc' cols='30' rows='10' value={desc} onChange={(e) => setGoal(e.target.value)}></textarea>
					<button>Create Goal!</button>
				</form>
			</section>
		</>
	);
};

export default GoalForm;
