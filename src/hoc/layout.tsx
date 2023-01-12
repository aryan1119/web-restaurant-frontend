/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Sidebar from 'shared/components/sidebar/sidebar';

import withRouter from './withRouter';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<div className='app-main-wrapper flex'>
			<Sidebar />
			<div className='app-content'>{props.children}</div>
		</div>
	);
};

export default withRouter(Layout);
