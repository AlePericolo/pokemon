import * as actions from './types';

export const setUserInfo = (userInfo) => {
	return async (dispatch) => {

		dispatch({
			type: actions.SET_USER_INFO,
			payload: userInfo
		});
	};
};

export const catchPokemon = (name) => {
	return async (dispatch) => {

		dispatch({
			type: actions.SET_CATCH,
			payload: name
		});
	};
};

export const removeCatchedPokemon = (name) => {
	return async (dispatch) => {

		dispatch({
			type: actions.REMOVE_CATCH,
			payload: name
		});
	};
};



export const handleLanguage = (language) => {
	return async (dispatch) => {

		dispatch({
			type: actions.SET_LANGUAGE,
			payload: language
		});

	};
}

export const handleModal = (isVisible) => {
	return async (dispatch) => {

		dispatch({
			type: actions.SET_MODAL,
			payload: isVisible
		});

	};
}
