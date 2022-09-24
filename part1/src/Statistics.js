import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;
	const average = (good * 1 + bad * (-1)) / all;
	const positive = (good / all) * 100 + ' %';

	const noFeedback = !good && !neutral && !bad;

	return (
		<>
			<h1>statistics</h1>
			{noFeedback && <p>No feedback given</p>}
			{!noFeedback &&
				<table>
					<tbody>
						<StatisticLine text='good' value={good} />
						<StatisticLine text='neutral' value={neutral} />
						<StatisticLine text='bad' value={bad} />
						<StatisticLine text='all' value={all} />
						<StatisticLine text='average' value={average} />
						<StatisticLine text='positive' value={positive} />
					</tbody>
				</table>
			}
		</>
	);
};

export default Statistics;