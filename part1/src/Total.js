const Total = ({ course: { parts = [] } }) => {
	const total = parts.map(x => x.exercises).reduce((x, y) => x + y, 0);

	return (
		<p>Number of exercises {total}</p>
	);
}

export default Total;