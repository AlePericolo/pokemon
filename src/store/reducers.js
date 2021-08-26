import * as actions from './types';

const initial = {
	app: {
		user: {
			name: null,
			gender: null
		},
		pokemon: {
			favorite: null
		},
		modal: false
	}
};

const app = (state = initial.app, action) => {
	switch (action.type) {
		case actions.SET_FAVORITE: {
			return {
				...state,
				pokemon: {
					favorite: action.payload
				}
			};
		}
		case actions.SET_USER_INFO: {
			return {
				...state,
				user: {
					name: action.payload.name,
					gender: action.payload.gender
				}
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
