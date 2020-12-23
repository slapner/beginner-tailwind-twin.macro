/** @jsxImportSource @emotion/react */
import 'twin.macro';

const Bubbles = () => (
	<>
		<div tw="absolute w-64 h-64 rounded-full opacity-25 bg-gradient-to-br from-teal-100 to-teal-200"></div>
		<div tw="absolute w-64 h-64 mt-10 ml-10 rounded-full opacity-25 bg-gradient-to-br from-purple-100 to-purple-200"></div>
		<div tw="absolute w-64 h-64 ml-24 rounded-full opacity-25 bg-gradient-to-br from-red-100 to-red-200"></div>
	</>
);

export default function BackgroundBubbles(props) {
	return (
		<>
			<div tw="absolute top-0 left-0 transform translate-x-4 translate-y-4">
				<Bubbles />
			</div>
			<div tw="absolute top-0 right-0 hidden mr-48 transform -translate-x-64 translate-y-64 lg:block">
				<Bubbles />
			</div>
		</>
	);
}
