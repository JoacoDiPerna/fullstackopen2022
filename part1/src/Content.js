import Part from './Part';

const Content = ({ course: { parts = [] } }) => (
	<>
		{
			parts.map(x => (
				<Part name={x.name} exercises={x.exercises} />
			))
		}
	</>
);

export default Content;