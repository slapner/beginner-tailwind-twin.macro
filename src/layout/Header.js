/** @jsxImportSource @emotion/react */
import 'twin.macro';
import BackgroundBubbles from '../components/header/BackgroundBubbles';
import Hero from '../components/header/Hero';
import Navigation from '../components/header/Navigation';

export default function Header() {
	return (
		<div tw="bg-gradient-to-br from-gray-100 to-gray-300">
			<BackgroundBubbles />
			<Navigation />
			<Hero />
		</div>
	);
}
