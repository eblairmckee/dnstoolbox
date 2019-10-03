import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import { usePopupState, bindTrigger, bindPopover } from 'material-ui-popup-state/hooks';

export function WebServerHealth(props) {
	const statusPopover = usePopupState({
		variant: 'popover',
		popupId: 'statusPopover'
	});

	return (
		<div className="container--full-width sunken">
			<Grid container>
				<Typography className="padding-y--5 text--glow" component="h4" variant="h6">
					Web Server Health
				</Typography>
			</Grid>
			<Grid container className="padding-y--20">
				<Grid item md={4}>
					<Typography component="body1">{props.results.healthCheck.IP}</Typography>
				</Grid>
				<Grid item md={4}>
					<Typography component="body1" className="text--center">
						{props.results.healthCheck.responseTime}ms
					</Typography>
				</Grid>
				<Grid item md={4}>
					<Typography component="body1" className="text--right popover__trigger" {...bindTrigger(statusPopover)}>
						{props.results.healthCheck.statusCode}
					</Typography>

					<Popover
						{...bindPopover(statusPopover)}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center'
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center'
						}}>
						<Typography variant="body1" className="card">
							A healthy web server will respond with a status code of 200.
						</Typography>
					</Popover>
				</Grid>
			</Grid>
		</div>
	);
}
