import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({goalList, clearGoalList, removeGoal,editGoal, toggleButton}) => {
    return (
        <section>
            {goalList.map((singleGoal,id) => {
                return (
                    <GoalItem key={id} singleGoal={singleGoal} removeGoal={removeGoal} editGoal={editGoal}
                    toggleButton={toggleButton} />
                )
            })}
            {goalList.length > 0 && (
                <div>
                    <button onClick={clearGoalList}>delete all goals</button>
                </div>
            )}
        </section>
    );
};

export default GoalList;