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
        async(position: NodePosition) => {
            await turnOffAction(position, board, dispatch)
        },
        [dispatch, board, turnOffAction]
    );

    const turnOnNode = React.useCallback(
        async(position: NodePosition) => {
            await turnOnAction(position, board, dispatch)
        },
        [dispatch, board, turnOnAction]
    );

    const changeBoardSize = React.useCallback(
        async(newSize: SizeChange) => {
            await changeSizeAction(newSize, dispatch)
        },
        [dispatch, changeSizeAction]
    )

    const submitBoard = React.useCallback(
        async () => {
            await submitBoardAction(board, dispatch)
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
