/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const TopBar = tw.div`absolute top-0 left-0 w-1/3 h-2 transform -translate-y-4 rounded bg-gradient-to-r from-blue-400 to-purple-600`;

const BottomBar = tw.div`absolute bottom-0 right-0 w-1/3 h-2 transform translate-y-4 rounded bg-gradient-to-r to-blue-600 from-purple-400`;

const LearnHeader = () => (
	<div tw="relative">
		<h2 tw="py-4 mb-12 text-4xl font-bold text-center text-purple-900 lg:text-6xl lg:mb-24">
			What You'll Learn In This Course
		</h2>
		<TopBar />
		<BottomBar />
	</div>
);

export default LearnHeader;
