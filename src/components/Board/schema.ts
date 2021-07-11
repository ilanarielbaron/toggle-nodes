import * as Yup from "yup";

export const schema = Yup.object().shape({
    rows: Yup.number()
        .min(1)
        .max(10, "Maximum 10 rows")
        .required("Rows size is required"),
    columns: Yup.number()
        .min(1)
        .max(10, "Maximum 10 columns")
        .required("columns size is required")
})
