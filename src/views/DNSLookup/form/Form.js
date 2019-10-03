import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
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
					<Grid container className="margin-bottom-50">
						<FormControl variant="outlined">
							<InputLabel ref={inputLabelRef} htmlFor="recordType">
								Record Type
							</InputLabel>
							<Select
								value={props.values.recordType}
								onChange={props.handleChange}
								input={<OutlinedInput name="recordType" className="input--wide" />}>
								<MenuItem value={'A'}>A</MenuItem>
								<MenuItem value={'AAAA'}>AAAA</MenuItem>
								<MenuItem value={'CNAME'}>CNAME</MenuItem>
								<MenuItem value={'MX'}>MX</MenuItem>
								<MenuItem value={'NS'}>NS</MenuItem>
								<MenuItem value={'SRV'}>SRV</MenuItem>
								<MenuItem value={'SOA'}>SOA</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid container className="margin-bottom-50">
						<FormControl variant="outlined">
							<InputLabel ref={inputLabelRef} htmlFor="nameserver">
								Nameserver to Query
							</InputLabel>
							<Select
								value={props.values.nameserver}
								onChange={props.handleChange}
								input={<OutlinedInput name="nameserver" className="input--wide" />}>
								<MenuItem value={'8.8.4.4'} label="Google DNS - 8.8.4.4">
									Google DNS - 8.8.4.4
								</MenuItem>
								<MenuItem value={'8.8.8.8'} label="Google DNS - 8.8.8.8">
									Google DNS - 8.8.8.8
								</MenuItem>
								<MenuItem value={'208.67.222.222'} label="OpenDNS - 208.67.222.222">
									OpenDNS - 208.67.222.222
								</MenuItem>
								<MenuItem value={'208.67.220.220'} label="OpenDNS - 208.67.220.220">
									OpenDNS - 208.67.220.220
								</MenuItem>
								<MenuItem value={'208.67.222.123'} label="OpenDNS Family - 208.67.222.123">
									OpenDNS Family - 208.67.222.123
								</MenuItem>
								<MenuItem value={'208.67.220.123'} label="OpenDNS Family - 208.67.220.123">
									OpenDNS Family - 208.67.220.123
								</MenuItem>
								<MenuItem value={'8.26.56.26'} label="Comodo - 8.26.56.26">
									Comodo - 8.26.56.26
								</MenuItem>
								<MenuItem value={'8.20.247.20'} label="Comodo - 8.20.247.20">
									Comodo - 8.20.247.20
								</MenuItem>
								<MenuItem value={'87.118.111.215'} label="FoolDNS - 87.118.111.215">
									FoolDNS - 87.118.111.215
								</MenuItem>
								<MenuItem value={'213.187.11.62'} label="FoolDNS - 213.187.11.62">
									FoolDNS - 213.187.11.62
								</MenuItem>
								<MenuItem value={'81.218.119.11'} label="GreenTeam Internet - 81.218.119.11">
									GreenTeam Internet - 81.218.119.11
								</MenuItem>
								<MenuItem value={'209.88.198.133'} label="GreenTeam Internet - 209.88.198.133">
									GreenTeam Internet - 209.88.198.133
								</MenuItem>
								<MenuItem value={'199.85.126.10'} label="Norton - 199.85.126.10">
									Norton - 199.85.126.10
								</MenuItem>
								<MenuItem value={'199.85.127.10'} label="Norton - 199.85.127.10">
									Norton - 199.85.127.10
								</MenuItem>
								<MenuItem value={'199.85.126.20'} label="Norton SP - 199.85.126.20">
									Norton SP - 199.85.126.20
								</MenuItem>
								<MenuItem value={'199.85.127.20'} label="Norton SP - 199.85.127.20">
									Norton SP - 199.85.127.20
								</MenuItem>
								<MenuItem value={'199.85.126.30'} label="Norton SPO - 199.85.126.30">
									Norton SPO - 199.85.126.30
								</MenuItem>
								<MenuItem value={'199.85.127.30'} label="Norton SPO - 199.85.127.30">
									Norton SPO - 199.85.127.30
								</MenuItem>
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
							Run Lookup
						</Button>
					</Grid>
				</form>
			</Grid>
		</div>
	);
}
