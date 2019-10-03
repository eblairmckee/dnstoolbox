import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopy from '@material-ui/icons/FileCopy';

export function Results(props) {
	const handleCopyClick = () => {
		let shareURL = document.querySelector('#shareURL');
		shareURL.select();
		document.execCommand('copy');
	};

	console.log(props.results.shareURL);

	return (
		<div>
			<Grid container className="card--slim">
				<Grid item sm={12}>
					<Paper elevation={1} className="card">
						<Typography variant="h5" component="h2" className="text--glow" gutterBottom>
							Resolves to: <b>{props.results.result}</b> from <b>{props.values.location}</b>
						</Typography>
						<Typography variant="h6">Host:</Typography>
						<Typography variant="body1" gutterBottom>
							{props.values.hostname}
						</Typography>
						<Typography variant="h6">Record Type:</Typography>
						<Typography variant="body1" gutterBottom>
							{props.values.recordType}
						</Typography>
						<Typography variant="h6">Checked at:</Typography>
						<Typography variant="body1" gutterBottom>
							{props.results.timeStamp}
						</Typography>
						<Typography variant="h6">Response Time:</Typography>
						<Typography variant="body1" gutterBottom>
							{props.results.responseTime}
						</Typography>
						<Typography variant="h6">Nameserver:</Typography>
						<Typography variant="body1">{props.values.nameserver}</Typography>
					</Paper>
				</Grid>
			</Grid>
			<Grid container className="card--slim">
				<Grid item sm={6}>
					<div className="container__shareURL">
						<TextField
							className="text--shareURL"
							id="shareURL"
							variant="outlined"
							type={'text'}
							fullWidth
							label="Share your results"
							value={props.results.shareURL}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<FileCopy className="copy-icon" onClick={handleCopyClick} />
									</InputAdornment>
								)
							}}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
