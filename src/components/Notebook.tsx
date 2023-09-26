import { FC } from 'react';
import { Page } from './Page';
import '../styles/Notebook.css';

export const Notebook: FC = () => {
	return (
		<div className='notebook'>
			<Page>Hi, I'm David</Page>
			<Page>Page 2</Page>
		</div>
	);
};
