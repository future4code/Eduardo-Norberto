import React from 'react'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'
import styled from "styled-components";
import ListaTarefa from "./components/ListaTarefa/ListaTarefa"
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from "react-redux"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk));


const TextTitle = styled.h2 `
  text-align: center;
  color: tomato;
  font-family: Helvetica, sans-serif;
  font-size: 30pt;
`;

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme()

function App() {
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<TextTitle>4Task</TextTitle>
        			<ListaTarefa>
        			</ListaTarefa>
				<AppContainer />
			</MuiThemeProvider>
		</Provider>
	)
}

export default App
