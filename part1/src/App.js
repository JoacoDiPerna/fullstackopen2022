import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
	const course = 'Half Stack application development';

	const content = [
		{ name: "Fundamentals of React", exercises: 10 },
		{ name: "Using props to pass data", exercises: 7 },
		{ name: "State of a component", exercises: 14 }
	];

	const total = content.map(x => x.exercises).reduce((x, y) => x + y, 0);

	return (
		<div>
			<Header course={course} />
			<Content content={content} />
			< Total total={total} />
		</div>
	);
}

export default App;