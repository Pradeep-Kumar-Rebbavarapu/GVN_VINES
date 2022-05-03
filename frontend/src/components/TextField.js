
import React from 'react'
import { Field, ErrorMessage, FastField } from 'formik'
export default function TextField(props1) {
    const { ringcolor, label, name, className, ...rest } = props1
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field>
                {
                    (props2) => {
                        console.log('Field Rendered');
                        const { field, form, meta } = props2
                        return (
                            <textarea id={props2.id} {...field} placeholder={props1.placeholder} className={props1.className} type={props1.type} />
                        )



                    }
                }
            </Field>
            <div id="error" className="text-red-500">
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}