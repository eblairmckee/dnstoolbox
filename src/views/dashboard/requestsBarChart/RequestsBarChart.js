import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { bb } from 'billboard.js';
import 'billboard.js/dist/billboard.css';
import './requestsBarChart.modules.scss';

export function RequestsBarChart(props) {
	const results = props.results.requests;

	useEffect(() => {
		const _renderChart = () => {
			bb.generate({
				data: {
					columns: Object.entries(results),
					type: 'bar',
					groups: [['DNS', 'Request', 'DOM Load Complete', 'DOM Interactive', 'DOM Content Loaded']],
					stack: {
						normalize: true
					}
				},
				bar: {},
				size: {
					height: 70
				},
				grid: {},
				axis: {
					rotated: true,
					x: {
						show: false
					},
					y: {
						show: false
					}
				},
				legend: {
					show: false
				},
				tooltip: {
					grouped: false
				},
				color: {
					pattern: ['#00c7d2', '#3bd1d9', '#00bdcd', '#0098a1', '#008489']
				},

				bindto: '#requestsBarChart'
			});
		};

		_renderChart();
	});

	return (
		<div className="container--full-width">
			<Typography className="padding-y--5 text--glow" component="h4" variant="h6">
				DOM Load
			</Typography>
			<div id="requestsBarChart" className="content__svg" />
		</div>
	);
}
