import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Form(props) {
	return (
		<div>
			<Grid container direction="column" justify="center" alignItems="center">
				<form noValidate autoComplete="off" className="form__wrapper">
					<Grid container className="margin-bottom-50">
						<Grid item sm={12}>
							<TextField
								className="input--wide"
								label="Hostname"
								name="hostname"
								value={props.values.hostname}
								onChange={props.handleChange}
								margin="normal"
								variant="outlined"
							/>
						</Grid>
					</Grid>
					<Grid container justify="center">
						<Button size="large" variant="contained" color="primary" onClick={props.handleSubmit}>
							Run DNS Trace
						</Button>
					</Grid>
				</form>
			</Grid>
		</div>
	);
}
