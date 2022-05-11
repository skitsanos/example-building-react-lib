import React from 'react';
import styles from './styles.module.css';

export const ExampleComponent = ({text}) =>
{
	return <div className={styles.test}>Component: {text}</div>;
};

export {Box} from './Box';