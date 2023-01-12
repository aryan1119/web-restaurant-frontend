import { IAction, IAuthState } from 'shared/interface/state';
import AuthService from 'shared/services/auth.service';

import * as actionTypes from 'store/actionTypes';

const initialState: IAuthState = {
	auth: AuthService.checkLogin()
};

const reducer = (state: IAuthState = initialState, action: IAction) => {
	switch (action.type) {
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				auth: true
			};
		case actionTypes.AUTH_FAILED:
			AuthService.removeAuthData();
			AuthService.removeUserData();
			return {
				...state,
				auth: false
			};

		default:
			return state;
	}
};

export default reducer;
