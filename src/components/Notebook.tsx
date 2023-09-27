import { FC } from 'react';
import { Page } from './Page';
import '../styles/Notebook.css';
import '../styles/Highlight.css';

export const Notebook: FC = () => {
	return (
		<div className='notebook'>
			<Page>
				<div className='header1'>DAVID CHEN</div>
				<div className=''>Hi, I'm David!</div>
				<ul>
					<li>
						Computer Science @ University of Waterloo (graduating
						<span className='highlight'>April 2025</span>)
					</li>
					<li>SWE Intern @ Transify - I'm their first employee!</li>
					<li>
						Researching @ VIP Lab - 3D avatar reconstruction from
						videos via neural nets
					</li>
				</ul>
			</Page>
			<Page>
				{/* <div>Previously done a lot of things... </div> */}
				<div style={{ textAlign: 'center' }}>
					(this page coming soon...)
				</div>
			</Page>
		</div>
	);
};
