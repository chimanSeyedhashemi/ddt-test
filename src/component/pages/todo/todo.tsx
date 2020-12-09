import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../../../redux/appState";
import { BaseComponent } from "../../base/baseComponent";

interface IProps { }

interface IState { }

class TodoComponent extends BaseComponent<IProps, IState> {

  render() {
    return (
      <>todo</>
    );
  }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
  return {};
};

const state2props = (state: IReduxState) => {
  return {};
};

export const Todo = connect(state2props, dispatch2props)(TodoComponent);
