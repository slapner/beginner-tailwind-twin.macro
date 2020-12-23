/** @jsxImportSource @emotion/react */
import 'twin.macro';
import {
	BaseContainer as Container,
	Link,
	Strong,
} from '../components/CommonElements';

const FAQ = () => (
	<div tw="py-32 text-gray-400 bg-gray-800" id="faq">
		<Container>
			<h2 tw="mb-12 text-3xl font-bold text-center">
				Frequently Asked Questions
			</h2>
			<div tw="grid grid-cols-1 gap-4 lg:(gap-8 grid-cols-2)">
				<Question title="Do I need to know CSS">
					This course is aimed at people that have some CSS knowledge and want
					to learn Tailwind. I do talk through CSS concepts and why we're using
					certain classes all throughout the course so you don't need to be a
					CSS expert.
				</Question>
				<Question title="Is there course support?">
					You can email me directly at any time and we also have a{' '}
					<Link href="https://discord.gg/WVyUrcS">Discord community</Link> where
					you gain exclusive channel access.
				</Question>
				<Question title="Can I use the code in my own projects?">
					Definitely! All of the code in this course is yours to use in your
					sites, apps, projects, whatever.
				</Question>
				<Question title="What if I don't like it?">
					I offer a <Strong tw="text-teal-400">lifetime refund policy</Strong>.
					If you ever feel like you didn't gain value from this course, then you
					can request a refund from your course dashboard (totally automated
					process, no questions asked).
				</Question>
				<Question title="How do I login and view the course?">
					You can login at{' '}
					<Link href="https://learn.better.dev">learn.better.dev</Link>. Use the
					login button in the top right.
				</Question>
				<Question title="Is there a student discount?">
					Yup! <Strong tw="text-teal-500">50% off</Strong>! Email me at{' '}
					<Link href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</Link> with
					your student id and I'll send you a discount code.
				</Question>
				<Question title="Is there purchase parity for my country?">
					Yup! Email me at{' '}
					<Link href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</Link> and
					I'll send you a purchase power parity code.
				</Question>
				<Question title="Is there an affiliate program?">
					Yup! You get 50% of every sale that you bring in. You can sign up for
					a course and turn on affiliate mode from your dashboard at{' '}
					<Link href="https://learn.better.dev">learn.better.dev</Link>. Or you
					can email me at{' '}
					<Link href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</Link>.
				</Question>
				<Question title="I have more questions!">
					Drop me an email at{' '}
					<Link href="mailto:hey@chrisoncode.io">hey@chrisoncode.io</Link>.
					Let's chat.
				</Question>
			</div>
		</Container>
	</div>
);

const Question = ({ title, children }) => (
	<div tw="p-8 border-2 border-gray-500 rounded-lg">
		<h3 tw="mb-3 text-xl font-bold text-gray-200">{title}</h3>
		<p>{children}</p>
	</div>
);

export default FAQ;
