import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export function Form(props) {
	const inputLabelRef = React.useRef(null);
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
					<Grid direction="row" justify="space-around" container className="margin-bottom-50">
						<FormControl component="fieldset">
							<FormLabel component="legend" className="text--glow">
								Protocol
							</FormLabel>
							<RadioGroup aria-label="Protocol" name="protocol" value={props.values.protocol} onChange={props.handleChange}>
								<FormControlLabel value="UDP" control={<Radio />} label="UDP" />
								<FormControlLabel value="ICMP" control={<Radio />} label="ICMP" />
								<FormControlLabel value="TCP" control={<Radio />} label="TCP" />
							</RadioGroup>
						</FormControl>
						<FormControl component="fieldset">
							<FormLabel component="legend" className="text--glow">
								IP Version
							</FormLabel>
							<RadioGroup aria-label="IPVersion" name="IPVersion" value={props.values.IPVersion} onChange={props.handleChange}>
								<FormControlLabel labelPlacement="start" value="IPv4" control={<Radio />} label="IPv4" />
								<FormControlLabel labelPlacement="start" value="IPv6" control={<Radio />} label="IPv6" />
							</RadioGroup>
						</FormControl>
					</Grid>
					<Grid container className="margin-bottom-20">
						<FormControl variant="outlined">
							<InputLabel ref={inputLabelRef} htmlFor="port">
								Port
							</InputLabel>
							<Select value={props.values.port} onChange={props.handleChange} input={<OutlinedInput name="port" className="input--wide" />}>
								<MenuItem value={'21'}>21</MenuItem>
								<MenuItem value={'25'}>25</MenuItem>
								<MenuItem value={'80'}>80 (recommended)</MenuItem>
								<MenuItem value={'110'}>110</MenuItem>
								<MenuItem value={'143'}>143</MenuItem>
								<MenuItem value={'443'}>443</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid container className="margin-bottom-50">
						<FormControl variant="outlined">
							<InputLabel ref={inputLabelRef} htmlFor="location">
								Location
							</InputLabel>
							<Select
								value={props.values.location}
								onChange={props.handleChange}
								input={<OutlinedInput name="location" className="input--wide" />}>
								<MenuItem value={'usnyc02-mon02.nodes.constellix.net'}>New York, NY, U.S.A.</MenuItem>
								<MenuItem value={'usmia01-mon02.nodes.constellix.net'}>Miami FL, U.S.A</MenuItem>
								<MenuItem value={'itmil01-mon02.nodes.constellix.net'}>Milan, Italy</MenuItem>
								<MenuItem value={'ussea01-mon02.nodes.constellix.net'}>Seattle, WA, U.S.A</MenuItem>
								<MenuItem value={'ausyd01-mon02.nodes.constellix.net'}>Sydney, Australia</MenuItem>
								<MenuItem value={'usewr01-mon01.nodes.constellix.net'}>Newark NJ, U.S.A</MenuItem>
								<MenuItem value={'auadl01-mon01.nodes.constellix.net'}>Adelaide, Australia</MenuItem>
								<MenuItem value={'cator01-mon02.nodes.constellix.net'}>Toronto,Canada</MenuItem>
								<MenuItem value={'inblr01-mon02.nodes.constellix.net'}>Banglore, India</MenuItem>
								<MenuItem value={'atvie01-mon02.nodes.constellix.net'}>Vienna, Austria</MenuItem>
								<MenuItem value={'uslax10-mon01.nodes.constellix.net'}>Los Angeles, CA, U.S.A</MenuItem>
								<MenuItem value={'gblon01-mon02.nodes.constellix.net'}>London, Great Britain</MenuItem>
								<MenuItem value={'nzakl01-mon01.nodes.constellix.net'}>Auckland, New Zealand</MenuItem>
								<MenuItem value={'ussjc01-mon01.nodes.constellix.net'}>San Jose, CA, U.S.A</MenuItem>
								<MenuItem value={'uschi01-mon02.nodes.constellix.net'}>Chicago, IL, U.S.A</MenuItem>
								<MenuItem value={'usfmt01-mon01.nodes.constellix.net'}>Fremont, CA, U.S.A</MenuItem>
								<MenuItem value={'hkhkg01-mon01.nodes.constellix.net'}>Hong Kong, China</MenuItem>
								<MenuItem value={'sgsin02-mon02.nodes.constellix.net'}>Singapore, Singapore</MenuItem>
								<MenuItem value={'inmaa01-mon02.nodes.constellix.net'}>Chennai, India</MenuItem>
								<MenuItem value={'usatl01-mon02.nodes.constellix.net'}>Atlanta, GA, U.S.A</MenuItem>
								<MenuItem value={'ussfo01-mon01.nodes.constellix.net'}>San Francisco, CA, U.S.A</MenuItem>
								<MenuItem value={'frpar01-mon01.nodes.constellix.net'}>Paris, France</MenuItem>
								<MenuItem value={'dkcph01-mon02.nodes.constellix.net'}>Copenhagen, Denmark</MenuItem>
								<MenuItem value={'defra01-mon02.nodes.constellix.net'}>Frankfurt, Germany</MenuItem>
								<MenuItem value={'jptyo02-mon02.nodes.constellix.net'}>Tokyo, Japan</MenuItem>
								<MenuItem value={'nlams01-mon01.nodes.constellix.net'}>Amsterdam, Netherlands</MenuItem>
								<MenuItem value={'uswas13-mon02.nodes.constellix.net'}>Washington, DC, U.S.A</MenuItem>
								<MenuItem value={'usdal02-mon01.nodes.constellix.net'}>Dallas, TX, U.S.A</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid container justify="center">
						<Button size="large" variant="contained" color="primary" onClick={props.handleSubmit}>
							Run Traceroute
						</Button>
					</Grid>
				</form>
			</Grid>
		</div>
	);
}
