import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// Google Analytics
ReactGA.initialize('G-CZYSM5GVS4');
ReactGA.send({
	hitType: 'pageview',
	title: 'Page Visited',
});
