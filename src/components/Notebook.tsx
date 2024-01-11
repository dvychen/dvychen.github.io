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
				<div>Hi, I'm David...</div>
				<ul>
					<li>
						Computer Science @ University of Waterloo (graduating
						April 2025)
					</li>
					<li>
						Taking courses on Distributed Systems, Concurrency,
						Software Delivery, and more!
					</li>
				</ul>
				<div className='preview'>
					(hobbies & interests coming soon...)
				</div>
			</Page>
			<Page>
				<div>Previously...</div>
				<ul>
					<li>
						SWE Intern @{' '}
						<a
							href='https://transify.com'
							target='_blank'
							rel='noreferrer'
						>
							Transify
						</a>{' '}
						- I was their first employee!
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
					<li>
						SWE Intern @{' '}
						<a
							href='https://www.replicant.com/'
							target='_blank'
							rel='noreferrer'
						>
							Replicant
						</a>{' '}
						- led my first ML research project
					</li>
					<li>
						SWE Intern @{' '}
						<a
							href='https://www.super.com/'
							target='_blank'
							rel='noreferrer'
						>
							Super.com
						</a>{' '}
						- A/B testing to 40k+ users
					</li>
					<li>
						SWE Intern @{' '}
						<a
							href='https://solace.com/'
							target='_blank'
							rel='noreferrer'
						>
							Solace
						</a>{' '}
						- full stack development
					</li>
				</ul>
				<div className='preview'>(past projects coming soon...)</div>
			</Page>
		</motion.div>
	);
};
