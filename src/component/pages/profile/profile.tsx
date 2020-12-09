import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../../../redux/appState";
import { BaseComponent } from "../../base/baseComponent";

interface IProps { }

interface IState { }

class ProfileComponent extends BaseComponent<IProps, IState> {

  render() {
    return (
      <>profile</>
    );
  }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
  return {};
};

const state2props = (state: IReduxState) => {
  return {};
};

export const Profile = connect(state2props, dispatch2props)(ProfileComponent);
