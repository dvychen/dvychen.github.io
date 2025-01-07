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
				delay: 1.5,
				duration: 0.5,
				ease: easeInOut,
			}}
			className='notebook'
		>
			<Page>
				<div className='header1'>DAVID CHEN</div>
				<div>Hi, I'm...</div>
				<ul>
					<li>
						Studying Computer Science (business spec.)
						@&nbsp;University of Waterloo
					</li>
					<li>Graduating April 2025!</li>
				</ul>
				<div>Previously...</div>
				<ul>
					<li>
						SWE Intern @{' '}
						<a
							href='https://www.janestreet.com/'
							target='_blank'
							rel='noreferrer'
						>
							Jane Street
						</a>{' '}
						- worked on the equities desk & the dev tools team
					</li>
					<li>
						SWE Intern @{' '}
						<a
							href='https://www.citadel.com/'
							target='_blank'
							rel='noreferrer'
						>
							Citadel
						</a>{' '}
						- learned a ton about data center infrastructure
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
				</ul>
			</Page>
			<Page>
				<ul style={{ marginTop: 0 }}>
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
						- my first internship
					</li>
				</ul>
				<div style={{ textAlign: 'center' }}>.</div>
				<div style={{ textAlign: 'center' }}>.</div>
				<div style={{ textAlign: 'center' , marginBottom : '1em'}}>.</div>
				<div style={{ textAlign: 'center' }}>
					(past projects & hobbies coming soon...)
				</div>
			</Page>
		</motion.div>
	);
};
