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
						<Typography variant="h6" component="h2" className="text--glow">
							Traceroute from <b>{props.values.location}</b> to <b>{props.values.hostname}</b>
						</Typography>
						<pre>{props.results.traceroute}</pre>
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
