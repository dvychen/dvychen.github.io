import { FC } from 'react';
import '../styles/Notebook.css';
import { Page } from './Page';

export const Notebook: FC = () => {
	return (
		<div className='notebook'>
			<Page>Page 1</Page>
			<Page>Page 2</Page>
		</div>
	);
};
