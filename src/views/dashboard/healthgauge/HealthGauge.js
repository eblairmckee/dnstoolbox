import React, { useEffect } from 'react';
import { bb } from 'billboard.js';
import 'billboard.js/dist/billboard.css';
import './healthgauge.modules.scss';

export function HealthGauge(props) {
	useEffect(() => {
		const _renderChart = () => {
			let chart = bb.generate({
				data: {
					columns: [['data', 0]],
					type: 'gauge'
				},
				gauge: {
					width: 50
				},
				color: {
					pattern: ['#79dfe3', '#00c7d2', '#00c7d2'],
					threshold: {
						values: [49, 75, 100]
					}
				},
				size: {
					height: 180
				},
				bindto: '#healthGauge'
			});

			setTimeout(function() {
				chart.load({
					columns: [['data', props.healthScore]]
				});
			}, 700);
		};
		_renderChart();
	}, [props.healthScore]);

	return (
		<div className="wrapper--center">
			<div id="healthGauge" />
		</div>
	);
}
