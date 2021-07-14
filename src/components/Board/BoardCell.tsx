import * as React from "react";

interface Props {
    positionChange: PositionChange;
    handleChange: (position: PositionChange) => void;
}

export const BoardCell = ({ positionChange, handleChange }: Props) => {
    const {columnNumber, rowNumber, value} = positionChange

    return (
        <th onClick={() => handleChange({rowNumber, columnNumber, value})}>
            <p>{value ? '0' : '-'}</p>
        </th>
    )
};
