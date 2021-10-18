import * as actions from './types';

const initial = {
	app: {
		user: {
			name: null,
			gender: null
		},
		pokemon: {
			team: []
		},
		config: { 
			language: 'en',
			modal: false
		}
	}
};

const app = (state = initial.app, action) => {
	switch (action.type) {
		case actions.SET_USER_INFO: {
			return {
				...state,
				user: {
					name: action.payload.name,
					gender: action.payload.gender
				}
			};
		}
		case actions.SET_CATCH: {
			return {
				...state,
				pokemon: {
					team: [...state.pokemon.team, action.payload]
				}
			};
		}
		case actions.REMOVE_CATCH: {
			return {
				...state,
				pokemon: {
					team: state.pokemon.team.filter(e => e !== action.payload)
				}
			};
		}
		case actions.SET_LANGUAGE: {
			return {
				...state,
				config: {
					language: action.payload || 'en'
				}
			};
		}
		case actions.SET_MODAL: {
			return {
				...state,
				config: {
					modal: action.payload
				}
			};
		}
		default:
			return state;
	}
};

export default { app };
