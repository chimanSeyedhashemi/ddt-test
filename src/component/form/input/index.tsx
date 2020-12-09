import React, { InputHTMLAttributes } from 'react';



interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    label?:string
}

interface IState{}

class AppInput extends React.Component<IProps, IState> {
    private propsWithoutClassName(props: IProps):InputHTMLAttributes<HTMLInputElement> {
        let newP = { ...props };
        delete newP.className;

        return newP;
    }

    render() {
    
        return (
            <>
            {this.props.label?<div>{this.props.label}</div>:null}
               <input {...this.propsWithoutClassName(this.props)} className={`form-control ${this.props.className}`}/>
            </>
        )
    }
}

export { AppInput }