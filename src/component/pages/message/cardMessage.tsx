import React from "react";
import { IMessage } from "../../../model/model.message";
import { BaseComponent } from "../../base/baseComponent";

interface IProps {
  message: IMessage
}

interface IState { }


export class MessageCard extends BaseComponent<IProps, IState> {

 public render() {

    return (
      <>

        <div
          className="item-test"
          style={{ height: this.props.message.randomHeghth }}>
          {this.props.message.name}
        </div>


      </>
    );
  }
}
