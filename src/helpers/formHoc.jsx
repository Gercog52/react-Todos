import React from 'react';

const FormsControl = (props) => {
    return (
        <div>
            {props.children}
            <span style={(props.meta.error && props.meta.touched) ? {} : { display: 'none' }}>Обязательное поле</span>
        </div>
    )

}
const Input = (props) => {
    let { input, meta, ...nextProps } = props;
    let style={...props.style};
    return (
        <FormsControl {...props}>
            {React.createElement(`${props.tag}`, {...input,...nextProps,style:style},null)}
        </FormsControl>
    )
}
export default Input