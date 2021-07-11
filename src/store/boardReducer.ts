import * as actionTypes from "./actionTypes"

const initialState: BoardState = {
    board: {
        rows: [
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false]
        ],
        rowsLength: 4,
        columnsLength: 4,
        title: 'my board'
    }
};

let newBoard: IBoard | SizeChange

const boardReducer = (
    state: BoardState = initialState,
    action: BoardAction
): BoardState => {
    switch (action.type) {
        case actionTypes.TURN_OFF:
            newBoard = action.payload
            return {
                ...state,
                board: {...state.board, ...newBoard},
            }
        case actionTypes.TURN_ON:
            newBoard = action.payload
            return {
                ...state,
                board: {...state.board, ...newBoard},
            }
        case actionTypes.CHANGE_SIZE:
            let newMatrix: Array<Array<boolean>> = []

            for(let i = 0; i < action.payload.rowsLength; i++) {
                const row = []
                for(let j = 0; j < action.payload.columnsLength; j++) {
                    row.push(false)
                }
                newMatrix.push(row)
            }

            newBoard = {
                columnsLength: action.payload.columnsLength,
                rowsLength: action.payload.rowsLength,
                rows: newMatrix,
                title: state.board.title
            }

            console.log(newBoard)
            return {
                ...state,
                board: newBoard,
            }
    }
    return state
}

export default boardReducer
