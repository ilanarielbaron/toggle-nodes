import * as React from "react";
import {
    Formik,
    Form,
    Field,
} from 'formik';
import {schema} from "./schema";

interface Props {
    initialValues: { rows: number, columns: number },
    handleChangeSize: (parameters: SizeChange) => void,
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
                    <Field id="rows" name="rows" placeholder="Rows Length" type="number" min="1" max='10'/>
                    {errors.rows && <p>{errors.rows}</p>}
                    <Field id="columns" name="columns" placeholder="Columns Length" type="number" min="1"
                           max='10'/>
                    {errors.columns && <p>{errors.columns}</p>}
                    <button disabled={!isValid} type="submit">Submit Size</button>
                </Form>
            )
        }}
    </Formik>
)
