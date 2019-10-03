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

export function WHOis(props) {
	const classes = useStyles(props);

	const WHOisPopover = usePopupState({
		variant: 'popover',
		popupId: 'WHOisPopover'
	});

	return (
		<div className="full-width">
			<Typography className="padding-bottom-20 text--glow" component="h4" variant="h6">
				<span className="popover__trigger" {...bindTrigger(WHOisPopover)}>
					WHOis
				</span>{' '}
				Check
			</Typography>
			<Popover
				{...bindPopover(WHOisPopover)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}>
				<Typography variant="body1" className="card">
					Information about who registered the domain.
				</Typography>
			</Popover>
			<ExpansionPanel disabled={props.results.WHOis ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body1">
						<b className="text--glow">Registrar</b>: {props.results.WHOis.Registrar}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					<Typography variant="body2">
						<b className="text--glow">Status</b>: {props.results.WHOis.Status}
					</Typography>
					<Typography variant="body2">
						<b className="text--glow">Last Updated</b>: {props.results.WHOis.Updated}
					</Typography>
					<Typography variant="body2">
						<b className="text--glow">Created</b>: {props.results.WHOis.Created}
					</Typography>
					<Typography variant="body2">
						<b className="text--glow">Expires</b>: {props.results.WHOis.Expires}
					</Typography>
					<Typography variant="body2">
						<b className="text--glow">Nameservers</b>:
					</Typography>
					<pre>{props.results.WHOis.Nameservers}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
