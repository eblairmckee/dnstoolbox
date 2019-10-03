import React, { useState, useEffect } from 'react';
import { SearchBar } from './searchbar/SearchBar';
import { Results } from './results/Results';
import { Loading } from '../../components/loading/Loading';
import { CallToAction } from '../../components/callToAction/CallToAction';
import { IntroCard } from './introCard/IntroCard';
import { CSSTransition } from 'react-transition-group';
import Grid from '@material-ui/core/Grid';
import './dashboard.modules.scss';

export function Dashboard() {
	const [state, setState] = useState({
		location: '',
		domain: '',
		submit: false,
		loading: false
	});

	const [results, setResults] = useState({
		totalRecords: '',
		DNSResponse: '643',
		NSRecords: `ns21.constellix.com.
ns31.constellix.com.
ns41.constellix.net.
ns51.constellix.net.
ns61.constellix.net.
ns11.constellix.com.`,
		SOARecords: `constellix.com. 86400 IN SOA ns11.constellix.com. dns.constellix.com. 2015010266 43200 3600 1209600 180`,
		ARecords: `ns21.constellix.com.
ns31.constellix.com.
ns41.constellix.net.`,
		AAAARecords: ``,
		CNAMERecords: `ns21.constellix.com.
ns31.constellix.com.
ns41.constellix.net.`,
		ANAMERecords: ``,
		MXRecords: `ns21.constellix.com.
ns31.constellix.com.
ns41.constellix.net.`,
		WHOis: {
			Registrar: `eNom, LLC`,
			'Registrar Status': 'ACTIVE',
			Nameservers: `NS11.CONSTELLIX.COM
NS11.CONSTELLIX.COM
NS21.CONSTELLIX.COM
NS21.CONSTELLIX.COM
NS31.CONSTELLIX.COM
NS31.CONSTELLIX.COM`,
			Updated: '2019-05-20',
			Created: '2009-11-22',
			Expires: '2022-11-22',
			Status: 'clientTransferProhibited'
		},
		pageLoad: '1700',
		pageSize: '3100',
		healthCheck: {
			IP: '127.0.0.1',
			responseTime: '24',
			statusCode: '200'
		},
		requests: {
			DNS: '643',
			Request: '200',
			'DOM Load Complete': '1300',
			'DOM Interactive': '2300',
			'DOM Content Loaded': '3400'
		},
		pageSizeWaterfall: {
			Images: '2000',
			JavaScript: '500',
			CSS: '25',
			Miscellaneous: '432'
		},
		GeoIP: {
			values: [
				{ a: 'A', b: 20 },
				{ a: 'B', b: 34 },
				{ a: 'C', b: 55 },
				{ a: 'D', b: 19 },
				{ a: 'E', b: 40 },
				{ a: 'F', b: 34 },
				{ a: 'G', b: 91 },
				{ a: 'H', b: 78 },
				{ a: 'I', b: 25 }
			]
		},
		shareURL: ''
	});

	const [DNSHealth, setDNSHealth] = useState(0);
	const [webHealth, setWebHealth] = useState(0);

	const handleChange = event => {
		setState({ ...state, [event.target.name]: event.target.value });
		// console.log('you have chosen ' + state.domain + ' and ' + state.location + ' submitted is ' + state.submit);
	};

	const handleSubmit = event => {
		if (state.domain.length >= 1 && state.location !== '') {
			setState({ ...state, loading: true });
			setResults({ ...results, shareURL: `https://dnstoolbox.io/?domain=${state.domain}&location=${state.location}` });
			setTimeout(() => setState({ ...state, submit: true, loading: false }), 5000);
		}

		// console.log('you have chosen ' + state.domain + ' and ' + state.location + ' submitted is ' + state.submit);
	};

	//this is how i'm calculating health scores
	useEffect(() => {
		//get total number of records
		let getTotal = results.NSRecords.split('\n').length;

		if (results.SOARecords !== '') {
			getTotal += 1;
		}
		if (results.ARecords !== '') {
			getTotal += results.ARecords.split('\n').length;
		}
		if (results.AAAARecords !== '') {
			getTotal += results.ARecords.split('\n').length;
		}
		if (results.ANAMERecords !== '') {
			getTotal += results.ARecords.split('\n').length;
		}
		if (results.CNAMERecords !== '') {
			getTotal += results.ARecords.split('\n').length;
		}
		if (results.MXRecords !== '') {
			getTotal += results.ARecords.split('\n').length;
		}
		setResults({ ...results, totalRecords: getTotal });
		//calculate DNS health
		if (parseInt(results.totalRecords) >= 6) {
			setDNSHealth(c => c + 10);
		}
		if (parseInt(results.totalRecords) >= 9) {
			setDNSHealth(c => c + 10);
		}
		if (results.ARecords !== '' || results.CNAMERecords !== '' || results.AAAARecords !== '' || results.ANAMERecords !== '') {
			setDNSHealth(c => c + 10);
		}
		if (results.MXRecords !== '' && results.MXRecords.split('\n').length >= 1) {
			setDNSHealth(c => c + 10);
		}
		if (results.NSRecords !== '' && results.NSRecords.split('\n').length >= 2) {
			setDNSHealth(c => c + 10);
		}
		if (results.NSRecords !== '' && results.NSRecords.split('\n').length >= 4) {
			setDNSHealth(c => c + 10);
		}
		if (results.SOA !== '') {
			setDNSHealth(c => c + 10);
		}
		if (results.response < 100) {
			setDNSHealth(c => c + 10);
		}
		//calculate web health
		if (results.pageLoad !== '' && results.pageLoad < 3000) {
			setWebHealth(w => w + 10);
		}
		if (results.pageLoad !== '' && results.pageLoad < 2000) {
			setWebHealth(w => w + 20);
		}
		if (results.pageLoad !== '' && results.pageLoad < 1000) {
			setWebHealth(w => w + 10);
		}
		if (results.pageSize !== '' && results.pageSize < 4000) {
			setWebHealth(w => w + 10);
		}
		if (results.pageSize !== '' && results.pageSize < 2000) {
			setWebHealth(w => w + 20);
		}
		if (results.pageSize !== '' && results.pageSize < 1000) {
			setWebHealth(w => w + 10);
		}
		if (parseInt(results.requests.Request) === 200) {
			setWebHealth(w => w + 20);
		}
		// eslint-disable-next-line
	}, []);

	//so you can't go over 100%
	if (DNSHealth > 100) {
		setDNSHealth(100);
	}
	if (webHealth > 100) {
		setWebHealth(100);
	}

	return (
		<div className="page--dashboard">
			<div className="wrapper--center padding-x--50">
				<SearchBar handleChange={handleChange} domain={state.domain} location={state.location} handleSubmit={handleSubmit} />
			</div>
			<div className="wrapper--center padding-top-50">{state.loading === false ? <IntroCard /> : null}</div>
			<Grid container justify="center">
				<CSSTransition in={state.submit === true || state.loading} timeout={300} classNames="page">
					{state.loading === true ? (
						<Loading />
					) : (
						<div className="dash__wrapper">
							{state.submit === true && state.loading === false ? (
								<Results state={state} results={results} DNSHealth={DNSHealth} webHealth={webHealth} />
							) : null}
							{state.submit === true && state.loading === false ? <CallToAction /> : null}
						</div>
					)}
				</CSSTransition>
			</Grid>
		</div>
	);
}
