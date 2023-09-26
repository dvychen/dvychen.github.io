import { FC } from 'react';
import { Page } from './Page';
import '../styles/Notebook.css';

export const Notebook: FC = () => {
	return (
		<div className='notebook'>
			<Page>
				<div className='header1'>DAVID CHEN</div>
				<div>Hi, I'm David!</div>
			</Page>
			<Page>
				<div>Previously done a lot of things</div>
			</Page>
		</div>
	);
};
