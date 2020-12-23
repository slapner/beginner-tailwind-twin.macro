/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const VideoSectionWrapper = tw.div`flex flex-col bg-white border-2 border-gray-700 rounded shadow-xl lg:w-1/2`;
const VideoText = tw.p`flex-grow p-6 text-lg text-gray-700`;

const VideoSection = ({ children, videoUrl, title }) => (
	<VideoSectionWrapper>
		<VideoText>{children}</VideoText>
		<iframe
			tw="w-full rounded-b"
			title={title}
			height="315"
			src={videoUrl}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</VideoSectionWrapper>
);

export default VideoSection;
