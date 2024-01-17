import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App';

import './index.css';

// Analytics
const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-CZYSM5GVS4';
ReactGA.initialize(GOOGLE_ANALYTICS_MEASUREMENT_ID);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
