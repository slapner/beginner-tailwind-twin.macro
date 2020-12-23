/** @jsxImportSource @emotion/react */
import { GlobalStyles } from 'twin.macro';
import About from './layout/About';
import Build from './layout/Build';
import FAQ from './layout/Faq';
import Header from './layout/Header';
import Learn from './layout/Learn';
import Modules from './layout/Modules';
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
			<Modules />
			<FAQ />
		</div>
	);
}

export default App;
