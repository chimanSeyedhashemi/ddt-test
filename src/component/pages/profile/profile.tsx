import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../../../redux/appState";
import { BaseComponent } from "../../base/baseComponent";
import { AppButton } from "../../form/button";
import {History} from "history"
interface IProps { 
  history:History
}

interface IState { }

class ProfileComponent extends BaseComponent<IProps, IState> {

  render() {
    return (
      <>
      <div>
        <AppButton className="btn-danger" onClick={()=>this.onApplogout(this.props.history)}>Log out</AppButton>
      </div>
      </>
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
