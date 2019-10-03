import React from 'react';
import { OverallHealth } from '../overallHealth/OverallHealth';
import { DNSHealthSection } from '../DNSHealthSection/DNSHealthSection';
import { WebHealthSection } from '../webHealthSection/WebHealthSection';

import Grid from '@material-ui/core/Grid';

export function Results(props) {
	return (
		<div>
			<OverallHealth DNSHealth={props.DNSHealth} webHealth={props.webHealth} shareURL={props.results.shareURL} />
			<Grid container className="padding-top-50 padding-left-20 padding-right-20" spacing={2}>
				<Grid item lg={6} sm={12}>
					<DNSHealthSection results={props.results} DNSHealth={props.DNSHealth} />
				</Grid>
				<Grid item lg={6} sm={12}>
					<WebHealthSection results={props.results} webHealth={props.webHealth} />
				</Grid>
			</Grid>
		</div>
	);
}
