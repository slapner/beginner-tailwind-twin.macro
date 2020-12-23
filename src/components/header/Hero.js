/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import BaseContainer from '../../layout/BaseContainer';
import TeaserImage from './TeaserImage';

const PurpleBar = tw.div`absolute inset-x-0 bottom-0 h-64 bg-purple-700`;

const Container = tw(BaseContainer)`py-24 text-center`;

const Heading = () => (
	<h1 tw="pb-6 text-5xl font-extrabold lg:text-6xl">
		<span tw="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
			Beginner
		</span>{' '}
		<span tw="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-600 to-purple-500">
			Tailwind
		</span>
	</h1>
);

const HeroCTA = tw.button`inline-block px-12 py-3 mb-16 text-lg font-bold tracking-wide text-purple-100 transition duration-500 rounded shadow-lg lg:mb-32 bg-gradient-to-br from-purple-500 to-purple-700 hover:to-purple-600 hover:shadow-2xl hover:text-white`;

export default function Hero() {
	return (
		<div tw="relative">
			<PurpleBar />
			<Container>
				<Heading />
				<p tw="mb-8 text-lg text-gray-700 lg:text-2xl">
					Make good looking designs quickly. All without a single line of custom
					css
				</p>
				<HeroCTA>Get the Course</HeroCTA>
				<TeaserImage />
			</Container>
		</div>
	);
}
