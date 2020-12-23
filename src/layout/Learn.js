/** @jsxImportSource @emotion/react */
import 'twin.macro';

import {
	BaseContainer as Container,
	Strong,
	Link,
} from '../components/CommonElements';
import BrowserWindow from '../components/learn/BrowserWindow';
import LearnHeader from '../components/learn/LearnHeader';

const StyledTitle = () => (
	<>
		How to build this site (<span tw="italic text-teal-500">site-ception</span>)
	</>
);

const Learn = () => (
	<div tw="py-32 text-gray-700 bg-gray-200" id="learn">
		<Container>
			<LearnHeader />
			<div tw="grid-cols-6 gap-10 space-y-8 lg:grid lg:space-y-0">
				<BrowserWindow span={2} title="How to use Tailwind Classes">
					We'll dive into the most important Tailwind classes and
					<Strong>use them a TON</Strong>. There are a lot of useful classes
					like spacing, backgrounds, borders, shadows, and typography. We'll
					type the Tailwind classes many times over to ensure that repeitition
					is our greatest learning tool.
				</BrowserWindow>
				<BrowserWindow span={2} title="Make good looking designs">
					There's a certain process to designing with Tailwind that we'll take
					to make our designs look good. Some easy to remember rules are all it
					takes to get a good design. We'll also talk about ideas and action
					items to <Strong>take a good design and make it great</Strong>.
				</BrowserWindow>
				<BrowserWindow span={2} title="Why Tailwind is different/better">
					To be completely honest,
					<Strong>I didn't like Tailwind at first</Strong>. It felt like inline
					styles to me (and maybe still does). After using it more and more
					though, I've come to{' '}
					<Strong tw="text-red-700">absolutely love it</Strong>. I dread jumping
					into a project without Tailwind now.
				</BrowserWindow>
				<BrowserWindow span={3} title={<StyledTitle />}>
					<p tw="pb-4">
						The site you're on (
						<Link href="https://beginnertailwind.com">
							BeginnerTailwind.com
						</Link>
						) is built with Tailwind and <Strong>has 0 custom CSS</Strong>
					</p>
					<p>
						You can take all of the code from this site and use it for your own
						landing pages or sites! All the code is available to you with course
						purchase.
					</p>
				</BrowserWindow>
				<BrowserWindow span={3} title="A fun and methodical design process">
					I struggle with making things look good and don't consider myself a
					designer. What I try to do is have a formula for making things look
					good. I focus on design in this order: spacing, box properties,
					typography, fun element to pop. We'll talk about this all throughout
					the course.
				</BrowserWindow>
				<BrowserWindow span={2} title="Creating common components">
					<p tw="pb-4">
						One of the first things we want to do when using Tailwind is to
						create components like cards, buttons, and forms. We'll build these
						out and see how Tailwind compares to CSS frameworks like Bootstrap.
					</p>
					<p>
						We'll also build out navigation, hero, pricing, newsletter, and
						footer components in this course.
					</p>
				</BrowserWindow>
				<BrowserWindow span={2} title="Shrinking bundle sizes">
					<p tw="pb-4">
						Tailwind comes with so many classes. It doesn't make sense to send
						all of those to our users' browsers. With{' '}
						<Link href="https://tailwindcss.com/docs/controlling-file-size">
							PostCSS and PurgeCSS
						</Link>
						, we can shrink the amount of CSS we send to our users.
					</p>
					<p>
						We'll learn how to only send the classes that we actually use so
						that our <Strong>bundle sizes can drop to even below 10kb!</Strong>
					</p>
				</BrowserWindow>
				<BrowserWindow span={2} title="Using Tailwind w/ React">
					<p tw="pb-4">
						Tailwind's benefits really shine when you pair it with a JavaScript
						library/framework. Extracting classes into components is the
						recommended way to keep Tailwind DRY (don't repeat yourself).
					</p>
					<p>
						While we could use the{' '}
						<Link href="https://tailwindcss.com/docs/functions-and-directives#apply">
							@apply
						</Link>{' '}
						or{' '}
						<Link href="https://tailwindcss.com/docs/functions-and-directives#theme">
							theme()
						</Link>{' '}
						functions, it forgoes some of the benefits of Tailwind. Namely we
						are once again creating a custom class and CSS.
					</p>
				</BrowserWindow>
				<BrowserWindow title="How to customize Tailwind">
					Tailwind is easily configurable for our own projects using the{' '}
					<Link href="https://tailwindcss.com/docs/configuration">
						tailwind.config.js file
					</Link>
					. We'll exlplore changing out fonts, colors, sizes, and more so that
					our Tailwind setups are custom and tailored to our projects.
				</BrowserWindow>
				<BrowserWindow title="Using Tailwind in VS Code">
					<Link href="https://code.visualstudio.com/">VS Code</Link> is my
					favorite editor and Tailwind works fantastically in it. There are some
					essential plugins and setup for using Tailwind in VS Code. We'll go
					over each and use VS Code heavily in this course.
				</BrowserWindow>
				<BrowserWindow title="Extending Tailwind">
					Learning Tailwind is just the beginning. There are some great tools
					like{' '}
					<Link href="https://tailwindcss.com/docs/typography-plugin">
						Tailwind Typography
					</Link>
					, <Link href="https://tailwindui.com">Tailwind UI</Link>,{' '}
					<Link href="https://tailwind.build">Tailwind Builder</Link>, and more.
					We'll talk about some ways to extend Tailwind and ways we can go
					further.
				</BrowserWindow>
			</div>
		</Container>
	</div>
);

export default Learn;
