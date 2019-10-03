import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { bb } from 'billboard.js';
import 'billboard.js/dist/billboard.css';
import './waterfall.scss';

export function Waterfall(props) {
	const results = props.results.pageSizeWaterfall;
	const waterfallTitle = Object.values(results).reduce((a, b) => parseInt(a) + parseInt(b)) / 1000;

	useEffect(() => {
		const _renderChart = () => {
			bb.generate({
				data: {
					columns: Object.entries(results),
					type: 'donut',
					colors: {
						Images: '#008489',
						JavaScript: '#0098a1',
						CSS: '#00bdcd',
						Miscellaneous: '#3bd1d9'
					}
				},

				donut: {
					padAngle: 0.1,
					title: waterfallTitle.toFixed(1) + 'mb'
				},
				size: {
					height: 300
				},

				bindto: '#waterfall'
			});
		};
		_renderChart();
	});

	return (
		<div className="container--full-width">
			<Typography className="padding-y--5 text--glow" component="h4" variant="h6">
				Page Size
			</Typography>
			<div id="waterfall" className="content__svg" />
		</div>
	);
}
