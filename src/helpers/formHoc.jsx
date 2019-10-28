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
};

export const InputOnchangeNumberHor = (props) => {
    let { input, meta, ...nextProps } = props;
    let NewInput = {
        ...input,
        onChange:(event) => {
            if (event.target.value.length>2) {
                return;
            }
            input.onChange(event);
        }
    };
    let style={...props.style};
    return (
        <FormsControl {...props}>
            {React.createElement(`${props.tag}`, {...NewInput,...nextProps,style:style},null)}
        </FormsControl>
    )
};
export const InputOnchangeNumberSecMin = (props) => {
    let { input, meta, ...nextProps } = props;
    let NewInput = {
        ...input,
        onChange:(event) => {
            console.log(event.target.value);
            if (event.target.value.length >2) {
                return;
            }
            if (event.target.value.length === 1&&event.target.value > 5) {
                return
            }
            if (event.target.value < 60) {
                input.onChange(event);
            }
        }
    };
    let style={...props.style};
    return (
        <FormsControl {...props}>
            {React.createElement(`${props.tag}`, {...NewInput,...nextProps,style:style},null)}
        </FormsControl>
    )
};

export default Input