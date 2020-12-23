/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

import { BaseContainer } from '../components/CommonElements';

const Container = tw(BaseContainer)`relative`;

const Footer = () => (
	<div tw="relative py-24 text-gray-600 bg-gradient-to-br from-gray-100 to-gray-300">
		<Circles />
		<Container>
			<TopFooter />
			<BottomFooter />
		</Container>
	</div>
);

const Circles = () => (
	<div tw="absolute top-0 left-0 transform translate-x-6 translate-y-6">
		<div tw="absolute w-24 h-24 rounded-full opacity-50 bg-gradient-to-br from-teal-100 to-teal-200"></div>
		<div tw="absolute w-24 h-24 ml-12 rounded-full opacity-50 bg-gradient-to-br from-purple-100 to-purple-200"></div>
		<div tw="absolute w-24 h-24 mt-12 ml-6 rounded-full opacity-50 bg-gradient-to-br from-red-100 to-red-200"></div>
	</div>
);

const TopFooter = () => (
	<div tw="justify-between space-y-12 lg:(flex space-y-0)">
		<Newsletter />
		<TopFooterLinks />
	</div>
);

const Newsletter = () => (
	<div tw="flex flex-col justify-center">
		<GradientHeader>Get updates on this course</GradientHeader>
		<form action="" tw="flex">
			<Input type="email" name="email" placeholder="super@secret.com" />
			<button tw="p-3 text-purple-100 bg-purple-400 rounded-r">
				Subscribe
			</button>
		</form>
	</div>
);

const GradientHeader = tw.h4`mb-4 text-2xl font-bold text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500`;

const Input = tw.input`w-full p-3 placeholder-gray-300 border-2 border-r-0 border-gray-400 rounded-l outline-none focus:border-purple-400`;

const FooterLinkColumn = ({ heading, links }) => (
	<div tw="space-y-2">
		<p tw="mb-3 font-bold tracking-widest text-gray-400 uppercase">{heading}</p>
		{links.map((link) => (
			<FooterLink href="/" key={link}>
				{link}
			</FooterLink>
		))}
	</div>
);

const FooterLink = tw.a`block hover:text-gray-800 hover:underline`;

const TopFooterLinks = () => (
	<div tw="space-y-8 text-center md:flex md:justify-center md:space-x-16 md:space-y-0 lg:text-right">
		<FooterLinkColumn
			heading="Legal Stuff"
			links={['Terms', 'Privacy', 'Rules']}
		/>
		<FooterLinkColumn
			heading="Product"
			links={['Pricing', 'Documentation', 'Guides']}
		/>
		<FooterLinkColumn heading="Company" links={['About', 'Blog', 'Careers']} />
	</div>
);

const BottomFooter = () => (
	<div tw="justify-between pt-4 mt-16 space-y-4 text-sm text-center border-t border-gray-300 md:(text-left flex space-y-0)">
		<div>Copyright &copy; 2020 - 2077</div>
		<div tw="space-x-4">
			<a href="/">Discord</a>
			<a href="/">Twitter</a>
			<a href="/">YouTube</a>
		</div>
	</div>
);

export default Footer;
