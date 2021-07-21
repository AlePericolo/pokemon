import * as actions from './types';

const initial = {
	app: {
		favorite: null,
		sex: null,
		modal: false
	}
};

const app = (state = initial.app, action) => {
	switch (action.type) {
		case actions.SET_FAVORITE: {
			return {
				...state,
				favorite: action.payload
			};
		}
		case actions.SET_SEX: {
			return {
				...state,
				sex: action.payload
			};
		}
		case actions.MODAL: {
			return {
				...state,
				modal: action.payload
			};
		}
		default:
			return state;
	}
};

export default { app };
