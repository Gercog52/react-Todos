import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input from "../helpers/formHoc";
import styles from './FormList.module.css';

const FormInput = (props) => {

    let submit = (data) => {
        if (data.TaskText.length===0) {
            return
        }
        props.addTaskThink(data.TaskText,'inputTask')
    };

    return ( <div>
            <Form items={props.items} initialValues={{TaskText:''}} onSubmit={submit}/>
        </div>
    )
};

const FormRedax = (props) => {
    return (
<<<<<<< HEAD
        <form  className={styles.fomsR} onSubmit={props.handleSubmit}>
=======
        <form className={styles.fomsR} onSubmit={props.handleSubmit}>
>>>>>>> ed549858d8ec364d0cc6f1060390c94a28005041
            <span className={styles.str} style={{display:(!props.items) && 'none' }}>❯</span>
            <Field autoComplete={'off'} className={styles.formInput} tag='input' placeholder={'What needs to be done?'} component={Input} name={'TaskText'} />
        </form>
    )
}
const Form = reduxForm({
    form:'inputTask'
})(FormRedax);



export default FormInput