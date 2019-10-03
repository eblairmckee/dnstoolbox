import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export function HelperCard(props) {
	return (
		<Grid container direction="row" justify="center" className="card--slim margin-bottom-50">
			<Paper className="card card--helper" elevation={1}>
				<div className="helper__wrapper">
					<div className="helper__background">
						<img src="../../../assets/bearded-man.png" alt="sexy bearded man" className="helper__icon" />
					</div>
					<Typography variant="h4" component="h1" className="text--glow">
						{props.title}
					</Typography>
				</div>
				<Typography variant="body1" component="p" gutterBottom>
					{props.text}
				</Typography>
			</Paper>
		</Grid>
	);
}
