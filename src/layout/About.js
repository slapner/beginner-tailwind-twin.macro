/** @jsxImportSource @emotion/react */
import 'twin.macro';
import VideoSection from '../components/about/VideoSection';
import { BaseContainer as Container, Link } from '../components/CommonElements';

const About = () => (
	<div tw="pb-24 bg-gray-200 lg:text-center lg:pt-12">
		<Container>
			<h2 tw="mb-3 text-3xl font-bold text-teal-900 lg:text-6xl">
				Some Tailwind Videos I've Done
			</h2>
			<p tw="mb-12 leading-loose lg:text-xl">
				Hey there! My name is{' '}
				<Link href="https://twitter.com/chrisoncode">Chris on Code</Link> and I
				founded a web dev tutorial site{' '}
				<Link href="https://scotch.io">Scotch.io</Link>. We were able to grow to
				4M monthly pageviews and $300,000 yearly revenue. Scotch.io was acquired
				by <Link href="https://digitalocean.com">DigitalOcean</Link> in November
				2019. Nowadays I'm in search of the best ways to develop and design a
				business. Hope you enjoy this course and my other one{' '}
				<Link href="https://makereactapps.com">MakeReactApps.com</Link>
			</p>
			<div tw="space-y-8 text-left lg:flex lg:space-x-8 lg:space-y-0">
				<VideoSection
					videoUrl="https://www.youtube.com/embed/6zIuAyLZPH0"
					title="Starter video"
				>
					I have a Getting started with Tailwind article on{' '}
					<Link href="https://scotch.io/tutorials/get-started-with-tailwind-css-in-15-minutes">
						scotch.io
					</Link>{' '}
					and a{' '}
					<Link href="https://beginnertailwind.com">
						15 minute starter YouTube video
					</Link>
				</VideoSection>
				<VideoSection
					videoUrl="https://www.youtube.com/embed/NRagrTU_v8o"
					title="Traversy"
				>
					I did a Build Your 1st Tailwind Site for{' '}
					<Link href="https://www.youtube.com/user/TechGuyWeb">
						Traversy Media
					</Link>{' '}
					on YouTube also.
				</VideoSection>
			</div>
		</Container>
	</div>
);

export default About;
