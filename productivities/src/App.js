import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import Navbar from './Navbar';
import data from './data';

// const getLocalStorage = () => {
// 	let goalList = localStorage.getItem('goalList');
// 	if (goalList) {
// 		return JSON.parse(localStorage.getItem('goalList'));
// 	} else {
// 		return [];
// 	}
// };

function App() {
	// const [goals, setGoals] = useState(data);
	// const [isToggled, setToggled] = useState(false);

	// const toggleTrueFalse = () => {
	// 	setToggled(!isToggled);
	// };
	const [goal, setGoal] = useState({goalTitle: "", desc: "", complete: false});
	const [goalList, setGoalList] = useState(data);
	const [editingGoal, setEditingGoal] = useState(false);
  const [editID, setEditID] = useState(null);
  const [isComplete,setIsComplete] = useState(false);
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
  });
  
  const toggleButton = (id) => {
    // console.log(goalList)
    // console.log(id);
    // const newData = goalList;
    // newData[id].complete = !newData[id].complete;
    // setGoalList(() => { 
    //   console.log(goalList)
    //   goalList[id].complete = true;
    //   console.log(goalList) 
    //   return goalList;
    // })
    // setState(function myFunc(goalList) {
    //   const newGoalList = goalList[id].complete = true;
    //   console.log(newGoalList);
		// 	return newGoalList;
    // });
    setGoalList(
			goalList.map((singleGoal) => {
				console.log(id);
				if (singleGoal.id === id) {
					singleGoal.complete = !singleGoal.complete;
				}
				return singleGoal;
			})
		);
    // setGoalList(goalList.filter((singleGoal) => singleGoal.id !== id));
    // console.log(newData)
  }

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!goal) {
			showAlert(true, 'danger', 'please enter values');
		} else if (goal && editingGoal) {
			setGoalList(
				goalList.map((singleGoal) => {
					if (singleGoal.id === editID) {
						return { ...singleGoal, title: goal };
					}
					return goal;
				})
			);
			setGoal('');
			setEditID(null);
			setEditingGoal(false);
			showAlert(true, 'success', 'Goal Changed!');
		} else {
			showAlert(true, 'success', 'Goal Added!');
			const newGoal = {
				id: new Date().getTime.toString(),
				goal: goal,
			};
			setGoalList([...goalList, newGoal]);
			setGoal('');
		}
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const clearGoalList = () => {
		showAlert(true, 'danger', 'no goals to display');
		setGoalList([]);
	};

	const removeGoal = (id) => {
		showAlert(true, 'danger', 'Goal Removed');
    setGoalList(goalList.filter((singleGoal) => singleGoal.id !== id));
	};

	const editGoal = (id) => {
    const specificGoal = goalList.find((singleGoal) => singleGoal.id === id);
    console.log(goalList);
    console.log(id)
		setEditingGoal(true);
		setEditID(id);
		setGoal(specificGoal.goalTitle);
	};
	// useEffect(() => {
	// 	localStorage.setItem('goalList', JSON.stringify(goalList));
	// }, [goalList]);

	return (
    <div>

		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/new-goal'>
					<GoalForm
						goalList={goalList}
						setGoal={setGoal}
						handleSubmit={handleSubmit}
					/>
				</Route>
				<Route path='/your-goals'>
          <GoalList goalList={goalList} clearGoalList={clearGoalList} removeGoal={removeGoal} editGoal={editGoal}
          isComplete={isComplete} setIsComplete={setIsComplete}
          toggleButton={toggleButton} />
				</Route>
			</Switch>
		</Router>
    </div>
	);
}

export default App;
