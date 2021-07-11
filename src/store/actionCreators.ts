import * as actionTypes from "./actionTypes";

export function turnOn(board: IBoard) {
    const action: BoardAction = {
        type: actionTypes.TURN_ON,
        payload: board
    };

    return simulateHttpRequest(action);
}

export function turnOff(board: IBoard) {
    const action: BoardAction = {
        type: actionTypes.TURN_OFF,
        payload: board
    };

    return simulateHttpRequest(action);
}

export function changeSize(size: SizeChange) {
    const action: BoardAction = {
        type: actionTypes.CHANGE_SIZE,
        payload: size
    };

    console.log(action)

    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: BoardAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 100);
    };
}
