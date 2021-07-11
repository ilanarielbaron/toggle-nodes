import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import * as React from "react";
import {changeSize, turnOff, turnOn} from "../store/actionCreators";

type BoardState = {
    board: IBoard;
};

export const useBoard = () => {
    const board: IBoard = useSelector(
        // @ts-ignore
        (state: BoardState) => state.board.board
    );

    const dispatch: Dispatch<any> = useDispatch();

    const turnOffNode = React.useCallback(
        (position: NodePosition) => {
            let newBoard: IBoard = board;
            newBoard.rows[position.row][position.column] = false
            dispatch(turnOff(newBoard))
        },
        [dispatch, board, turnOff]
    );

    const turnOnNode = React.useCallback(
        (position: NodePosition) => {
            let newBoard: IBoard = board;
            newBoard.rows[position.row][position.column] = true
            dispatch(turnOn(newBoard))
        },
        [dispatch, board, turnOn]
    );

    const changeBoardSize = React.useCallback(
        (newSize: SizeChange) => {
            dispatch(changeSize(newSize))
        },
        [dispatch, changeSize]
    )

    return {
        turnOffNode,
        turnOnNode,
        changeBoardSize,
        board,
    }
}
