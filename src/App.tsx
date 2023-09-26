import './styles/App.css';

import { Desk } from './components/Desk';
import { Notebook } from './components/Notebook';

function App() {
	return (
		<Desk>
			<Notebook />
		</Desk>
	);
}

export default App;
