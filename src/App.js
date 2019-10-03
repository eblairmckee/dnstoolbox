import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ResponsiveDrawer } from './components/navigation/Navigation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Routes } from './routes/Routes';
import './App.scss';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#00c7d2'
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			light: '#5aaad5',
			main: '#6bb8dc',
			// dark: will be calculated from palette.secondary.main,
			contrastText: '#ffffff'
		}
	},

	overrides: {
		MuiPaper: {
			root: {
				backgroundColor: '#292a51'
			}
		}
	}
});

function App() {
	return (
		<div>
			<MuiThemeProvider theme={theme}>
				<HashRouter>
					<div className="app">
						<div className="content__wrapper">
							<ResponsiveDrawer />
							<div className="content">
								<Routes />
							</div>
						</div>
					</div>
				</HashRouter>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
