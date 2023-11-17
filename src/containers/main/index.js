import React, { Component } from 'react';
import Layout from 'components/layout/app';
import Sample from 'containers/settings/setting_default';

class App extends Component {
	render() {
		return(
				<Layout>
					<Sample />
				</Layout>
		)
	}
};
export default App;