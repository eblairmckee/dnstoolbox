import React, { useEffect, useState } from 'react';
import { HealthGauge } from '../healthgauge/HealthGauge';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopy from '@material-ui/icons/FileCopy';

export function OverallHealth(props) {
	const handleCopyClick = () => {
		let shareURL = document.querySelector('#shareURL');
		shareURL.select();
		document.execCommand('copy');
	};

	const [healthScore, setHealthScore] = useState(0);

	useEffect(() => {
		setHealthScore((props.DNSHealth + props.webHealth) / 2);
	}, [props.DNSHealth, props.webHealth]);

	return (
		<div className="grid__health-gauge">
			<Typography className="text--right text--glow" variant="h4" component="h3">
				Overall Health
			</Typography>
			<HealthGauge healthScore={healthScore} />
			<div className="container__shareURL">
				<TextField
					className="text--shareURL"
					id="shareURL"
					variant="outlined"
					type={'text'}
					fullWidth
					label="Share your results"
					value={props.shareURL}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<FileCopy className="copy-icon" onClick={handleCopyClick} />
							</InputAdornment>
						)
					}}
				/>
			</div>
		</div>
	);
}
