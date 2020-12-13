import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IMessage } from "../../../model/model.message";
import { IReduxState } from "../../../redux/appState";
import { BaseComponent } from "../../base/baseComponent";
import { MessageCard } from "./cardMessage";

interface IProps { }

interface IState { list: Array<IMessage>, index: number }

const randomHeight = (): string => {
  return `${Math.random() * 200}px`
}



const testList = (index: number, length: number): Array<IMessage> => {
  let list: Array<IMessage> = []
  for (let i = 0; i < length; i++) {
    list.push({
      randomId: Math.random(),
      name: `hello${i + index}`,
      id: `${i + index}`,
      randomHeghth: randomHeight()
    })
  }
  return list
}

class MessageListComponent extends BaseComponent<IProps, IState> {

  state = { list: testList(0, 20), index: 0 }


  handleScroll() {

    let docScroll = window.document.getElementById("todo-wrapper")
    if (docScroll && docScroll!.scrollTop >= docScroll!.scrollHeight - docScroll!.offsetHeight) {
      const lengthOfArray = 20
      let newList = this.state.list.concat(testList(this.state.index + lengthOfArray, lengthOfArray))

      this.setState((prev) => { return {list: newList, index: prev.index + lengthOfArray } })

    }

  }
  render() {
    return (
      <>
        <div className="todo-wrapper" id='todo-wrapper' onScroll={(e) => { this.handleScroll() }}>
          {this.state.list.map((item, index) => {
            return (
              <div key={item.randomId}>
                <MessageCard message={item} />
              </div>
            )
          })}
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

export const MessageList = connect(state2props, dispatch2props)(MessageListComponent);
