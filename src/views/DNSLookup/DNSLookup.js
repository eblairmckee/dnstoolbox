import React, { useState } from 'react';
import { Form } from './form/Form';
import { Results } from './results/Results';
import { BackButton } from '../../components/backButton/BackButton';
import { HelperCard } from '../../components/helperCard/HelperCard';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CSSTransition } from 'react-transition-group';
import { CallToAction } from '../../components/callToAction/CallToAction';

export function DNSLookup(props) {
	const [values, setValues] = useState({
		hostname: '',
		recordType: '',
		nameserver: '',
		location: '',
		submit: false
	});

	const [results, setResults] = useState({
		timeStamp: '2019-05-24T21:31:43.583Z',
		responseTime: '15ms',
		result: '162.243.68.201',
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
		if ((values.hostname !== '') & (values.recordType !== '') & (values.nameserver !== '') & (values.location !== '')) {
			setValues({ ...values, submit: true });
			setResults({
				...results,
				shareURL: `https://dnstoolbox.io/dnslookup?hostname=${values.hostname}&recordtype=${values.recordType}&nameserver=${values.nameserver}&location=${values.location}`
			});
			// fetchResults();
		}
	};

	const handleGoBack = () => {
		setValues({ ...values, submit: false });
	};

	return (
		<div>
			<HelperCard title={'DNS Lookup'} text={'lorem ipsum'} />
			<CSSTransition in={values.submit} timeout={300} classNames="page">
				{values.submit === false ? (
					<Form handleChange={handleChange} handleSubmit={handleSubmit} values={values} />
				) : (
					<div>
						<BackButton goBack={handleGoBack} />
						<Results values={values} results={results} />
						<CallToAction />
					</div>
				)}
			</CSSTransition>
		</div>
	);
}
