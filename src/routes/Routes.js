import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Route } from 'react-router-dom';

import { Dashboard } from '../views/dashboard/Dashboard';
import { Traceroute } from '../views/traceroute/Traceroute';
import { DNSLookup } from '../views/DNSLookup/DNSLookup';
import { DNSTrace } from '../views/DNSTrace/DNSTrace';
import { Propagation } from '../views/propagation/Propagation';

export function Routes() {
	const routes = [
		{ path: '/', name: 'Diagnostics', Component: Dashboard },
		{ path: '/traceroute', name: 'Traceroute', Component: Traceroute },
		{ path: '/propagation', name: 'Propagation', Component: Propagation },
		{ path: '/dnslookup', name: 'DNS Lookup', Component: DNSLookup },
		{ path: '/dnstrace', name: 'DNS Trace', Component: DNSTrace }
	];
	return (
		<div>
			{routes.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					{({ match }) => (
						<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
							<div className="page">
								<Component />
							</div>
						</CSSTransition>
					)}
				</Route>
			))}
		</div>
	);
}
