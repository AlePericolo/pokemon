import * as actions from './types';

export const setUserInfo = (userInfo) => {
	return async (dispatch) => {

		dispatch({
			type: actions.SET_USER_INFO,
			payload: userInfo
		});
	};
};

export const setFavoritePokemon = (id) => {
	return async (dispatch) => {

		dispatch({
			type: actions.SET_FAVORITE,
			payload: id
		});
	};
};

export const handleModal = (isVisible) => {
	return async (dispatch) => {

		dispatch({
			type: actions.MODAL,
			payload: isVisible
		});

	};
}
