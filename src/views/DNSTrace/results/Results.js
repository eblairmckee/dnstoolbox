import React from 'react';

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
						<pre>{props.results.response}</pre>
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
