import Part from './Part';

const Content = ({ content }) => (
	<>
		{
			content.map(x => (
				<Part name={x.name} exercises={x.exercises} />
			))
		}
	</>
);

export default Content;