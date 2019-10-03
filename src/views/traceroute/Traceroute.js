import React, { useState } from 'react';
import { Form } from './form/Form';
import { Results } from './results/Results';
import { BackButton } from '../../components/backButton/BackButton';
import { CallToAction } from '../../components/callToAction/CallToAction';
import { HelperCard } from '../../components/helperCard/HelperCard';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CSSTransition } from 'react-transition-group';
import './traceroute.modules.scss';

export function Traceroute(props) {
	const [values, setValues] = useState({
		hostname: '',
		protocol: 'UDP',
		IPVersion: 'IPv4',
		port: '',
		location: '',
		submit: false
	});

	const [results, setResults] = useState({
		traceroute: `
        traceroute to 162.243.68.201 (162.243.68.201), 15 hops max, 60 byte packets
        1  45.55.128.253 (45.55.128.253)  0.281 ms
        2  138.197.248.32 (138.197.248.32)  0.564 ms
        3  138.197.244.32 (138.197.244.32)  1.952 ms
        4  138.197.248.143 (138.197.248.143)  0.896 ms
        5  *
        6  *
        7  *
        8  *
        9  *
       10  *
       11  *
       12  *
       13  *
       14  *
       15  *`,
		shareURL: ''
	});

	const handleChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	// const fetchResults = () => {
	// 	//API CALL
	// 	setResults({ ...results, traceroute: 'something' });
	// };

	const handleSubmit = () => {
		if ((values.hostname !== '') & (values.port !== '') & (values.location !== '')) {
			setValues({ ...values, submit: true });
			setResults({
				...results,
				shareURL: `https://dnstoolbox.io/traceroute?hostname=${values.hostname}&protocol=${values.protocol}&IPVersion=${values.IPVersion}&port=${values.port}&location=${values.location}`
			});
		}
	};

	const handleGoBack = () => {
		setValues({ ...values, submit: false });
	};

	return (
		<div>
			<HelperCard title={'Traceroute'} text={'lorem ipsum'} />
			<CSSTransition in={values.submit} timeout={300} classNames="page">
				<div>
					{values.submit === false ? (
						<Form handleChange={handleChange} handleSubmit={handleSubmit} values={values} />
					) : (
						<div>
							<BackButton goBack={handleGoBack} />
							<Results values={values} results={results} />
							<CallToAction />
						</div>
					)}
				</div>
			</CSSTransition>
		</div>
	);
}
