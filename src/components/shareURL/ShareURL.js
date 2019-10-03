import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopy from '@material-ui/icons/FileCopy';

export function ShareURL(props) {
	const handleCopyClick = () => {
		let shareURL = document.querySelector('#shareURL');
		shareURL.select();
		document.execCommand('copy');
	};

	return (
		<div className="container__shareURL">
			<TextField
				className="text--shareURL"
				id="shareURL"
				variant="outlined"
				type={'text'}
				fullWidth
				label="Share your results"
				value={props}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<FileCopy className="copy-icon" onClick={handleCopyClick} />
						</InputAdornment>
					)
				}}
			/>
		</div>
	);
}
