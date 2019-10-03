import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';

export function IntroCard() {
	return (
		<Paper className="card card--helper" elevation={1}>
			<div className="helper__wrapper">
				<div className="helper__background">
					<img src="../../../assets/bearded-man.png" alt="sexy bearded man" className="helper__icon" />
				</div>
				<Typography variant="h4" component="h1" className="text--glow">
					Domain Diagnostics
				</Typography>
			</div>
			<Typography component="p">
				Find out how healthy your domain is (or isn’t). We’ll run dozens of different tests to check your DNS health, website performance, common
				network misconfigurations, and more.{' '}
			</Typography>
		</Paper>
	);
}
