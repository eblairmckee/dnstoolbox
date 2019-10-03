import React from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { usePopupState, bindTrigger, bindPopover } from 'material-ui-popup-state/hooks';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	details: {
		display: 'block'
	}
}));

export function NameserversList(props) {
	const classes = useStyles(props);

	const NSPopover = usePopupState({
		variant: 'popover',
		popupId: 'NSPopover'
	});

	return (
		<div className="full-width">
			<Typography className="padding-bottom-20 text--glow" component="h4" variant="h6">
				Delegated{' '}
				<span className="popover__trigger" {...bindTrigger(NSPopover)}>
					Nameservers
				</span>
			</Typography>
			<Popover
				{...bindPopover(NSPopover)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}>
				<Typography variant="body1" className="card">
					You should always have at least two nameservers/NS Records.
				</Typography>
			</Popover>
			<ExpansionPanel disabled={props.results.NSRecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">Nameservers</b> - {props.results.NSRecords.split('\n').length}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					These nameservers are authoritative for hosting your domain's DNS records.
					<pre>{props.results.NSRecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
