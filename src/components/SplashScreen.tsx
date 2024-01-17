import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import '../styles/SplashScreen.css';
import AnimatedDavidChenWriting from '../assets/animated-davidchen-writing-transparent.gif';
import LoadingAnimation from '../assets/book-preloader.gif';
import DeskBackground from '../assets/natural-wooden-background.jpg';
import NotebookBackground from '../assets/notebook.png';

interface SplashScreenProps {
	showPreloader: boolean;
}

const BIG_IMAGE_SRCS = [DeskBackground, NotebookBackground];

const SplashScreen: FC<SplashScreenProps> = ({ showPreloader }) => {
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

			<motion.div
				initial={false}
				animate={{ opacity: showPreloader ? 1 : 0 }}
				className='preloader'
			>
				<img
					src={LoadingAnimation}
					alt='Preloader animation of a book'
					className='loading-animation'
				/>
				<span className='loading-text'>Loading...</span>
			</motion.div>
		</motion.div>
	);
};

export const withSplashScreen = (Component: React.FC) => {
	const WrappedComponent: FC = (props) => {
		const [drawingLogo, setDrawingLogo] = useState<boolean>(true);
		const [imagesLoading, setImagesLoading] = useState<number>(
			BIG_IMAGE_SRCS.length
		);

		useEffect(() => {
			const drawingTime = 3000;
			const drawingTimeout = setTimeout(() => {
				setDrawingLogo(false);
			}, drawingTime);
			return () => {
				clearTimeout(drawingTimeout);
			};
		}, []);

		useEffect(() => {
			BIG_IMAGE_SRCS.forEach((src) => {
				const image = new Image();
				image.addEventListener('load', () => {
					setImagesLoading((count) => count - 1);
				});
				image.src = src;
			});
		}, []);

		const showSplashScreen = drawingLogo || imagesLoading > 0;

		return (
			<>
				<AnimatePresence>
					{showSplashScreen && (
						<SplashScreen showPreloader={!drawingLogo} />
					)}
				</AnimatePresence>
				{!showSplashScreen && <Component {...props} />}
			</>
		);
	};
	return WrappedComponent;
};
