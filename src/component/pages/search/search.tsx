import { CatodGrid } from "@cattod/react-grid";
import Axios from "axios";
import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../../../redux/appState";
import { BaseService } from "../../../services/service.base";
import { GiphyService } from "../../../services/service.giphy";
import { BaseComponent } from "../../base/baseComponent";
import { AppInput } from "../../form/input";
import { columnDef } from "./colSearch";

interface IProps { }

export interface IGiphy{
  username:string,
  title:string,
  rating:string,
  url:string
}

interface IState { giphys:Array<IGiphy>}
const CancelToken = Axios.CancelToken
class SearchComponent extends BaseComponent<IProps, IState> {
  state = {giphys:[]}
  private _giphyService = new GiphyService()
  private _cancelTokenSource = BaseService.cancelTokenSource();
  protected cancelTokenConfig = { cancelToken: this._cancelTokenSource.token };

  protected cancelRequest() {
      this._cancelTokenSource.cancel(BaseService.msgRequestCanceled);
  }
  componentWillUnmount() {
      this.cancelRequest();
  }
  cancel: any
  private search =async (searchKey:string)=>{
    let value = searchKey.trim()
    this.cancel && this.cancel()
      try {
        let res = await this._giphyService.search(value,{
          cancelToken: new CancelToken((c) => {

              this.cancel = c;
          })
      })
        let giphys = this.remodelData(res.data?.data)
        this.setState({giphys})
        
      } catch (error) {
        
      }
  }

  remodelData(data:Array<any>):Array<IGiphy>{
    return data.map(item=>{
      return{
        username:item.username!,
        title:item.title!,
        rating:item.rating!,
        url:item.url!
      }
    })
  }

 public render() {

    return (
      <>
      <div>
        <AppInput placeholder="search..." onChange={(e)=>this.search(e.target.value)}/>
        {this.state.giphys && this.state.giphys[0]?
        <CatodGrid
            dataRow={this.state.giphys?this.state.giphys:[]}
            columnDef={columnDef()}
            className="table-striped  bg-white table table-borderless p-3 text-center"

          />
:null}
        </div></>
    );
  }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
  return {};
};

const state2props = (state: IReduxState) => {
  return {};
};

export const Search = connect(state2props, dispatch2props)(SearchComponent);
