import * as actionTypes from "./actionTypes";
import {Dispatch} from "redux";

export function turnOnAction(position: NodePosition, board: IBoard, dispatch: any) {
    let newBoard: IBoard = board;
    if (!newBoard.rows) {
        return;
    }
    newBoard.rows[position.row][position.column] = true

    const action: BoardAction = {
        type: actionTypes.TURN_ON,
        payload: board
    };

    return dispatch(simulateHttpRequest(action));
}

export function turnOffAction(position: NodePosition, board: IBoard, dispatch: any) {
    let newBoard: IBoard = board;
    if (!newBoard.rows) {
        return;
    }
    newBoard.rows[position.row][position.column] = false

    const action: BoardAction = {
        type: actionTypes.TURN_OFF,
        payload: board
    };

    return dispatch(simulateHttpRequest(action));
}

export function changeSizeAction(size: SizeChange, dispatch: any) {
    const newMatrix = changeSize(size.columnsLength, size.rowsLength)

    const newBoard = {
        columnsLength: size.columnsLength,
        rowsLength: size.rowsLength,
        rows: newMatrix
    }

    const action: BoardAction = {
        type: actionTypes.CHANGE_SIZE,
        payload: newBoard
    };

    return dispatch(simulateHttpRequest(action))
}

function changeSize(columns: number, rows: number) {
    let newMatrix: Array<Array<boolean>> = []

    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < columns; j++) {
            row.push(false)
        }
        newMatrix.push(row)
    }

    return newMatrix
}

export function submitBoardAction(board: IBoard) {
    return async function submitBoardThunk(dispatch: Dispatch<any>) {
        if (!board.rows) {
            return
        }
        const response = await simulateSubmitForm();

        let maxRow = 0
        let maxColumn = 0

        response.forEach(column => column.forEach((point: [number, number]) => {
            const [column, row] = point
            maxRow = row > maxRow ? row : maxRow
            maxColumn = column > maxColumn ? column : maxColumn
        }))

        const newMatrix = changeSize(maxColumn + 1, maxRow + 1)

        response.forEach(columnArray => {
            columnArray.forEach((cell: [number, number]) => {
                const [column, row] = cell
                newMatrix[row][column] = true;
            })
        })

        const newBoard = {
            rows: newMatrix
        }

        const action: BoardAction = {
            type: actionTypes.SUBMIT_BOARD,
            payload: newBoard
        };

        dispatch(action);
    }
}

export function simulateHttpRequest(action: BoardAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 100);
    };
}

export async function simulateSubmitForm(): Promise<Array<any>> {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve([
                [[0, 1], [0, 2]], [[2, 3]], [[4, 3]], [[7, 3]], [[8, 5]], [[8, 7], [8, 8]]
            ])
        }, 100);
    })
}
