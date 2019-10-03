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

export function DNSTrace(props) {
	const [values, setValues] = useState({
		hostname: '',
		submit: false
	});

	const [results, setResults] = useState({
		response: `
        .			518400	IN	NS	m.root-servers.net.
        .			518400	IN	NS	b.root-servers.net.
        .			518400	IN	NS	c.root-servers.net.
        .			518400	IN	NS	d.root-servers.net.
        .			518400	IN	NS	e.root-servers.net.
        .			518400	IN	NS	f.root-servers.net.
        .			518400	IN	NS	g.root-servers.net.
        .			518400	IN	NS	h.root-servers.net.
        .			518400	IN	NS	a.root-servers.net.
        .			518400	IN	NS	i.root-servers.net.
        .			518400	IN	NS	j.root-servers.net.
        .			518400	IN	NS	k.root-servers.net.
        .			518400	IN	NS	l.root-servers.net.
        .			518400	IN	RRSIG	NS 8 0 518400 20190611170000 20190529160000 25266 . evmu1BGk5wByM0FxRfFaDHGFFfmMKG6k6i8O077DDOEjiBln2hX/R09x 1JPfKuKdNOAPlcZdO7tqP9P8599bJOquExHZtgEoX1hqQaxNTlqVlqlE 8VMZgU8cdC7ssN1TMv6HJNw3QCyWqFQzXASusCJ/2SjINQ4wogpE2eyA gZd5/o07uaf/6CvqyR0KUo5ps6YS8GR85eZZh1qttTxmLhzOGWJ/s0PR YbqS3deA+YUbQLSmxnUJqBTXvZKxBJ8dq1m2j7HZf2TZ73VMPQ2DvjIo 7Snz5Yp484iM+zyCynqmBqg1bvheDR6+lgaHOkddYyM6+ZN0Qk3QcmpT bNtd/w==
        ;; Received 1097 bytes from 2001:500:2f::f#53(f.root-servers.net) in 870 ms
        
        com.			172800	IN	NS	i.gtld-servers.net.
        com.			172800	IN	NS	f.gtld-servers.net.
        com.			172800	IN	NS	h.gtld-servers.net.
        com.			172800	IN	NS	e.gtld-servers.net.
        com.			172800	IN	NS	b.gtld-servers.net.
        com.			172800	IN	NS	d.gtld-servers.net.
        com.			172800	IN	NS	l.gtld-servers.net.
        com.			172800	IN	NS	c.gtld-servers.net.
        com.			172800	IN	NS	j.gtld-servers.net.
        com.			172800	IN	NS	g.gtld-servers.net.
        com.			172800	IN	NS	m.gtld-servers.net.
        com.			172800	IN	NS	k.gtld-servers.net.
        com.			172800	IN	NS	a.gtld-servers.net.
        com.			86400	IN	DS	30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CF C41A5766
        com.			86400	IN	RRSIG	DS 8 1 86400 20190611170000 20190529160000 25266 . THN276K5UQs00Q9StpDAJ0SHXJ6MQPobdFAHd5hkAjbMbc932wy67YOd GEGRkJ014kIVFTzw40aagFLyJyQsJEUy2E5/d0abalP34GrVpeTOv3UA Er3PxwRRy37DCm/aVoHXw5GTBHDKLhjusMrwijd/CDBbeHKEkeooOg3S Njvy5zZC3qFe80+Erpp9Xl1qEAMeV8dFUUMiT3TKPNXmIDwYwSVGgDNx 17NP20vRnNbNo8uCg5e2acYpcVp751UreAdP0WnOp5C+0wpwrYuF8Po+ 6JG29XiwYls+4AcM3nt1j7DSalaLsQA54yqsfMVt7xx++BmKawVmPbR9 ZKTVoQ==
        ;; Received 1174 bytes from 199.9.14.201#53(b.root-servers.net) in 790 ms
        
        constellix.com.		172800	IN	NS	ns11.constellix.com.
        constellix.com.		172800	IN	NS	ns51.constellix.net.
        constellix.com.		172800	IN	NS	ns41.constellix.net.
        constellix.com.		172800	IN	NS	ns21.constellix.com.
        constellix.com.		172800	IN	NS	ns61.constellix.net.
        constellix.com.		172800	IN	NS	ns31.constellix.com.
        CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN NSEC3 1 1 0 - CK0Q1GIN43N1ARRC9OSM6QPQR81H5M9A NS SOA RRSIG DNSKEY NSEC3PARAM
        CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN RRSIG NSEC3 8 2 86400 20190604044533 20190528033533 3800 com. YQdumHEEUmzxuBxPBgehzu4J2IUp49V8I/9jmOCeLkaXkjaIBpU6eEFg dS5HTiEjHIzJaQeCvih3VmXTdYlUj9exoNz5anezyE913cr9EAczipcN wM18pVhvJMAwNyc+vpKKquwEKb13smt8hVaezr+KRyVxG0cZSxb1IX/6 IO4=
        UV3EFMT6UTO31RI9BJFQAVFA66MP6KFU.com. 86400 IN NSEC3 1 1 0 - UV3FRA1HK2KN6JVARR6DE7STVCND2QPQ NS DS RRSIG
        UV3EFMT6UTO31RI9BJFQAVFA66MP6KFU.com. 86400 IN RRSIG NSEC3 8 2 86400 20190604052440 20190528041440 3800 com. MlF+oUKqmU/OvjZC5teDt2YRvQZYIG8W2qzUh4GMyPYwpXrfiR3XL341 go3zYoEN+sztTykU0USDbEePri4Bv6eAISo1m34M6upk1awzBz+YaWrO 5o9uE2bUNLZlzDzgi2I1/cG8iiQYOYeLbGiaHPD2g3Jcy03xGa076G/C 1Fg=
        ;; Received 788 bytes from 2001:503:d414::30#53(f.gtld-servers.net) in 71 ms
        
        constellix.com.		100	IN	A	162.243.68.201
        constellix.com.		86400	IN	NS	ns41.constellix.net.
        constellix.com.		86400	IN	NS	ns51.constellix.net.
        constellix.com.		86400	IN	NS	ns61.constellix.net.
        constellix.com.		86400	IN	NS	ns11.constellix.com.
        constellix.com.		86400	IN	NS	ns21.constellix.com.
        constellix.com.		86400	IN	NS	ns31.constellix.com.
        ;; Received 347 bytes from 96.45.81.1#53(ns41.constellix.net) in 0 ms`,
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
		if (values.hostname !== '') {
			setValues({ ...values, submit: true });
			setResults({
				...results,
				shareURL: `https://dnstoolbox.io/dnstrace?hostname=${values.hostname}`
			});

			// fetchResults();
		}
	};

	const handleGoBack = () => {
		setValues({ ...values, submit: false });
	};

	return (
		<div>
			<HelperCard title={'DNS Trace'} text={'lorem ipsum'} />
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
