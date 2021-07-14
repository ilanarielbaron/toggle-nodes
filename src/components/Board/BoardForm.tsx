import * as React from "react";
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { schema } from "./schema";

interface Props {
    initialValues: { rows: number, columns: number };
    handleChangeSize: (parameters: SizeChange) => void;
}

export const BoardForm = ({initialValues, handleChangeSize}: Props) => (
    <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
            handleChangeSize({columnsLength: values.columns, rowsLength: values.rows})
        }}
        validationSchema={schema}
    >
        {props => {
            const {
                errors,
                isValid,
            } = props;

            return (
                <Form>
                    <div>
                        <label htmlFor="rows">Rows</label>
                        <Field id="rows" name="rows" type="number" min="1" max='10'/>
                        {errors.rows && <p>{errors.rows}</p>}
                    </div>
                    <div>
                        <label htmlFor="columns">Columns</label>
                        <Field id="columns" name="columns" type="number" min="1"
                               max='10'/>
                        {errors.columns && <p>{errors.columns}</p>}
                    </div>
                    <button disabled={!isValid} type="submit">Change Size</button>
                </Form>
            )
        }}
    </Formik>
)
