import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

export function CallToAction() {
	return (
		<div className="grid__cta">
			<Paper className="card card--helper" elevation={1}>
				<div className="helper__wrapper">
					<div className="helper__background">
						<img src="../../../assets/bearded-man.png" alt="sexy bearded man" className="helper__icon" />
					</div>
					<div>
						<Typography variant="h5" component="h3" className="text--glow">
							Like what you see?
						</Typography>
						<Typography variant="h4" component="h2" className="text--glow">
							Why not automate it.
						</Typography>
					</div>
				</div>
				<Typography component="p">
					DNS Toolbox is the free version of our network monitoring service called Constellix Sonar. You can automate all of the checks you see here
					and use them to update your DNS configurations in real time. <Link href={'https://constellix.com/sonar'}>Learn more</Link>
				</Typography>
			</Paper>
		</div>
	);
}
