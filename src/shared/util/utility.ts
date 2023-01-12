import { ThunkDispatch } from 'redux-thunk';
import _ from 'lodash';

import { IAction, IState } from 'shared/interface/state';
import { IS_SAFARI } from 'shared/constants/constant';

/**
 * create action creator
 * @param ACTION - type of action
 * @param data - data
 */
export const createAction = (ACTION: string, data: any = null): IAction => ({
	type: ACTION,
	payload: data
});

/**
 * create loading selector
 * @param actions - actions to dispatch
 */
export const createLoadingSelector = (actions: string[]) => (state: IState) =>
	// returns true only when all actions is not loading
	_(actions).some((action: string) => _.get(state, `loading.api.${action}`));

/**
 * dispatch action after given time (to handle some events like close modal after success api call)
 * @param dispatch - dispatch object
 * @param action - action type
 * @param time - time after which action is to be dispatched (default - 100ms)
 */
export const dispatchActionAfterTime = (
	dispatch: ThunkDispatch<unknown, unknown, IAction>,
	action: string,
	time = 100
) => {
	setTimeout(() => {
		dispatch(createAction(action));
	}, time);
};

export const debounce = (func: any, wait = 500) => {
	let h: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => func(...args), wait);
	};
};

export const formatOpeningHours = (text: string) => {
	if (!text) return '-';
	const multipleValues = text.split(',');
	return `${multipleValues[0]},<br />${multipleValues[1] || ''}`;
};

let scrollPosition = 0;

const body = document.getElementsByTagName('body')[0];
export const handleAddOverflow = (oldScrollValue = 0) => {
	const webAppContentWrapper = document.getElementsByClassName('wrapper')[0] as HTMLDivElement;

	if (body) {
		if (IS_SAFARI) {
			if (oldScrollValue) {
				window.scrollTo({ top: oldScrollValue });
			}
			scrollPosition = window.pageYOffset;
			document.body.style.top = `-${oldScrollValue || scrollPosition}px`;
			body.classList.add('lock-position');
			if (webAppContentWrapper) {
				const topPosition = oldScrollValue || scrollPosition;
				webAppContentWrapper.style.top = topPosition > 0 ? `-${topPosition - 88}px` : '88px';
				webAppContentWrapper.classList.add('lock-position');
			}
		} else {
			body.classList.add('overflow--hidden');
			webAppContentWrapper && webAppContentWrapper.classList.add('overflow--hidden');
		}
	}
};

export const handleRemoveOverflow = () => {
	const webAppContentWrapper = document.getElementsByClassName('wrapper')[0] as HTMLDivElement;
	if (body) {
		if (IS_SAFARI) {
			body.classList.remove('lock-position');
			document.body.style.removeProperty('top');
			if (webAppContentWrapper) {
				webAppContentWrapper.style.removeProperty('top');
				webAppContentWrapper.classList.remove('lock-position');
				webAppContentWrapper.scrollTo({ top: scrollPosition });
			}
			window.scrollTo({ top: scrollPosition });
		} else {
			body.classList.remove('overflow--hidden');
			webAppContentWrapper && webAppContentWrapper.classList.remove('overflow--hidden');
		}
	}
};
