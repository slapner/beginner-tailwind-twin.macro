/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { BaseContainer as Container } from '../components/CommonElements';

const buildItems = [
	{ color: 'red', label: 'Buttons' },
	{ color: 'blue', label: 'Cards' },
	{ color: 'green', label: 'Forms' },
	{ color: 'purple', label: 'Header' },
	{ color: 'orange', label: 'Navigation' },
	{ color: 'teal', label: 'Hero' },
	{ color: 'purple', label: 'Grids' },
	{ color: 'blue', label: 'Newsletter' },
	{ color: 'green', label: 'Pricing Sections' },
	{ color: 'blue', label: 'FAQ Sections' },
	{ color: 'red', label: 'Parcel.js Setup' },
	{ color: 'yellow', label: 'Responsive' },
];

const Build = () => (
	<div tw="py-24 text-gray-600 bg-gray-300">
		<Container>
			<BuildHeading />
			<div tw="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{buildItems.map((item) => (
					<BuildItem {...item} key={item.label} />
				))}
			</div>
		</Container>
	</div>
);

const BuildHeading = () => (
	<div tw="mb-10 text-center">
		<h2 tw="mb-2 text-5xl text-gray-800">What we'll build in this course</h2>
		<p tw="text-lg text-gray-700">
			These components are things you'll have to create in every project
		</p>
	</div>
);

const BuildItem = ({ label, color }) => {
	const colors = {
		red: tw`bg-red-500`,
		green: tw`bg-green-500`,
		purple: tw`bg-purple-500`,
		orange: tw`bg-orange-500`,
		blue: tw`bg-blue-500`,
		teal: tw`bg-teal-500`,
		yellow: tw`bg-yellow-500`,
	};

	const containerStyles = (color) => [
		tw`flex items-center justify-center w-1/5 text-3xl rounded-l`,
		colors[color],
	];

	return (
		<div tw="flex bg-white rounded shadow">
			<div css={containerStyles(color)}>
				<span>😍</span>
			</div>
			<div tw="p-4">{label}</div>
		</div>
	);
};

export default Build;
