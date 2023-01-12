import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'hoc/layout';

import HomePage from 'features/home/container/homePageContainer';
import Spinner from 'shared/spinner/spinner';

const App: React.FC = () => {
	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route path='*' element={<Navigate replace to='/home' />} />
				</Routes>
			</Suspense>
		</Layout>
	);
};

export default App;
