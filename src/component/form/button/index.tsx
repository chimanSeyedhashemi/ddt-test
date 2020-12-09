import React, { ButtonHTMLAttributes } from 'react';



interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

interface IState{}

class AppButton extends React.Component<IProps, IState> {
    //static defaultProps/* : IProps */ = { };
    private propsWithoutClassName(props: IProps):ButtonHTMLAttributes<HTMLButtonElement> {
        let newP = { ...props };
        delete newP.className;

        return newP;
    }

    render() {
    
        return (
            <>
              <button className={`btn ${this.props.className}`} {...this.propsWithoutClassName(this.props)}>{this.props.children}</button>
            </>
        )
    }
}

export { AppButton }