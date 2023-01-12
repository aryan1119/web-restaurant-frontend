import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'hoc/layout';

import HomePage from 'features/home/container/homePageContainer';
import ReaturantDetailPage from 'features/restaurantDetails/container/restaurantDetailsContainer';
import Spinner from 'shared/spinner/spinner';
import ComingSoon from 'shared/components/comingSoon/comingSoon';

const App: React.FC = () => {
	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path='/restaurants' element={<HomePage />} />
					<Route path='/restaurants/:restaurantId' element={<ReaturantDetailPage />} />
					<Route path='/setting' element={<ComingSoon />} />
					<Route path='/notification' element={<ComingSoon />} />
					<Route path='/support' element={<ComingSoon />} />
					<Route path='/orders' element={<ComingSoon />} />
					<Route path='*' element={<Navigate replace to='/restaurants' />} />
				</Routes>
			</Suspense>
		</Layout>
	);
};

export default App;
