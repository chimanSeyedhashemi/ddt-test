import { connect, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';
import { BaseComponent } from '../../base/baseComponent';
import { History } from "history";

interface IProps {
    history: History;
    match: any;
}

interface IState { }

class LayoutMainComponent extends BaseComponent<IProps, IState> {

    render() {
        return (
            <>
                main
            </>
        )
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {}
}

const state2props = (state: any) => {
    return {}
}

export const LayoutMain = connect(state2props, dispatch2props)(LayoutMainComponent);
