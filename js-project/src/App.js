import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
const year = new Date().getFullYear();

export const App = () => {
	return /*#__PURE__*/ createElement(
		'div',
		{
			class: 'App',
		},
		/*#__PURE__*/ createElement(
			'header',
			{
				className: 'App-header',
			},
			/*#__PURE__*/ createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			/*#__PURE__*/ createElement(
				'p',
				null,
				'Edit ',
				/*#__PURE__*/ createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			/*#__PURE__*/ createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			/*#__PURE__*/ createElement('div', null, year),
		),
	);
};
