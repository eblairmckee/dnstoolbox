import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import './navigation.modules.scss';

const drawerWidth = 240;
const primaryLighter = '#afeced';
const textGlow = '1px 1px 5px rgba(175, 236, 237, 0.5)';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		},
		color: primaryLighter,
		textShadow: textGlow
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		},
		backgroundColor: '#292a51',
		color: 'white'
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: {
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export function ResponsiveDrawer(props) {
	const classes = useStyles(props);

	const [mobileOpen, setMobileOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	function handleListItemClick(event, index) {
		setSelectedIndex({ index });
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<div className="logo__wrapper">
				<div className="logo__background">
					<img src="../../../assets/dns-tools-white.png" alt="DNS Tools logo" className="logo__image" />
				</div>
			</div>
			<List>
				<NavLink className="nav__link" to="/">
					<ListItem button selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
						<ListItemIcon>
							<Icon>home</Icon>
						</ListItemIcon>
						<ListItemText primary="Diagnostics" />
					</ListItem>
				</NavLink>
			</List>
			<Divider />
			<List>
				<NavLink className="nav__link" to="/traceroute">
					<ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
						<ListItemIcon>
							<Icon>compare_arrows</Icon>
						</ListItemIcon>
						<ListItemText primary="Traceroute" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/propagation">
					<ListItem button selected={selectedIndex === 1} onClick={event => handleListItemClick(event, 1)}>
						<ListItemIcon>
							<Icon>send</Icon>
						</ListItemIcon>
						<ListItemText primary="DNS Propagation" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/dnslookup">
					<ListItem button selected={selectedIndex === 2} onClick={event => handleListItemClick(event, 2)}>
						<ListItemIcon>
							<Icon>search</Icon>
						</ListItemIcon>
						<ListItemText primary="DNS Lookup" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/dnstrace">
					<ListItem button selected={selectedIndex === 3} onClick={event => handleListItemClick(event, 3)}>
						<ListItemIcon>
							<Icon>360</Icon>
						</ListItemIcon>
						<ListItemText primary="DNS Trace" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/traceroute">
					<ListItem button selected={selectedIndex === 4} onClick={event => handleListItemClick(event, 4)}>
						<ListItemIcon>
							<Icon>check</Icon>
						</ListItemIcon>
						<ListItemText primary="TCP Check" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/traceroute">
					<ListItem button selected={selectedIndex === 5} onClick={event => handleListItemClick(event, 5)}>
						<ListItemIcon>
							<Icon>http</Icon>
						</ListItemIcon>
						<ListItemText primary="Web Check" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/traceroute">
					<ListItem button selected={selectedIndex === 6} onClick={event => handleListItemClick(event, 6)}>
						<ListItemIcon>
							<Icon>fingerprint</Icon>
						</ListItemIcon>
						<ListItemText primary="Whois" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/traceroute">
					<ListItem button selected={selectedIndex === 7} onClick={event => handleListItemClick(event, 7)}>
						<ListItemIcon>
							<Icon>my_location</Icon>
						</ListItemIcon>
						<ListItemText primary="GeoIP" />
					</ListItem>
				</NavLink>
			</List>
			<List>
				<NavLink className="nav__link" to="/traceroute">
					<ListItem button selected={selectedIndex === 8} onClick={event => handleListItemClick(event, 8)}>
						<ListItemIcon>
							<Icon>dns</Icon>
						</ListItemIcon>
						<ListItemText primary="Nameservers" />
					</ListItem>
				</NavLink>
			</List>
		</div>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<div className="menu-button__wrapper">
						<IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerToggle} className={classes.menuButton}>
							<MenuIcon />
						</IconButton>
					</div>
					<Typography variant="h6" color="inherit" className="text--glow" noWrap>
						DNS Toolbox
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer}>
				<Hidden smUp implementation="css">
					<Drawer
						container={classes.container}
						variant="temporary"
						anchor={classes.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant="permanent"
						open>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

ResponsiveDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired
};
