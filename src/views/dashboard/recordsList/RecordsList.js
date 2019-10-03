import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import './recordsList.scss';

const useStyles = makeStyles(theme => ({
	details: {
		display: 'block'
	}
}));

export function RecordsList(props) {
	const classes = useStyles(props);

	return (
		<div>
			<Typography className="padding-bottom-20 text--glow" component="h4" variant="h6">
				Records
			</Typography>
			<ExpansionPanel disabled={props.results.NSRecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="subheading" variant="body">
						<Typography className="heading" variant="body">
							<b className="text--glow">NS Records</b> - {props.results.NSRecords ? props.results.NSRecords.split('\n').length : 0}
						</Typography>
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					They tell other servers where you host your DNS information. You can also use them to create subdomains.
					<pre>{props.results.NSRecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel disabled={props.results.SOARecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">SOA Records</b> - {props.results.SOARecords ? 1 : 0}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					"State of Authority" records are automatically provided by your authoritative provider(s).
					<pre>{props.results.SOARecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel disabled={props.results.ARecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">A Records</b> - {props.results.ARecords ? props.results.ARecords.split('\n').length : 0}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					How you point the root of your domain to an IPv4 address.
					<pre>{props.results.ARecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel disabled={props.results.AAAARecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">AAAA Records</b> - {props.results.AAAARecords ? props.results.AAAARecords.split('\n').length : 0}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					How you point the root of your domain to an IPv6 address.
					<pre>{props.results.AAAARecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel disabled={props.results.ANAMERecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">ANAME Records</b> - {props.results.ANAMERecords ? props.results.ANAMERecords.split('\n').length : 0}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					How you point the root of your domain to a hostname.
					<pre>{props.results.ANAMERecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel disabled={props.results.CNAMERecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">CNAME Records</b> - {props.results.CNAMERecords ? props.results.CNAMERecords.split('\n').length : 0}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					How you point your domain to a hostname.
					<pre>{props.results.CNAMERecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel disabled={props.results.MXRecords ? false : true}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className="heading" variant="body">
						<b className="text--glow">MX Records</b> - {props.results.MXRecords ? props.results.MXRecords.split('\n').length : 0}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					How you point your domain to your mailbox.
					<pre>{props.results.MXRecords}</pre>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
