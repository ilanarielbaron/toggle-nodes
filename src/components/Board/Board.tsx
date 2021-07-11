import * as React from "react";
import {useBoard} from "../../hooks/useBoard";
import {BoardCell} from "./BoardCell";
import {Container} from "./styled";
import {BoardForm} from "./BoardForm";

interface MyFormValues {
    rows: number;
    columns: number;
}

export const Board = () => {
    const {turnOffNode, board, turnOnNode, changeBoardSize} = useBoard()
    const initialValues: MyFormValues = {rows: 4, columns: 4}

    const handleChangeValue = ({rowNumber, columnNumber, value}: PositionChange) => {
        if (value) {
            turnOffNode({row: rowNumber, column: columnNumber})
        } else {
            turnOnNode({row: rowNumber, column: columnNumber})
        }
    }

    const handleChangeSize = (values: SizeChange) => {
        changeBoardSize(values)
    }

    return (
        <Container>
            <div>
                <h1>{board.title}</h1>
            </div>
            <table>
                <tbody>
                {board.rows.map((row, rowNumber) => {
                    return (
                        <tr key={rowNumber}>
                            {row.map((value, columnNumber) => (
                                <BoardCell
                                    key={columnNumber}
                                    handleChange={handleChangeValue}
                                    positionChange={{columnNumber, rowNumber, value}}/>
                            ))}
                        </tr>
                    )
                })}
                </tbody>
            </table>
           <BoardForm initialValues={initialValues} handleChangeSize={handleChangeSize} />
        </Container>
    );
};
