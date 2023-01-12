/* eslint-disable react/jsx-no-bind */
import React from 'react';

import withRouter from './withRouter';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<>
			Hii inside
			{props.children}
		</>
	);
};

export default withRouter(Layout);
