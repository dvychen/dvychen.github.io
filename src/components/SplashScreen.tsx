import { FC, useEffect, useState } from 'react';

import AnimatedDavidChenWriting from '../assets/animated-davidchen-writing.gif';
import '../styles/SplashScreen.css';

const SplashScreen: FC = () => {
	return (
		<div className='splash-screen'>
			<img
				src={AnimatedDavidChenWriting}
				alt='Animated writing of "David Chen"'
				className='animated-drawing'
			/>
		</div>
	);
};

export const withSplashScreen = (Component: React.FC) => {
	const WrappedComponent: FC = (props) => {
		const [loading, setLoading] = useState<boolean>(true);

		useEffect(() => {
			const timeForSplashScreen = 2500;
			setTimeout(() => {
				setLoading(false);
			}, timeForSplashScreen);
		}, []);

		return (
			<>
				{loading && <SplashScreen />}
				<Component {...props} />
			</>
		);
	};
	return WrappedComponent;
};
