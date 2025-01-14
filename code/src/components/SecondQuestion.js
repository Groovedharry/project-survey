import React from 'react';

const SecondQuestion = ({
	surnameInput,
	onSurnameInputChange,
	onStepChange,
}) => {
	return (
		<form>
			<div className="header">
			<h1 className="title">Type your surname</h1> 
			</div>
			<label htmlFor="surnameInput">
			</label>
			<input
				className="witing-question"
				id="surnameInput"
				placeholder="Type your surname here"
				type="text"
				value={surnameInput}
				onChange={onSurnameInputChange}
			/>
			<button 
			className="button"
			disabled={surnameInput === ''}
			onClick={onStepChange}
			><span className="button-text">
			Next Question</span>
			</button>
		
		</form>
	);
};

export default SecondQuestion;