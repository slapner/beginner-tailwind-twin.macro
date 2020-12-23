/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const InfoBox = tw.div`top-0 right-0 px-8 py-4 mt-8 text-left text-yellow-800 transform bg-yellow-100 border-t-4 border-yellow-500 rounded shadow-lg lg:translate-x-4 lg:-translate-y-4 lg:absolute lg:mt-0`;

const TeaserImage = () => (
	<div tw="relative">
		<img
			src="https://i.imgur.com/wysbBMS.png"
			alt="Teaser"
			tw="border-4 border-purple-400 rounded-lg shadow-2xl"
		/>
		<InfoBox>
			<p>
				<strong tw="font-bold">
					We'll create BeginnerTailwind.com{' '}
					<span tw="opacity-50">(it's the site you're on now)</span>
				</strong>
			</p>
			<p>We'll do it all without a single line of custom CSS!</p>
		</InfoBox>
	</div>
);

export default TeaserImage;
