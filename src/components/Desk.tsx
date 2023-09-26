import { FC, PropsWithChildren } from 'react';
import '../styles/Desk.css';

export const Desk: FC<PropsWithChildren> = ({ children }) => {
	return <div className='desk'>{children}</div>;
};
