import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as React from "react";
import { changeSizeAction, submitBoardAction, turnOffAction, turnOnAction } from "../store/actionCreators";

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
            turnOffAction(position, board, dispatch)
        },
        [dispatch, board, turnOffAction]
    );

    const turnOnNode = React.useCallback(
        (position: NodePosition) => {
            turnOnAction(position, board, dispatch)
        },
        [dispatch, board, turnOnAction]
    );

    const changeBoardSize = React.useCallback(
        (newSize: SizeChange) => {
            changeSizeAction(newSize, dispatch)
        },
        [dispatch, changeSizeAction]
    )

    const submitBoard = React.useCallback(
        () => {
            const submitBoardThunk = submitBoardAction(board)
            dispatch(submitBoardThunk)
        },
        [dispatch, submitBoardAction]
    )

    return {
        turnOffNode,
        turnOnNode,
        changeBoardSize,
        submitBoard,
        board,
    }
}
