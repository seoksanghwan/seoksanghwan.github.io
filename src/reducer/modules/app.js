import {
	IE_CHECKER_EVENT
} from "../../actions/type/app";

export const initialState = {
	ieChecker: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case IE_CHECKER_EVENT:
			return {
				...state,
				ieChecker: action.ieChecker
			}

		default:
			return state;
	};
};

export default reducer;