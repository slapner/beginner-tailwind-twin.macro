/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { BaseContainer, Strong } from '../components/CommonElements';

const GrayBox = tw.div`absolute inset-x-0 top-0 h-48 bg-gray-300`;
const Container = tw(
	BaseContainer
)`flex flex-col items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:flex-row`;

const Pricing = () => (
	<div tw="relative py-32 text-blue-200 bg-blue-600" id="pricing">
		<GrayBox />
		<Container>
			<LeftBox />
			<PricingBox />
			<RightBox />
		</Container>
	</div>
);

const LeftBox = () => (
	<div tw="order-2 pt-12 space-y-2 text-xl text-center lg:text-right lg:w-1/3 lg:order-1">
		<p>
			<Strong tw="text-white">75 videos</Strong> at a smooth pace
		</p>
		<p>
			<Strong tw="text-white">9.25 hours</Strong> of learning + building
		</p>
		<p>
			<Strong tw="text-white">Source code</Strong> and CodePens
		</p>
	</div>
);

const RightBox = () => (
	<div tw="order-3 pt-12 space-y-2 text-xl text-center lg:w-1/3 lg:text-left">
		<p>
			Use the code in <Strong tw="text-white">your projects</Strong>
		</p>
		<p>
			Access to <Strong tw="text-white">Discord</Strong> for support
		</p>
		<p>
			Lifetime <Strong tw="text-white">refund guarantee</Strong>
		</p>
	</div>
);

const PricingBox = () => (
	<div tw="relative order-1 w-full p-8 space-y-4 text-center text-gray-800 transition duration-500 transform bg-white border-8 border-purple-700 rounded shadow-2xl lg:(w-1/3 order-2) hover:scale-105">
		<Beams />
		<h4 tw="text-base text-gray-600">
			Start Tailwind-<span tw="italic">ing</span>!
		</h4>
		<div tw="text-6xl font-bold leading-relaxed text-purple-800">
			<span tw="opacity-25">$</span>47
		</div>
		<button tw="block w-full p-3 text-yellow-800 transition duration-300 rounded shadow bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 hover:(shadow-2xl text-yellow-900)">
			Buy the Course
		</button>
	</div>
);

const Beams = () => (
	<div tw="absolute inset-x-0 top-0 flex items-end justify-center space-x-8 transform -translate-y-full">
		<div tw="w-2 h-16 mb-8 origin-bottom transform -rotate-45 bg-red-500 rounded"></div>
		<div tw="w-2 h-24 mb-8 bg-yellow-500 rounded"></div>
		<div tw="w-2 h-16 mb-8 origin-bottom transform rotate-45 bg-green-500 rounded"></div>
	</div>
);

export default Pricing;
