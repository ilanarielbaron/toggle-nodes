import * as actionTypes from "./actionTypes"
import { initialState } from "./initialState";

let newBoard: IBoard

const boardReducer = (
    state: BoardState = initialState,
    action: BoardAction
): BoardState => {
    switch (action.type) {
        case actionTypes.TURN_OFF:
        case actionTypes.TURN_ON:
        case actionTypes.CHANGE_SIZE:
        case actionTypes.SUBMIT_BOARD:
            newBoard = action.payload
            return {
                ...state,
                board: {...state.board, ...newBoard},
            }
    }
    return state
}

export default boardReducer
