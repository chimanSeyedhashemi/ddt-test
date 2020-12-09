import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IUser, TCreatUser } from "../../../model/model.user";
import { IReduxState } from "../../../redux/appState";
import { BaseComponent } from "../../base/baseComponent";
import { CatodGrid } from '@cattod/react-grid';
import { columnDef } from "./colUser";
import { action_updateUsers } from "../../../redux/action/users";
import { EMODALTYPE, UserModal } from "./userModal";
import { AppButton } from "../../form/button";

interface IProps {
  onUpdateUsers?(users: Array<IUser>): void
  users: Array<IUser>
}

interface IState {
  user?: IUser;
  showModal: boolean;
  typeModal:EMODALTYPE;
}


class UsersComponent extends BaseComponent<IProps, IState> {
  state = { user: undefined, showModal: false , typeModal:EMODALTYPE.CREATE}


  deleteUser = (userId: string) => {
    let newList: Array<IUser> = this.props.users
    newList = (newList! as Array<IUser>).filter(user => user.id !== userId)
    this.props.onUpdateUsers && this.props.onUpdateUsers(newList)
  }
  editUser=(user: IUser) =>{

    this.setState({ user, showModal: true, typeModal:EMODALTYPE.EDIT })
  }

  onHide=()=> {
    this.setState({ showModal: false })
  }
  update=(user:IUser)=>{
    let index = this.props.users.findIndex(item=>item.id===user.id)
    let newList = this.props.users 
    newList[index] = user

    this.props.onUpdateUsers && this.props.onUpdateUsers(newList)
    this.onHide()
  }

  onAdd=(user:IUser)=>{
    let newList = this.props.users
    newList.push(user)
    this.props.onUpdateUsers && this.props.onUpdateUsers(newList)
    this.onHide()
  }

  addUser = ()=>{
    this.setState({showModal:true, typeModal:EMODALTYPE.CREATE})
  }

  render() {
    return (
      <>
        <div>
          <div>
            <AppButton className="btn-primary" onClick={()=>this.addUser()}>Add user</AppButton>
          </div>
          <CatodGrid
            dataRow={this.props.users}
            columnDef={columnDef(this.deleteUser, this.editUser)}
            className="table-striped  bg-white table table-borderless p-3 text-center"

          />
          <UserModal
          type={this.state.typeModal}
            user={this.state.user!}
            onEdit={(user:IUser)=>this.update(user)}
            onAdd={(user:IUser)=>this.onAdd(user)}
            show={this.state.showModal}
            onHide={() => this.onHide()} />
        </div>
      </>
    );
  }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
  return {
    onUpdateUsers: (users: Array<IUser>) => dispatch(action_updateUsers(users)),
  };
};

const state2props = (state: IReduxState) => {
  return {
    users: state.users
  };
};

export const Users = connect(state2props, dispatch2props)(UsersComponent);
