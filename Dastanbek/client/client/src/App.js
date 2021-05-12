import React from 'react'
import Styles from './App.module.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Navbar } from './components/Navbar/Navbar'
import { Main } from './components/Main/Main'
import { Add } from './components/Add/Add'
import { ProductFragment } from './fragments/ProductFragment'

export const App = () => {
  	return (
		<Router>
			<div className={Styles.app}>
				<Switch>
					<Route path="/" exact>
						<Navbar />
						<Main />
					</Route>
					<Route path="/add" exact>
						<Navbar />
						<Add />
					</Route>
					<Route path="/edit/:id" exact>
						<Navbar />
						<ProductFragment />
					</Route>
				</Switch>
				
			</div>
		</Router>
  	)
}

