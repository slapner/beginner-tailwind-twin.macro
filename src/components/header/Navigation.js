/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

import { BaseContainer } from '../CommonElements';

const Logo = tw.a`text-2xl font-bold text-teal-800 hover:text-teal-700`;
const NavItem = tw.a`hidden lg:inline-block hover:text-gray-900`;
const Container = tw(BaseContainer)`flex justify-between py-6`;

const NavCTAButton = tw.button`hidden p-3 text-purple-700 transition duration-500 bg-purple-300 rounded shadow lg:inline-block hover:bg-purple-200 hover:text-purple-600 hover:shadow-xl`;

const navItems = [
	{ href: '#about', label: 'About' },
	{ href: '#learn', label: "What You'll Learn" },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#faq', label: 'FAQ' },
];

export default function Navigation() {
	return (
		<div tw="relative text-gray-600">
			<Container>
				<div tw="flex items-center space-x-4">
					<Logo href="/">Beginner Tailwind</Logo>
					{navItems.map((item) => (
						<NavItem key={item.href} href={item.href}>
							{item.label}
						</NavItem>
					))}
				</div>
				<div tw="flex items-center space-x-4">
					<a href="/" tw="hover:text-gray-900">
						Login
					</a>
					<NavCTAButton>Get the Course</NavCTAButton>
				</div>
			</Container>
		</div>
	);
}
