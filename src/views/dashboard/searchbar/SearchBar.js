import React from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import './searchbar.modules.scss';

export function SearchBar(props) {
	// const [state, setState] = useState({
	// 	location: '',
	// 	domain: '',
	// 	submit: false
	// });

	const inputLabelRef = React.useRef(null);

	// const handleChange = event => {
	// 	setState({ ...state, [event.target.name]: event.target.value });
	// 	console.log('you have chosen ' + state.domain + ' and ' + state.location + ' submitted is ' + state.submit);
	// };

	// const handleSubmit = event => {
	// 	setState({ ...state, submit: true });
	// 	console.log('you have chosen ' + state.domain + ' and ' + state.location + ' submitted is ' + state.submit);
	// };

	return (
		<div className="searchbar__wrapper">
			<TextField
				id="domain"
				label="Your Domain"
				helperText="Include subdomain (if desired). Paths will be ignored. "
				variant="outlined"
				name="domain"
				value={props.domain}
				onChange={event => props.handleChange(event)}
			/>
			<FormControl variant="outlined">
				<InputLabel ref={inputLabelRef} htmlFor="location">
					Location
				</InputLabel>
				<Select value={props.location} onChange={event => props.handleChange(event)} input={<OutlinedInput name="location" id="location" />}>
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
			<Button variant="contained" color="primary" onClick={event => props.handleSubmit(event)}>
				Submit
			</Button>
		</div>
	);
}
