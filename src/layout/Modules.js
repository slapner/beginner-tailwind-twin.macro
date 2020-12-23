/** @jsxImportSource @emotion/react */
import 'twin.macro';
import { BaseContainer as Container } from '../components/CommonElements';

const Modules = () => (
	<div tw="py-32 bg-gradient-to-b from-gray-700 to-gray-800">
		<Container>
			<ModulesHeading />
		</Container>
	</div>
);

const ModulesHeading = () => (
	<div tw="mb-10 space-y-4 text-center">
		<h2 tw="text-4xl font-bold text-transparent lg:text-6xl bg-clip-text bg-gradient-to-br from-white to-purple-200">
			The Modules/Videos
		</h2>
		<p tw="text-2xl text-gray-100">
			9 hours of Tailwind learning in 18 modules and 73 videos
		</p>
		<ModulesList />
	</div>
);

const moduleData = [
	{ title: 'Getting Started', videos: 6, minutes: 33 },
	{ title: 'Main Concepts', videos: 11, minutes: 67 },
	{ title: 'Layout', videos: 4, minutes: 37 },
	{ title: 'Card Components', videos: 3, minutes: 34 },
	{ title: 'Button Components', videos: 3, minutes: 32 },
	{ title: 'Form Components', videos: 3, minutes: 35 },
	{ title: 'Building a Course Site', videos: 6, minutes: 42 },
	{ title: 'Header/Navigation', videos: 3, minutes: 16 },
	{ title: 'Hero Section', videos: 4, minutes: 36 },
	{ title: 'Overview Section', videos: 4, minutes: 26 },
	{ title: 'About Me Section', videos: 3, minutes: 17 },
	{ title: "What You'll Build", videos: 1, minutes: 11 },
	{ title: 'Pricing Section', videos: 4, minutes: 33 },
	{ title: 'FAQ Section', videos: 1, minutes: 6 },
	{ title: 'Footer/Newsletter', videos: 4, minutes: 30 },
	{ title: 'Fixes', videos: 2, minutes: 5 },
	{ title: 'Going Beyond', videos: 5, minutes: 44 },
	{ title: 'Conclusion', videos: 2, minutes: 5 },
];

const ModuleItem = ({ title, videos, minutes }) => (
	<div tw="flex items-center justify-between p-6 bg-gray-800 first-of-type:rounded-t-lg last-of-type:rounded-b-lg even-of-type:bg-opacity-75">
		<h4 tw="text-3xl">{title}</h4>
		<div tw="flex space-x-8 text-xl font-bold text-center">
			<div>
				{videos} <span tw="block text-sm font-normal">videos</span>
			</div>
			<div>
				{minutes} <span tw="block text-sm font-normal">minutes</span>
			</div>
		</div>
	</div>
);

const ModulesList = () => (
	<div tw="max-w-3xl mx-auto text-gray-400">
		{moduleData.map((item) => (
			<ModuleItem {...item} key={item.title} />
		))}
	</div>
);

export default Modules;
