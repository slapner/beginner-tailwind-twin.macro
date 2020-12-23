/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { BaseContainer, Link } from '../components/CommonElements';

const GrayBar = tw.div`absolute inset-x-0 bottom-0 h-64 bg-gray-200`;
const Container = tw(BaseContainer)`relative`;

const Overview = () => (
	<div tw="relative pb-24 bg-purple-700 lg:pt-12" id="about">
		<GrayBar />
		<Container>
			<h2 tw="mb-12 text-4xl font-bold lg:text-6xl text-purple-50">
				Writing CSS is tough stuff!
			</h2>
			<div tw="space-y-8 lg:flex lg:space-x-16 lg:space-y-0">
				<LeftColumn />
				<RightColumn />
			</div>
		</Container>
	</div>
);

const LeftColumn = () => (
	<div tw="p-12 space-y-8 text-lg leading-relaxed text-gray-800 bg-white rounded shadow-2xl lg:p-16 lg:w-2/3">
		<p>
			Tailwind makes writing CSS easier and lets us customize our designs faster
			than any other CSS framework. If you want a CSS framework that has
			pre-built components, then Tailwind may not be for you. If you want a CSS
			framework that lets you design quickly and customize your site, then
			<strong tw="font-bold text-teal-500">
				Tailwind is gonna be a lot of fun
			</strong>
			.
		</p>
		<p>
			After using Bulma to build <Link href="https://scotch.io">Scotch.io</Link>
			, my CSS files became littered with my own
			<code tw="inline-block px-1 font-mono text-xs text-red-700 bg-gray-200 rounded">
				!important
			</code>
			twes to override the framework's styles. Tailwind doesn't have the
			<code tw="inline-block px-1 font-mono text-xs text-red-700 bg-gray-200 rounded">
				!important
			</code>
			problem since all our elements are designed on the fly.
		</p>
		<p>
			<strong tw="font-bold">Important Note:</strong> Tailwind lets us design
			quickly, but this doesn't mean that you don't need CSS knowledge however.
			To use Tailwind, you need to have a good understanding of CSS properties.
			In this course, we will learn Tailwind and we'll also learn CSS concepts
			to create good looking designs.
			<strong tw="font-bold">Tailwind is the ultimate CSS shorthand </strong>,
			but we still need to learn the CSS, which we'll do in this course.
		</p>
		<p tw="relative py-2 text-3xl italic leading-relaxed">
			<span tw="absolute top-0 left-0 text-6xl text-purple-600 transform scale-150 -translate-x-6 -translate-y-2 opacity-30">
				"
			</span>
			This isn't just a Tailwind course. This is also a "learn how to design
			with CSS" course.
		</p>
		<p>
			The hardest things about learning Tailwind is memorizing the classes and
			also knowing which classes go well together. We'll be writing a lot of
			Tailwind in this course so that the repetition will help us commit
			Tailwind classes to memory.
		</p>
	</div>
);

const QuestionBubble = tw.div`p-10 bg-purple-800 rounded-lg`;

const RightColumn = () => (
	<div tw="flex-grow space-y-4 text-lg italic text-purple-200">
		<QuestionBubble>What classes should I use?</QuestionBubble>
		<QuestionBubble>How do I make things look good?</QuestionBubble>
		<QuestionBubble>My design looks basic?</QuestionBubble>
		<QuestionBubble>How do I do responsive?</QuestionBubble>
		<QuestionBubble>My typography looks bad?</QuestionBubble>
	</div>
);

export default Overview;
