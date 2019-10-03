import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers, Marker } from 'react-simple-maps';

const wrapperStyles = {
	width: '100%',
	minWidth: 980,
	margin: '0 auto'
};

const markers = [
	{ markerOffset: 20, name: 'Ashburn', ip: '127.331.441.551', coordinates: [-80, 33] },
	{ markerOffset: 22, name: 'New York', ip: '1.1.1.1', coordinates: [-75, 40] },
	{ markerOffset: 20, name: 'Miami', ip: '1.1.1.1', coordinates: [-81, 26] },
	{ markerOffset: -12, name: 'Chicago', ip: '1.1.1.1', coordinates: [-88, 40] },
	{ markerOffset: 25, name: 'Dallas', ip: '1.1.1.1', coordinates: [-99, 30] },
	{ markerOffset: 20, name: 'Los Angeles', ip: '2.2.2.2', coordinates: [-117, 35] },
	{ markerOffset: 20, name: 'San Jose', ip: '2.2.2.2', coordinates: [-123, 41] },
	{ markerOffset: -12, name: 'Seattle', ip: '2.2.2.2', coordinates: [-125, 48] },
	{ markerOffset: -12, name: 'London', ip: '3.3.3.3', coordinates: [0, 52] },
	{ markerOffset: 20, name: 'Amsterdam', ip: '3.3.3.3', coordinates: [2, 50] },
	{ markerOffset: 20, name: 'Frankfurt', ip: '3.3.3.3', coordinates: [5, 44] },
	{ markerOffset: 20, name: 'Tokyo', ip: '4.4.4.4', coordinates: [140, 38] },
	{ markerOffset: -12, name: 'Hong Kong', ip: '4.4.4.4', coordinates: [115, 24] },
	{ markerOffset: -12, name: 'Singapore', ip: '4.4.4.4', coordinates: [105, 2] },
	{ markerOffset: -12, name: 'Sydney', ip: '4.4.4.4', coordinates: [135, -30] }
];

export class Map extends Component {
	render() {
		return (
			<div style={wrapperStyles}>
				<ComposableMap
					projectionConfig={{ scale: 320 }}
					width={1100}
					height={700}
					style={{
						width: '100%',
						height: 'auto'
					}}>
					<ZoomableGroup center={[10, 20]} enablePanning>
						<Geographies geography="./world-50m.json">
							{(geographies, projection) =>
								geographies.map((geography, i) => (
									<Geography
										key={i}
										geography={geography}
										projection={projection}
										style={{
											default: {
												fill: '#282A51',
												stroke: 'rgba(175, 236, 237, 0.2)',
												strokeWidth: 1,
												outline: 'none'
											},
											hover: {
												fill: '#3E429E',
												stroke: 'rgba(175, 236, 237, 0.5)',
												strokeWidth: 1,
												outline: 'none'
											},
											pressed: {
												fill: '#6D72DE',
												stroke: '#79dfe3',
												strokeWidth: 1,
												outline: 'none'
											}
										}}
									/>
								))
							}
						</Geographies>
						<Markers>
							{markers.map((marker, i) => (
								<Marker
									key={i}
									marker={marker}
									style={{
										default: { fill: '#00c7d2' },
										hover: { fill: '#00bdcd' },
										pressed: { fill: '#0098a1' }
									}}>
									<circle
										cx={0}
										cy={0}
										r={5}
										style={{
											stroke: '#00bdcd',
											strokeWidth: 3,
											opacity: 0.9
										}}
									/>
									<text
										textAnchor="middle"
										y={marker.markerOffset}
										style={{
											fontFamily: 'Roboto, sans-serif',
											fill: '#dff7f8',
											fontWeight: 700,
											fontSize: '12px',
											background: '#000'
										}}>
										{marker.ip}
									</text>
								</Marker>
							))}
						</Markers>
					</ZoomableGroup>
				</ComposableMap>
			</div>
		);
	}
}
