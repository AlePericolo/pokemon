import * as actions from './types';

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
