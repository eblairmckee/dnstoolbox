import React from 'react';
import { Map } from './map/Map';
import { Results } from './results/Results';
import { HelperCard } from '../../components/helperCard/HelperCard';

import Grid from '@material-ui/core/Grid';

export function Propagation(props) {
	return (
		<div>
			<HelperCard title={'Global DNS Propagation'} text={'lorem ipsum'} />
			<Grid container>
				<Map />
			</Grid>
			<Grid container direction="row" justify="center">
				<Results />
			</Grid>
		</div>
	);
}
