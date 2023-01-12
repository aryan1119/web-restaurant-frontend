import { combineReducers } from 'redux';

import { IAction, IState } from 'shared/interface/state';

import loadingReducer from './loadingReducer';
import authReducer from 'features/auth/store/reducer';

//We have a auth reducer to check user session. In demo project we do not have any login but still I am not removing
const appReducer = combineReducers({
	loading: loadingReducer,
	auth: authReducer
});

const rootReducer = (state: IState | undefined, action: IAction) => {
	if (action.type === 'LOGOUT') {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
