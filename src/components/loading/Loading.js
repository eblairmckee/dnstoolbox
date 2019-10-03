import React from 'react';
import './loading.modules.scss';

export class Loading extends React.Component {
	render() {
		return (
			<div className="loading">
				<div className="loading__background">
					<img src="../../../assets/bearded-man.png" alt="sexy bearded man" className="loading__icon" />
				</div>
			</div>
		);
	}
}
