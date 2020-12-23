/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

const BrowserWindowBase = styled.div(({ span }) => [
	tw`border-2 border-gray-700 rounded shadow-lg`,
	span === 3 ? tw`col-span-3` : tw`col-span-2`,
]);

const BrowserWindow = ({ span = 2, title, children }) => (
	<BrowserWindowBase span={span}>
		<div tw="flex items-center justify-between p-4 border-b-2 border-gray-700">
			<h3 tw="text-lg font-bold">{title}</h3>
			<div tw="flex space-x-2">
				<div tw="w-3 h-3 bg-red-500 rounded-full"></div>
				<div tw="w-3 h-3 bg-yellow-500 rounded-full"></div>
				<div tw="w-3 h-3 bg-green-500 rounded-full"></div>
			</div>
		</div>
		<div tw="p-4">{children}</div>
	</BrowserWindowBase>
);

export default BrowserWindow;
