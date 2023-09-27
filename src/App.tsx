import './styles/App.css';

import { Desk } from './components/Desk';
import { Notebook } from './components/Notebook';
import { withSplashScreen } from './components/SplashScreen';

function App() {
	return (
		<Desk>
			<Notebook />
		</Desk>
	);
}

export default withSplashScreen(App);
