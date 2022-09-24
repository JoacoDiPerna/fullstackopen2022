import { useState } from 'react';
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<h1>give a feedback</h1>
			<Button text='good' onClick={() => setGood(good + 1)} />
			<Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
			<Button text='bad' onClick={() => setBad(bad + 1)} />
			<br />
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
			/>
		</>
	);
}

export default App;