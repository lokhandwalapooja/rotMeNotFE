import { HistoryActionTypes } from '../../actions/userAction/actionType';

const initialState = {
    history: null,
}

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case HistoryActionTypes.ADD_HISTORY:
            return updateObject(state,
                {
                    history: action.payload
                });

        default: return state;
    }
}