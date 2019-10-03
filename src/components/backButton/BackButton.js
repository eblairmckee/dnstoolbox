import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import './backbutton.modules.scss';

export function BackButton(props) {
	return (
		<Typography variant="h6" className="fake-link text--glow padding-left-50" onClick={props.goBack}>
			<Icon className="icon--inline">arrow_back</Icon> Go Back
		</Typography>
	);
}
