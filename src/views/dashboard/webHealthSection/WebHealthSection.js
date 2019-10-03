import React from 'react';
import { RequestsBarChart } from '../requestsBarChart/RequestsBarChart';
import { WebServerHealth } from '../webServerHealth/WebServerHealth';
import { Waterfall } from '../waterfall/Waterfall';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Popover from '@material-ui/core/Popover';
import { usePopupState, bindTrigger, bindPopover } from 'material-ui-popup-state/hooks';

export function WebHealthSection(props) {
	const pageLoadPopover = usePopupState({
		variant: 'popover',
		popupId: 'pageLoadPopover'
	});

	const pageSizePopover = usePopupState({
		variant: 'popover',
		popupId: 'pageSizePopover'
	});

	return (
		<Paper elevation={1}>
			<div className="card__header">
				<Typography variant="h5" className="text--center text--glow" component="h3">
					Website Performance <span className="text--bold">{props.webHealth}%</span>
				</Typography>
			</div>
			<div className="padding-y--20">
				<Grid container spacing={16} className="padding-y--20">
					<Grid item sm={6} xs={12}>
						<Typography variant="h6" component="h4" className="text--center popover__trigger" {...bindTrigger(pageLoadPopover)}>
							Page Load:
						</Typography>
						<Popover
							{...bindPopover(pageLoadPopover)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center'
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center'
							}}>
							<Typography variant="body1" className="card">
								Total page load should be two seconds or less.
							</Typography>
						</Popover>
						<Typography className="text--center padding-y--20 text--glow" variant="h3" component="h3">
							{parseFloat(props.results.pageLoad).toFixed(1) / 1000}
							<span className="text--small">s</span>{' '}
							{props.results.pageLoad < 2000 ? <Icon className="color--good">thumb_up</Icon> : <Icon className="color--bad">thumb_down</Icon>}
						</Typography>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Typography variant="h6" component="h4" className="text--center popover__trigger" {...bindTrigger(pageSizePopover)}>
							Size:
						</Typography>
						<Popover
							{...bindPopover(pageSizePopover)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center'
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center'
							}}>
							<Typography variant="body1" className="card">
								Total page size should be 2mb or less.
							</Typography>
						</Popover>
						<Typography className="text--center text--glow padding-y--20" variant="h3" component="h3">
							{parseFloat(props.results.pageSize).toFixed(1) / 1000}
							<span className="text--small">mB</span>{' '}
							{props.results.pageSize < 2000 ? <Icon className="color--good">thumb_up</Icon> : <Icon className="color--bad">thumb_down</Icon>}
						</Typography>
					</Grid>
				</Grid>
				<Grid container className="card--slim">
					<WebServerHealth results={props.results} />
				</Grid>
				<Grid container className="card--slim">
					<RequestsBarChart results={props.results} />
				</Grid>
				<Grid container className="card--slim">
					<Waterfall results={props.results} />
				</Grid>
			</div>
		</Paper>
	);
}
