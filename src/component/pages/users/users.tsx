import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { BaseComponent } from "../../base/baseComponent";

interface IProps { }

interface IState { }

class UsersComponent extends BaseComponent<IProps, IState> {

  render() {
    return (
      <>users</>
    );
  }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
  return {};
};

const state2props = (state: any) => {
  return {};
};

export const Users = connect(state2props, dispatch2props)(UsersComponent);
