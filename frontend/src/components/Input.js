
import React from 'react'
import { Field, ErrorMessage, FastField } from 'formik'
export default function Input(props1) {
    const { ringcolor, label, name, className, ...rest } = props1
    return (
        <div>
            
            <Field name={name}  {...rest}>
                {
                    (props2) => {
                        
                        const { field, form, meta } = props2
                        
                        return (
                            <>
                            
                            <input id={props1.id} {...field} className={props1.className} type={props1.type} />
                            </>
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