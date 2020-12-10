import React from 'react';
import { History } from "history";
import { Store2 } from '../../redux/store';
import { action_user_logged_out } from '../../redux/action/user';
import { action_remove_token } from '../../redux/action/token';
import { BaseService } from '../../services/service.base';

export interface IBaseProps {}

export abstract class BaseComponent<p extends IBaseProps, S = {}, SS = any> extends React.Component<p, S, SS> {

    async onApplogout(history: History) {
        Store2.dispatch(action_user_logged_out());
        Store2.dispatch(action_remove_token());
        BaseService.removeToken();
        history.push('/login');
    }

}