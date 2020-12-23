/** @jsxImportSource @emotion/react */
import { GlobalStyles } from 'twin.macro';
import About from './layout/About';
import Build from './layout/Build';
import Header from './layout/Header';
import Learn from './layout/Learn';
import Overview from './layout/Overview';
import Pricing from './layout/Pricing';

function App() {
	return (
		<div>
			<GlobalStyles />
			<Header />
			<Overview />
			<About />
			<Learn />
			<Build />
			<Pricing />
		</div>
	);
}

export default App;
