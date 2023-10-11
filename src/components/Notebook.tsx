import { FC } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { Page } from './Page';
import '../styles/Notebook.css';
import '../styles/Highlight.css';

export const Notebook: FC = () => {
	return (
		<motion.div
			initial={{ y: '-100vh' }}
			animate={{ y: 0 }}
			transition={{
				delay: 4.5,
				duration: 0.5,
				ease: easeInOut,
			}}
			className='notebook'
		>
			<Page>
				<div className='header1'>DAVID CHEN</div>
				<div className=''>Hi, I'm David...</div>
				<ul>
					<li>
						Computer Science @ University of Waterloo (graduating
						April 2025)
					</li>
					<li>
						SWE Intern @{' '}
						<a
							href='https://transify.com'
							target='_blank'
							rel='noreferrer'
						>
							Transify
						</a>{' '}
						- I'm their first employee!
					</li>
					<li>
						Research Assistant @{' '}
						<a
							href='https://uwaterloo.ca/vision-image-processing-lab/'
							target='_blank'
							rel='noreferrer'
						>
							VIP Lab
						</a>{' '}
						- neural nets to extract 3D avatars from videos
					</li>
				</ul>
			</Page>
			<Page>
				{/* <div>Previously done a lot of things... </div> */}
				<div style={{ textAlign: 'center' }}>
					(this page is coming soon...)
				</div>
			</Page>
		</motion.div>
	);
};
