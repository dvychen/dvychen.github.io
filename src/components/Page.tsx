import { FC, PropsWithChildren } from 'react';
import '../styles/Page.css';

export const Page: FC<PropsWithChildren> = ({ children }) => {
	return <div className='page'>{children}</div>;
};
