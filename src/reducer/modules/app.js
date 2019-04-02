import {
	IE_CHECKER_EVENT,
	CLOSE_POP_UP
} from "../../actions/type/app";

export const initialState = {
	ieChecker: true,
	noneStyle: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case IE_CHECKER_EVENT:
			return {
				...state,
				ieChecker: action.ieChecker
			}

		case CLOSE_POP_UP:
			return {
				...state,
				noneStyle: action.noneStyle
			}

		default:
			return state;
	};
};

export default reducer;