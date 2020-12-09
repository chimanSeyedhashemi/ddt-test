
import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { Localization } from "../../../config/localization/localization";
import { IToken } from "../../../model/model.token";
import { action_set_token } from "../../../redux/action/token";
import { IReduxState } from "../../../redux/appState";
import { LoginService } from "../../../services/service.login";
import { BaseComponent } from "../../base/baseComponent";
import { AppButton } from "../../form/button";
import { AppInput } from "../../form/input";
import { History } from "history";
import { EROUT } from "../../../config/route/routes";
import { IUser } from "../../../model/model.user";
import { action_user_logged_in } from "../../../redux/action/user";

interface IProps {
  onSetToken?(token: IToken): void
  history: History
  onUserLoggedIn?(user: IUser): void
}

interface IState {
  [key: string]: any;
  inputs: {
    userName: { value: string, isValid: boolean };
    password: { value: string, isValid: boolean };
  };
  isFormValid: boolean;

}

class LoginComponent extends BaseComponent<IProps, IState> {
  private _loginService = new LoginService()
  constructor(props: IProps) {
    super(props)
    this.state = {
      inputs: {
        userName: { value: "", isValid: false },
        password: { value: "", isValid: false }
      },
      isFormValid: false,
    
    }
  }

  private handleInput(value: string, inputType: "password" | "userName") {
    let isValid: boolean = value ? true : false
    let isFormValid = this.validateForm(isValid, inputType)
    this.setState({ isFormValid, inputs: { ...this.state.inputs, [inputType]: { value, isValid } } })

  }

  private validateForm(currentInput_isValid: boolean, inputType: string): boolean {
    let step_inputList: string[] = ["userName", "password"];

    const step_inputList_exceptThisInput = step_inputList.filter(inp => inp !== inputType);

    let FP_FormValidate = currentInput_isValid;

    step_inputList_exceptThisInput.forEach(inp => {

      let inpObjCore: { [K in keyof any]: any } = this.state.inputs;
      let inpObj = inpObjCore[inp]

      FP_FormValidate = inpObj?.isValid && FP_FormValidate;
    });


    return FP_FormValidate;
  }

  private async onLogin() {
    if (!this.state.isFormValid) { return; }
    let authObj = {
      username: this.state.inputs.userName.value!,
      password: this.state.inputs.password.value!
    }
    try {
      let res_token = await this._loginService.login(authObj)
      this.props.onSetToken && this.props.onSetToken(res_token.data)
      this.getProfile()
    } catch (error) {

    } finally {
    }
  }

  private async getProfile() {
    try {
      let res_user = await this._loginService.profile()
      this.props.onUserLoggedIn && this.props.onUserLoggedIn(res_user.data);
      this.props.history.push(EROUT.USERS);
    } catch (error) {

    }

  }
  public render() {
    console.log(this.state.isFormValid,"ooooooooooooooo")
    return (
      <>
        <div className="login-wrapper">


          <div className="login-item text-center">
            <h4>
              {Localization.login}
            </h4>
          </div>
          <div className="login-item">
            <AppInput
              placeholder={Localization.username}
              value={this.state.inputs.userName.value}
              onChange={(e) => this.handleInput(e.target.value, "userName")} />
          </div>
          <div className="login-item">
            <AppInput
              placeholder={Localization.password}
              value={this.state.inputs.password.value}
              onChange={(e) => this.handleInput(e.target.value, "password")} />
          </div>
          <div className="login-item ">
            <AppButton
              className="btn-primary w-100"
              disabled={!this.state.isFormValid}
              onClick={() => this.onLogin()}
              >{Localization.login}</AppButton>
          </div>
        </div>
      </>
    );
  }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
  return {
    onSetToken: (token: IToken) => dispatch(action_set_token(token)),
    onUserLoggedIn: (user: IUser) => dispatch(action_user_logged_in(user)),
  };
};

const state2props = (state: IReduxState) => {
  return {};
};

export const Login = connect(state2props, dispatch2props)(LoginComponent);
