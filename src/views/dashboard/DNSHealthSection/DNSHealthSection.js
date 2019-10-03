import React from 'react';
import { RecordsList } from '../recordsList/RecordsList';
import { NameserversList } from '../nameserversList/NameserversList';
import { WHOis } from '../WHOis/WHOis';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Popover from '@material-ui/core/Popover';
import { usePopupState, bindTrigger, bindPopover } from 'material-ui-popup-state/hooks';

export function DNSHealthSection(props) {
	const recordPopover = usePopupState({
		variant: 'popover',
		popupId: 'recordsPopover'
	});

	const responsePopover = usePopupState({
		variant: 'popover',
		popupId: 'responsePopover'
	});

	return (
		<Paper elevation={1}>
			<div className="card__header">
				<Typography className="text--center text--glow" variant="h5" component="h3">
					DNS Health <span className="text--bold">{props.DNSHealth}%</span>
				</Typography>
			</div>
			<div className="padding-y--20">
				<Grid container spacing={16} className="padding-y--20">
					<Grid item sm={6} xs={12} className="wrapper--center-column">
						<Typography variant="h6" component="h4" className="popover__trigger" {...bindTrigger(recordPopover)}>
							Total Records:
						</Typography>
						<Popover
							{...bindPopover(recordPopover)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center'
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center'
							}}>
							<Typography variant="body1" className="card">
								You should always have at least two records.
							</Typography>
						</Popover>
						<Typography className="text--center text--glow padding-y--20" variant="h3" component="h3">
							{props.results.totalRecords}{' '}
							{props.results.totalRecords > 2 ? <Icon className="color--good">thumb_up</Icon> : <Icon className="color--bad">thumb_down</Icon>}
						</Typography>
					</Grid>
					<Grid item sm={6} xs={12} className="wrapper--center-column">
						<Typography variant="h6" component="h4" className="popover__trigger" {...bindTrigger(responsePopover)}>
							Response:
						</Typography>

						<Popover
							{...bindPopover(responsePopover)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center'
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'center'
							}}>
							<Typography variant="body1" className="card">
								DNS response time should be no more than 100ms.
							</Typography>
						</Popover>
						<Typography className="text--center text--glow padding-y--20" variant="h3" component="h3">
							{props.results.DNSResponse}
							<span className="text--small">ms</span>{' '}
							{props.results.DNSResponse < 100 ? <Icon className="color--good">thumb_up</Icon> : <Icon className="color--bad">thumb_down</Icon>}
						</Typography>
					</Grid>
				</Grid>

				<Grid container className="card--slim">
					<NameserversList results={props.results} />
				</Grid>
				<Grid container className="card--slim">
					<RecordsList results={props.results} />
				</Grid>
				<Grid container className="card--slim">
					<WHOis results={props.results} state={props.state} />
				</Grid>
			</div>
		</Paper>
	);
}
