import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'pages/components_wrap'
import setting from 'pages/settings'
class App extends Component {
	constructor(props) {
		super(props)
		this.state ={

		}
	}
	render(){
		return(
      <div className='App'>
        <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/settings" component={setting} />
        </BrowserRouter>
      </div>
    )
	}
}
export default App;