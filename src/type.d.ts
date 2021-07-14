interface IBoard {
  title?: string
  rows?: Array<Array<boolean>>;
  rowsLength?: number;
  columnsLength?: number;
}

type BoardState = {
  board: IBoard;
};

type BoardAction = {
  type: string;
  payload: IBoard;
};

type NodePosition = {
  row: number
  column: number
}

type PositionChange = {
  columnNumber: number
  rowNumber: number
  value: boolean
}

type SizeChange = {
  rowsLength: number
  columnsLength: number
}

type DispatchType = (args: BoardAction) => BoardAction;
