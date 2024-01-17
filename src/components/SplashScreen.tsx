import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import AnimatedDavidChenWriting from '../assets/animated-davidchen-writing-transparent.gif';
import '../styles/SplashScreen.css';

const SplashScreen: FC = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className='splash-screen'
		>
			<img
				src={AnimatedDavidChenWriting}
				alt='Animated writing of "David Chen"'
				className='animated-drawing'
			/>
		</motion.div>
	);
};

export const withSplashScreen = (Component: React.FC) => {
	const WrappedComponent: FC = (props) => {
		const [drawn, setDrawn] = useState<boolean>(false);

		useEffect(() => {
			const drawingTime = 3000;
			const drawingTimeout = setTimeout(() => {
				setDrawn(true);
			}, drawingTime);
			return () => {
				clearTimeout(drawingTimeout);
			};
		}, []);

		return (
			<>
				<AnimatePresence>{!drawn && <SplashScreen />}</AnimatePresence>
				<Component {...props} />
			</>
		);
	};
	return WrappedComponent;
};
